import { useState, useEffect } from 'react';
import './AudioSharingGame.css';
import { AudioRecorder } from 'react-audio-voice-recorder';

function AudioSharingGame() {

  const [isActive, setActive] = useState(false);
  const [controls, setControls] = useState(false);
  const [timer, setTimer] = useState(15);
  const [preGameTimer, setPreGameTimer] = useState(5);
  const [gameWord, setGameWord] = useState("")
  const [recordings, setRecordings] = useState<Blob[]>([]);
  const objectsToDescribe = [
      'Fire', 
      'Fruits', 
      'Vegetables', 
      'Pancakes',
      'Violin',
      'Tennis'
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
            if (newTimer < 0) {
                // auto call start recording
                setActive(true);
                clearInterval(preGameInterval);
            }
            return newTimer;
        });
    }, 1000);
    return () => clearInterval(preGameInterval);
  }, []);



  // Handles voice-recording button automation
  useEffect(() => {
    const button = document.querySelector(".audio-recorder-mic ") as HTMLButtonElement;
    button?.click();
  }, [isActive]);


  

// Handles timer countdown from 20 seconds (Game timer)
useEffect(() => {
  const interval = setInterval(() => {
    setTimer((prevTimer) => {

      const newTimer = prevTimer - 1;
      if (newTimer <= 1) {
        const button = document.querySelector(".audio-recorder-mic ") as HTMLButtonElement;
        if(button){
          button?.click();
          console.log("exists");
        }
        else{
          console.log("Dne");
        }  
      }
      if(newTimer <= 0){
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
        setControls(true);
    }
} , [timer]);

  const addAudioElement = (blob: Blob) => {
    setRecordings((prevRecordings) => [...prevRecordings, blob]);
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = controls;
    document.body.appendChild(audio);
    console.log("Adding to array")
  };

  const submitRecordings = () => {
    if(recordings.length > 0){
      const combinedBlob = new Blob(recordings, {type: 'audio/webm'});
      
      const formData = new FormData();
      formData.append('audioBlob', combinedBlob);

      // Replace with backend API endpoint URL
      //axios.post('placeholder-backend-api-endpoint', formData)
        // .then(response => {
        //   // After player sends recording, redirect them to another screen
        //   // to listen to other recording and play game?
        //   // import { useHistory } from 'react-router-dom'
        //   // history.push('/send-to-directory-here')
        //   console.log('Audio submitted successfully', response);
        // })
        // .catch(error => {
        //   console.error('Error submitting audio', error);
        //   alert('An error occurred while submitting audio. Please try again.')
        // });
    }
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

        {(preGameTimer <= 0 && timer > 0) && (
          <div>
            <h3 id="recordingPrompt">Click here to start recording</h3>
          </div>
          
        )}
      
        <div>
          {(recordings.length > 0 && timer > 0) && (
            <div>
              {/* YOU WILL GET AN ERROR MESSAGE BECAUSE THERE IS NOWHERE TO SEND AUDIO YET */}
              <button id="sendRecordingToBackend" onClick={submitRecordings}>Save and Submit</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AudioSharingGame;