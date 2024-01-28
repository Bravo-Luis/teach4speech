import { useState, useEffect } from 'react';
import './Game2.css';
import { AudioRecorder } from 'react-audio-voice-recorder';
import axios from 'axios';

function Game2() {

  const [timer, setTimer] = useState(65);
  const [preGameTimer, setPreGameTimer] = useState(5);
  const [gameWord, setGameWord] = useState("")
  const [recordings, setRecordings] = useState<Blob[]>([]);
  const objectsToDescribe = [
    'Fire', 
    'Cold', 
    'Anything Purple', 
    'Fruits', 
    'Vegetables', 
    'Shapes', 
    'Breakfast Foods',
    'Instruments',
    'Sports',
    'Types of Snacks'
  ];

  // Generates a random object to describe in game
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * objectsToDescribe.length);
    setGameWord("You must describe: " + objectsToDescribe[randomIndex]);
  }, []);

  // Handles 5 second timer before the game
  useEffect(() => {
    const preGameInterval = setInterval(() => {
        setPreGameTimer((prevTimer) => {
            const newTimer = prevTimer - 1;
            if (newTimer <= 0) {
                clearInterval(preGameInterval);
            }
            return newTimer;
        });
    }, 1000);
    return () => clearInterval(preGameInterval);
  }, []);

// Handles timer countdown from 20 seconds (Game timer)
useEffect(() => {
  const interval = setInterval(() => {
    setTimer((prevTimer) => {

      const newTimer = prevTimer - 1;
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


  // Set's the game word h2 element to "" once timer reaches 0
  useEffect(() => {
    if (timer === 0){
        setGameWord("");
    }
} , [timer]);

  const addAudioElement = (blob: Blob) => {
    setRecordings((prevRecordings) => [...prevRecordings, blob]);
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
    console.log("Adding to array")
  };

  const saveRecordingLocally = () => {
    return new Promise<void>((resolve, reject) => {
      // Storing the blob in the recordings array
      if (recordings.length > 0) {
        console.log("Newly recorded audio blob:", recordings[recordings.length - 1]);
        console.log(recordings.length);
        resolve();
      }
      else {
        reject(new Error('No recordings available.'));
      }
    });
  };

  const submitRecordings = () => {
    if(recordings.length > 0){
      const combinedBlob = new Blob(recordings, {type: 'audio/webm'});

      const formData = new FormData();
      formData.append('audioBlob', combinedBlob);

      // Replace with backend API endpoint URL
      axios.post('placeholder-backend-api-endpoint', formData)
        .then(response => {
          // After player sends recording, redirect them to another screen
          // to listen to other recording and play game?
          // import { useHistory } from 'react-router-dom'
          // history.push('/send-to-directory-here')
          console.log('Audio submitted successfully', response);
        })
        .catch(error => {
          console.error('Error submitting audio', error);
          alert('An error occurred while submitting audio. Please try again.')
        });
    }
  };

  const handleSaveAndSubmit = () => {
    saveRecordingLocally()
      .then(() => {
        submitRecordings();
      })
      .catch(error => {
        console.error('Error during save:', error);
        alert('An error occurred during save. Please try again.');
      });
  };

  return (
    <>
      <div className='game-2'>
        <h1 id ='gameTimer'>{preGameTimer > 0 ? `Countdown: ${preGameTimer}` : timer > 0 ? `Time Remaining: ${timer}` : "Time's up!"}</h1>
        <h1 id='currentGameWord'>{gameWord}</h1>
      
        {(preGameTimer <= 0 && timer > 0) && (
        <div className="recordButton">
          <AudioRecorder onRecordingComplete={addAudioElement} showVisualizer />
        </div>
      )}
      
        <div>
          {recordings.length > 0 && (
            <div>
              {/* YOU WILL GET AN ERROR MESSAGE BECAUSE THERE IS NOWHERE TO SEND AUDIO YET */}
              <button id="sendRecordingToBackend" onClick={handleSaveAndSubmit}>Save and Submit</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Game2;
