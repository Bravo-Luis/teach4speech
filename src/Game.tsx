import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Game.css';

function Game({ webSocket } : {webSocket: WebSocket | null}) {
    const [inputText, setInputText] = useState("");

   
    const [gameActive, setGameActive] = useState(false);
    const { gameCode } = useParams(); // Use useParams to get gameCode from URL
    const [theme, setTheme] = useState("");
    const [points, setPoints] = useState(0);

    useEffect(() => {
        if (!webSocket) return;
    
        const handleMessage = (event : any) => {
            const message = JSON.parse(event.data);
           
    
            if (message.message === 'Game started' && message.status === 'active') {
                setTheme(message.theme);
                setGameActive(true);
            }
            if (message.action === 'update') {
                setPoints(message.score);
            }
        };
    
        webSocket.addEventListener('message', handleMessage);
    
        return () => {
            webSocket.removeEventListener('message', handleMessage);
        };
    }, [webSocket]);
    

    const handleSubmit = () => {
        if (!gameActive || !webSocket) {
            return;
        }
        webSocket.send(JSON.stringify({ role: 'student', action: 'answer', sessionId: gameCode, answer: inputText, name: localStorage.getItem('username')}));
        setInputText("");
        // Optional: Add logic to provide feedback and prevent multiple submissions
    };

    if (!gameActive) {
        return (
        <div className='game-1'>
            <h2>Waiting for game to start...</h2>
            <h3>Game code: {gameCode}</h3>
        </div>
        )
    }


    return (
        <div className='game-1'>
            <h2>{theme}</h2>
            <TextField
                id="filled-basic"
                variant="filled"
                type="text"
                placeholder="Enter answers here"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
               
                disabled={!gameActive}
                style={{backgroundColor: 'transparent'}}
                InputProps={{
                    style: {color: 'whitesmoke'}
                }}
                
            />
            SCORE: {points}
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSubmit} 
                disabled={!gameActive}
            >
                Submit
            </Button>
        </div>
    )

}

export default Game;
