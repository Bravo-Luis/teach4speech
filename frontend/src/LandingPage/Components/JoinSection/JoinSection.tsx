import { TextField, Button } from "@mui/material"

import './JoinSection.css';

function JoinSection(){
    return (
        <section className="landing-join-section">
            
            <br />
            <TextField 
                label="Game Code" 
                variant="filled" 
                color="secondary"
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