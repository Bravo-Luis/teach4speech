import { useState } from 'react';
import { Typography, Box } from '@mui/material'; 



function GameCodeDisplay({ gameCode} : { gameCode: string, isEnglish: boolean}) {
    const [isHovered, setIsHovered] = useState(false);
    const [clicked, setClicked] = useState(false);


    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(gameCode);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    const buttonClicked = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 500);
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Box 
            borderRadius={16} 
            paddingLeft={1} 
            paddingRight={1}
            boxShadow={3}
            border={'3px solid black'}
            sx={{
                background: 'white',
                fontWeight: 'bold',
                margin: 'auto',
                minWidth: '2em',
                transition: 'transform 0.3s ease-in-out',
                ":hover": {
                    cursor: 'pointer',
                    transform: 'scale(1.05)',
                },
            }}
            onClick={()=>{
                copyToClipboard();
                buttonClicked();
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Typography 
                sx={{ 
                    color: "black", 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    transition: 'opacity 0.3s ease-in-out',
                    transitionDelay: isHovered ? '0s' : '0.1s',
                    padding: "5px",
                    userSelect: 'none',
                }}
                variant='h4'
            >
                {clicked ? (<div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                
                }}>
                     <Typography variant='h4' sx={{
                        fontWeight: 'bold',
                        userSelect: 'none',
                     }}> Copied </Typography>

                </div>) : gameCode}
            </Typography>
        </Box>
        </div>
    );
}

export default GameCodeDisplay;