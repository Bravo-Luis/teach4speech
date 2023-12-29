import { TextField, Button, Typography } from "@mui/material"
import { useState } from "react";
import './JoinSection.css';

function JoinSection(){

    const [gameCode, setGameCode] = useState('');

    return (
        <section className="landing-join-section">
            <Typography variant="h5" style={{fontWeight: "bold"}}  >
                Enter your game code
            </Typography>
            <br />
            <TextField 
                label="Game Code" 
                variant="filled" 
                color="secondary"
                value={gameCode}
                onChange={(e) => {
                    if (e.target.value.length <= 5){
                        setGameCode(e.target.value);
                    }
                }}
                sx={{ 
                    input: { color: 'white' },
                    width: 'clamp(300px, 50vw, 600px)'
                }}
                InputLabelProps={{
                    style: { 
                        color: 'white'
                    }, 
                 }}
            />
            <br />
            <Button 
                variant="contained" 
                color="secondary"
                disabled={gameCode.length !== 5}
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