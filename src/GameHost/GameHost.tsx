import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import './GameHost.css';

function GameHost({ webSocket} : {webSocket: WebSocket | null}) {
    const { gameCode } = useParams();
    const [students, setStudents] = useState<string[]>([]);
    const [gameActive, setGameActive] = useState(false);
    const [gameStats, setGameStats] = useState({
        totalAnswers: 0,
        correctAnswers: 0
    });

    useEffect(() => {
        if (!webSocket) return;
    
        const handleMessage = (message: any) => {
            const data = JSON.parse(message.data);
            console.log(data);
    
            if (data?.action === 'update'){
                setGameStats(data.stats ?? {});
                console.log(data.stats);
            }
    
            if (data.message?.startsWith('Student joined:')) {
                const studentName = data.message.split(':')[1].trim();
                setStudents(prev  => [...prev , studentName] );
            } else if (data.message?.startsWith('Student disconnected:')) {
                const studentName = data.message.split(':')[1].trim();
                setStudents(prev => prev.filter(name => name !== studentName));
            }
    
            // Handle other types of messages as needed
        };
    
        webSocket.addEventListener('message', handleMessage);
    
        return () => {
            webSocket.removeEventListener('message', handleMessage);
        };
    }, [webSocket]);
    

    const startGame = () => {
        if (webSocket) {
            webSocket.send(JSON.stringify({
                role: 'instructor',
                action: 'start',
                sessionId: gameCode
            }));
            setGameActive(true);
        }
    };

    return (
        <div className='game-host'>
            <h1>Game Code: {gameCode}</h1>
            <div className='student-grid'>
                {students.map((student, index) => (
                    <div key={index} className='student-bubble'>
                        <h2>{student}</h2>
                    </div>
                ))}
            </div>
            <br />

            {!gameActive ? (
                <Button 
                    variant='contained' 
                    color='success'
                    onClick={startGame}
                    disabled={students.length === 0}
                >
                    Start Game
                </Button>
            ) : (
                <div>
                    <h2>Game Stats</h2>
                    <p>Answer Accuracy: {gameStats.correctAnswers / gameStats.totalAnswers}</p>
                    <p>Total Answers: {gameStats.totalAnswers }</p>
                    <p>Correct Answers: {gameStats.correctAnswers }</p>
                    {/* Render additional stats as needed */}
                </div>
            )}
        </div>
    );
}

export default GameHost;
