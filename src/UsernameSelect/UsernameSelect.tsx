import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import './UsernameSelect.css';

function UsernameSelect() {
    const [username, setUsername] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div className='username-select'>
            <Typography variant="h4" gutterBottom>
                Username Selection
            </Typography>
            <br />
            <TextField
                label="Enter your username"
                variant="filled" 
                color="secondary"
                value={username}
                onChange={(e) => {
                    if (e.target.value.length <= 5){
                        setUsername(e.target.value);
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
            variant='contained' 
            color='secondary'
            href='/game/:26722'
            >
                Submit Username
            </Button>
        </div>
    );
}

export default UsernameSelect;
