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
        mostCommonAnswers: [],
        allAnswers: [],
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

    // // Doughnut chart data for accuracy
    // const accuracyData = {
    //     labels: ['Correct Answers', 'Incorrect Answers'],
    //     datasets: [{
    //         data: [gameStats.correctAnswers, gameStats.totalAnswers - gameStats.correctAnswers],
    //         backgroundColor: ['#36A2EB', '#FF6384'],
    //         hoverBackgroundColor: ['#36A2EB', '#FF6384']
    //     }]
    // };

    // interface Word {
    //     text: string;
    //     value: number;
    // }

    // function endSession() {
    //     if (webSocket){
    //         const message = JSON.stringify({
    //             role: 'instructor',
    //             action: 'end',
    //             sessionId: gameCode,
    //           });
            
    //           webSocket.send(message); 
    //     }
    //   }
    
    // const wordCloudData: Word[] = gameStats.allAnswers && Array.isArray(gameStats.allAnswers) 
    //     ? gameStats.allAnswers.reduce<Word[]>((acc, answer) => {
    //         const word = acc.find(item => item.text === answer);
    //         if (word) {
    //             word.value += 1;
    //         } else {
    //             acc.push({ text: answer, value: 1 });
    //         }
    //         return acc;
    //     }, [])
    //     : [];
    
    return (
        <div className='game-host'>
            
             <br />
            <Typography variant="h3"
            sx={{
                color:"white",
                fontWeight:"bold"
            }}
            > 
            {gameCode}
            </Typography>
            {!gameActive && (<div className='student-grid'>
                {students.map((student, index) => (
                    <div key={index} className='student-bubble'>
                        <Typography variant="h6">{student}</Typography>
                    </div>
                ))}
            </div>)}
            <br />

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
                    height={100}
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
                        <Typography variant="h6"
                        sx={{
                            color:"white",
                            fontWeight:"bold",
                            fontSize:"clamp(2rem, 2.5vw, 4rem)",
                        }}  
                        >
                            {gameStats.allAnswers.length} words
                        </Typography>
                        
                      
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
                        <Typography variant="h6"
                        sx={{
                            color:"white",
                            fontWeight:"bold",
                            fontSize:"clamp(2rem, 2.5vw, 4rem)",
                        }}  
                        >
                           {accuracyPercentage.toFixed(1)} %
                        </Typography> 
                    </Box>
                    </div>

                    {/* <Typography variant="h6"> Accuracy: {accuracyPercentage.toFixed(2)}%</Typography>
                
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Most Common Words:</Typography>

                  
                        {gameStats.mostCommonAnswers.map((answer, index) => (
                            <li key={index}>{answer}</li>
                        ))}
                    */}



                </div>
            )}
        </div>
    );
}

export default GameHost;