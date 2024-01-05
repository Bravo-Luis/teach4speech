import { useState, useEffect} from 'react';
import './Game2.css'

function Game2(){

    // From react side: recording the voice messages, store them locally, done button to send to back end
    // Buttons: Record, listen to recording again, redo recording, done

    return (
        <div className='game-2'>
            <div className="buttons">
                <button id="Record">Record word</button>
                <button id="Listen">Listen to recording</button>
                <button id="Redo">Redo recording</button>
                <button id="Done">Send recording</button>
            </div>
        </div>
    )
}

export default Game2;