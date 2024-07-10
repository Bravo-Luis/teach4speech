import { useState, useEffect } from 'react';
import './AudioSharingGame.css';
import { AudioRecorder } from 'react-audio-voice-recorder';
import { useParams, useNavigate } from 'react-router-dom';
import { SocketConsumer } from '../utils/SocketProvider';
import { Container, Typography, Box, TextField, CircularProgress, Button } from '@mui/material';

function AudioSharingGame() {
  const socket = SocketConsumer();
  const gameCode = useParams().gameCode as string;
  const [isActive, setActive] = useState(false);
  const [controls, setControls] = useState(false);
  const [timer, setTimer] = useState(65);
  const [preGameTimer, setPreGameTimer] = useState(3);
  const [gameWord, setGameWord] = useState("");
  const [recordings, setRecordings] = useState<Blob[]>([]);
  const [receivedRecording, setReceivedRecording] = useState<Blob | null>(null);
  const [guess, setGuess] = useState("");
  const [isGuessing, setIsGuessing] = useState(false);
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
    setGameWord("You must describe: " + objectsToDescribe[randomIndex]);
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
    console.log("Adding to array");

    socket.emit('submit_recording', {
      game_code: gameCode,
      blob: blob,
    });
  };

  useEffect(() => {
    socket.on('receive_recording', (data: any) => {
      const receivedBlob = data.blob;
      setReceivedRecording(receivedBlob);
      setIsGuessing(true);
    });

    socket.on('end_game', () => {
      navigate(`/end-game/${gameCode}`);
    });

    return () => {
      socket.off('receive_recording');
      socket.off('end_game');
    };
  }, [socket, navigate, gameCode]);

  const handleGuessSubmit = () => {
    socket.emit('submit_guess', {
      game_code: gameCode,
      guess: guess,
    });
    setIsGuessing(false);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: 4, backgroundColor: '#f5f5f5', padding: 4, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom color="textPrimary">
        {preGameTimer > 0 ? `Countdown: ${preGameTimer}` : timer > 0 ? `Time Remaining: ${timer}` : "Time's up!"}
      </Typography>
      <Typography variant="h6" gutterBottom color="textSecondary">
        {gameWord}
      </Typography>

      {(preGameTimer <= 0 && timer > 0) && (
        <Box>
          <AudioRecorder onRecordingComplete={addAudioElement} showVisualizer />
          <Typography variant="body1" sx={{ marginTop: 2 }} color="textPrimary">
            Click the micButton to start recording
          </Typography>
        </Box>
      )}

      {isGuessing && receivedRecording && (
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h6" gutterBottom color="textPrimary">
            Guess the word based on the recording:
          </Typography>
          <audio src={URL.createObjectURL(receivedRecording)} controls />
          <TextField
            fullWidth
            variant="outlined"
            label="Enter your guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            sx={{ marginTop: 2, backgroundColor: 'white' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleGuessSubmit}
            sx={{ marginTop: 2 }}
          >
            Submit Guess
          </Button>
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
