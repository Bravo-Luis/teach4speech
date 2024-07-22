import { useState, useEffect } from 'react';
import './AudioSharingGame.css';
import { AudioRecorder } from 'react-audio-voice-recorder';
import { useParams, useNavigate } from 'react-router-dom';
import { SocketConsumer } from '../utils/SocketProvider';
import { Container, Typography, Box, CircularProgress, Button } from '@mui/material';

function AudioSharingGame() {
  const socket = SocketConsumer();
  const gameCode = useParams().gameCode as string;
  const [isActive, setActive] = useState(false);
  const [controls, setControls] = useState(false);
  const [timer, setTimer] = useState(65);
  const [preGameTimer, setPreGameTimer] = useState(3);
  const [gameWord, setGameWord] = useState("");
  const [_, setRecordings] = useState<Blob[]>([]);
  const [receivedRecording, setReceivedRecording] = useState<Blob | null>(null);
  const [guess, setGuess] = useState("");
  const [isGuessing, setIsGuessing] = useState(false);
  const [gameAnswer, setGameAnswer] = useState("");
  const navigate = useNavigate();

  const objectsToDescribe = [
    'Fire', 
    'Fruits', 
    'Vegetables', 
    'Pancakes',
    'Violin',
    'Tennis'
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * objectsToDescribe.length);
    setGameWord(objectsToDescribe[randomIndex]);
  }, []);

  useEffect(() => {
    const preGameInterval = setInterval(() => {
      setPreGameTimer((prevTimer) => {
        const newTimer = prevTimer - 1;
        if (newTimer < 0) {
          setActive(true);
          clearInterval(preGameInterval);
        }
        return newTimer;
      });
    }, 1000);
    return () => clearInterval(preGameInterval);
  }, []);

  useEffect(() => {
    const micButton = document.querySelector(".audio-recorder-mic ") as HTMLButtonElement;
    if (micButton) {
      micButton.click();
    }
  }, [isActive]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        const newTimer = prevTimer - 1;
        if (newTimer <= 1) {
          const micButton = document.querySelector(".audio-recorder-mic ") as HTMLButtonElement;
          if (micButton) {
            micButton.click();
          }
        }
        if (newTimer <= 0) {
          clearInterval(interval);
          return 0;
        } else {
          return newTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setGameWord("");
      setControls(true);
    }
  }, [timer]);

  const addAudioElement = (blob: Blob) => {
    setRecordings((prevRecordings) => [...prevRecordings, blob]);
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = controls;
    document.body.appendChild(audio);

    socket.emit('submit_recording', {
      game_code: gameCode,
      blob: blob,
      answer: gameWord
    });
    setTimer(0);
  };

  useEffect(() => {
    socket.on('receive_recording', (data: any) => {

      const receivedBlob = new Blob([data.blob], { type: 'audio/webm' });
      const answer = data.answer;
      
      setGameAnswer(answer);
      setReceivedRecording(receivedBlob);
      setIsGuessing(true);
    });

    return () => {
      socket.off('receive_recording');
    };
  }, [socket, navigate, gameCode]);


  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: 4, backgroundColor: '#f5f5f5', padding: 4, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="textPrimary">
        {preGameTimer > 0 ? `Countdown: ${preGameTimer}` : timer > 0 ? `Time Remaining: ${timer}` : "Time's up!"}
      </Typography>
      <Typography variant="h6" gutterBottom color="textSecondary">
        {gameWord}
      </Typography>

      {(preGameTimer <= 0 && timer > 0 && !isGuessing) && (
        <Box>
          <AudioRecorder onRecordingComplete={addAudioElement} showVisualizer />
          <Typography variant="body1" sx={{ marginTop: 2 }} color="textPrimary">
            Click the micButton to start recording
          </Typography>
        </Box>
      )}

      {isGuessing && receivedRecording && (
        <Box sx={{ marginTop: 4 }}>
          <audio src={URL.createObjectURL(receivedRecording)} controls />
          <Typography variant="h6" gutterBottom color="textPrimary">
            Guess the word based on the recording:
          </Typography>
          {objectsToDescribe.map((element) => (
            <Button key={element} onClick={()=>{
              setGuess(element);
            }} sx={{
              backgroundColor: guess === element ? element.toUpperCase() == gameAnswer.toUpperCase() ? "green" : "red" : 'gray' ,
            }} >{element}</Button>
          ))}

          
        </Box>
      )}

      {timer > 0 && preGameTimer <= 0 && (
        <Box sx={{ marginTop: 4 }}>
          <CircularProgress />
          <Typography variant="body1" sx={{ marginTop: 2 }} color="textPrimary">
            Recording in progress...
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default AudioSharingGame;
