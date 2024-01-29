import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

import './GameHost.css';

  
function GameHost({ webSocket} : {webSocket: WebSocket | null}) {
    const { gameCode } = useParams();
    const [students, setStudents] = useState<string[]>([]);
    const [gameActive, setGameActive] = useState(false);
    const [gameStats, setGameStats] = useState({
        totalAnswers: 0,
        correctAnswers: 0,
        mostCommonAnswers: []
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
    const accuracyPercentage = gameStats.totalAnswers > 0 ? (gameStats.correctAnswers / gameStats.totalAnswers) * 100 : 0;


    return (
        <div className='game-host'>
            
             <br />
            <GameCodeDisplay gameCode={String(gameCode)} isEnglish={true}/>
            <br />
            <br />
            <br />

            {!gameActive && (<div className='student-grid'>
                            {students.map((student, _) => (
                                <Typography variant='h6' sx={{color:"white",
                                fontWeight:"bold",
                                fontSize:"clamp(2rem, 2.25vw, 4rem)",}}>
                         {student}
                        </Typography>
                            ))}
                        </div>)}

            {!gameActive ? (

                

                <Button 
                    variant='contained' 
                    color='secondary'
                    onClick={startGame}
                    disabled={students.length === 0}
            
                    sx={{
                        width:"clamp(300px, 30%, 400px)",
                        borderRadius:"16px",
                        fontWeight:"bold",
                        position:"absolute",
                        bottom:"10vh",
                        border:"1px solid " + (students.length === 0 ? "none" : "black"),
                        boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
                        textShadow:"0px 0px 2px rgba(0, 0, 0, 1)",
                        display:(students.length === 0 ? "none" : "flex"),
                    }}
                >
                    Start Game
                </Button>
            ) : (
                <div className="game-stats">
                    <div className='vertical-container'>
                    <Box 
                    border={'1px solid black'}
                    width={300}
                    height={200}
                    borderRadius={16}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    boxShadow={5}
                    sx={{
                        backgroundColor:"rgb(168, 16, 168)",
                    }}
                    >
                        <Typography variant='h6' sx={{color:"white",
                            fontWeight:"bold",
                            fontSize:"clamp(1rem, 1.25vw, 2rem)",}}>
                                          Most Common
                                        </Typography>
                        
                        {
                                gameStats.mostCommonAnswers.map((answer, index) => {
                                    return (
                                    <>
                                        <Typography variant='h6' sx={{color:"white",
                            fontWeight:"bold",
                            fontSize:"clamp(2rem, 2.25vw, 4rem)",}}>
                                           {index + 1}. {answer}
                                        </Typography>
                                    </>
                                    )
                                })
                            }
                      
                    </Box>

                    <Box 
                    border={'1px solid black'}
                    width={300}
                    height={100}
                    borderRadius={16}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    boxShadow={10}
                    sx={{
                        backgroundColor:"rgb(168, 16, 168)",
                    }}
                    >
                        <Typography variant='h6' sx={{color:"white",
                            fontWeight:"bold",
                            fontSize:"clamp(1rem, 1.25vw, 2rem)",}}>
                                          Accuracy
                                        </Typography>
                        
                        <Typography variant="h6"
                        sx={{
                            color:"white",
                            fontWeight:"bold",
                            fontSize:"clamp(2rem, 2.25vw, 4rem)",
                        }}  
                        >
                           {accuracyPercentage.toFixed(1)}%
                        </Typography> 
                    </Box>
                    </div>



                </div>
            )}
        </div>
    );
}


function GameCodeDisplay({ gameCode, isEnglish} : { gameCode: string, isEnglish: boolean}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(gameCode);
            alert('Copied to clipboard'); // Consider replacing with a more elegant notification
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <Box 
            borderRadius={16} 
            paddingLeft={1} 
            paddingRight={1}
            boxShadow={3}
            border={'3px solid black'}
            sx={{
                background: 'white',
                position: 'absolute',
                fontWeight: 'bold',
                margin: 'auto',
                top: 'clamp(10px, 2.5%, 25px)',
                left: 'clamp(10px, 2.5%, 25px)',
                width: '8em',
                transition: 'transform 0.3s ease-in-out',
                ":hover": {
                    cursor: 'pointer',
                    transform: 'scale(1.05)',
                }
            }}
            onClick={copyToClipboard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Typography 
                sx={{ 
                    color: "black", 
                    fontWeight: 'bold', 
                    fontSize: '2em',
                    textAlign: 'center',
                    transition: 'opacity 0.3s ease-in-out',
                    transitionDelay: isHovered ? '0s' : '0.1s',
                    opacity: isHovered ? 0 : 1
                }}
            >
                {gameCode}
            </Typography>
            <Typography 
                sx={{ 
                    color: "black", 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    position: 'absolute',
                    fontSize: '2em',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.3s ease-in-out',
                    transitionDelay: isHovered ? '0.1s' : '0s', // Delay when showing "Copy"
                    opacity: isHovered ? 1 : 0,
                    userSelect: 'none'

                    
                }}
            >
                {isEnglish ? 'Copy' : 'Copiar'}
            </Typography>
        </Box>
    );
}

export default GameHost;