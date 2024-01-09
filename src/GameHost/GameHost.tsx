import React from 'react';
import { useParams } from 'react-router-dom';
import './GameHost.css';

function GameHost() {
    const { gameCode } = useParams(); 

    return (
        <div className='game-host'>
            <h1>Game Host</h1>
            <p>
                This is the code to join a session
            </p>
            <h2>{gameCode}</h2>
            <p>
                And here is where the students who joined names would be displayed, and where after the game the leaderboards or stats would be
            </p>
        </div>
    );
}

export default GameHost;
