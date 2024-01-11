import { TextField, Button } from "@mui/material"
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import './JoinSection.css';

function JoinSection({ webSocket }: { webSocket: WebSocket | null }) {
    const [gameCode, setGameCode] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleJoinGame = () => {
        if (webSocket && webSocket.readyState === WebSocket.OPEN) {
            // Send a message to the server to join a session
            webSocket.send(JSON.stringify({
                role: 'student',
                action: 'join',
                sessionId: gameCode,
                name: username
            }));
            localStorage.setItem('username', username);
            localStorage.setItem('sessionId', gameCode);
        }
    };

    useEffect(() => {
        if (!webSocket) return;
    
        const handleMessage = (message : any) => {
            try {
                const data = JSON.parse(message.data);
                if (data.message === 'Successfully joined session') {
                    // Navigate to the game page upon successful join
                    navigate(`/game/${gameCode}`); // Replace with your game page route
                }
            } catch (e) {
                console.error('Error parsing message:', message.data);
            }
        };
    
        webSocket.addEventListener('message', handleMessage);
    
        return () => {
            webSocket.removeEventListener('message', handleMessage);
        };
    }, [webSocket, navigate, gameCode]);
    

    return (
        <section className="landing-join-section">
            <br />
            <TextField 
                label="Enter a Game Code" 
                variant="filled" 
                color="secondary"
                value={gameCode}
                onChange={(e) => {
                    if (e.target.value.length <= 6){
                        setGameCode(e.target.value.toUpperCase());
                    }
                }}
                sx={{ 
                    input: { 
                        color: 'black',
                        fontSize: 'clamp(2rem, 4vw, 4rem)',
                        textAlign: 'center',
                    },
                    width: 'clamp(250px, 40vw, 500px)'

                }}
                InputLabelProps={{
                    style: { 
                        color: 'black'
                    }, 
                 }}
            />
            <TextField
                label="Enter a Username"
                variant="filled"
                color="secondary"
                value={username}
                onChange={(e) => {
                    if (e.target.value.length <= 20){
                        setUsername(e.target.value);
                    }
                }}
                sx={{ 
                    input: { 
                        color: 'black',
                        fontSize: 'clamp(2rem, 4vw, 4rem)',
                        textAlign: 'center',
                    },
                    width: 'clamp(250px, 40vw, 500px)'
                }}
                InputLabelProps={{
                    style: { 
                        color: 'black'
                    }, 
                 }}/>
            <br />

            <Button 
                variant="contained" 
                color="secondary"
                onClick={handleJoinGame} // Use onClick instead of href
                sx={{ 
                    width: 'clamp(300px, 50vw, 600px)'
                }}
            >
                Join Game
            </Button>
        </section>
    )
}

export default JoinSection;
