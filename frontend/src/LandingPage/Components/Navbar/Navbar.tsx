import React from 'react';
import { Button, Typography } from '@mui/material';
import './Navbar.css';

function Navbar(){
    return (
        <nav className="landing-nav-bar">
                <Typography variant="h4">
                    Teach4Speech
                </Typography>
                <nav className="landing-nav-buttons">
                    <Button> About </Button>
                    <Button> Info </Button>
                    <Button> Contact </Button>
                </nav>
                <Button variant="contained">
                    Instructor
                </Button>
            </nav>    
    )
}

export default Navbar;