// import { useState, useEffect} from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AudioRecorder } from 'react-audio-voice-recorder';

import './Game2.css'

function Game2(){

    // From react side: recording the voice messages, store them locally, done button to send to back end
    // Buttons: Record, listen to recording again, redo recording, done

    return (
        <div className='game-2'>
            <button id="Record">Record word</button>
            <div className="buttons">
                <button id="Listen">Listen to recording</button>
                <button id="Redo">Redo recording</button>
                <button id="Done">Send recording</button>
            </div>
        </div>
    )
}

export default Game2;