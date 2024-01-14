import { useState } from 'react';
import './Game2.css';
import { AudioRecorder } from 'react-audio-voice-recorder';

function Game2() {
  const [recordings, setRecordings] = useState<Blob[]>([]);

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
    // Storing the blob in the recordings array
    if (recordings.length > 0) {
      console.log("Newly recorded audio blob:", recordings[recordings.length - 1]);
    }
  };

  const playRecording = () => {
    if (recordings.length > 0) {
      const combinedBlob = new Blob(recordings, { type: 'audio/webm' });
      const url = URL.createObjectURL(combinedBlob);
      const audio = new Audio(url);
      audio.play();
    }
  };

  return (
    <div className="game-2">
      <div id="recordButton">
        <AudioRecorder onRecordingComplete={addAudioElement} showVisualizer />
      </div>

      <div>
        {recordings.length > 0 && (
          <div>
            <button onClick={saveRecordingLocally}>Save Recording Locally</button>
            <button onClick={playRecording}>Play Combined Recording</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game2;
