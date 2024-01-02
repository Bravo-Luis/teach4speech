import { TextField, Button, Typography } from "@mui/material"
import { useState } from "react";
import './JoinSection.css';

function JoinSection(){

    const [gameCode, setGameCode] = useState('');

    return (
        <section className="landing-join-section">
            <br />
            <TextField 
                label="Enter a Game Code" 
                variant="filled" 
                color="secondary"
                value={gameCode}
                onChange={(e) => {
                    if (e.target.value.length <= 5){
                        setGameCode(e.target.value);
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
            <br />
            <Button 
                variant="contained" 
                color="secondary"
                href="/username-select"
               
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