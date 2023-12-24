import { TextField, Button } from "@mui/material"

import './JoinSection.css';

function JoinSection(){
    return (
        <section className="landing-join-section">
            <TextField 
                label="Nickname" 
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
                    width: 'clamp(200px, 50vw, 500px)'
                }}
            >
                Join Game
            </Button>
        </section>
    )
}

export default JoinSection;