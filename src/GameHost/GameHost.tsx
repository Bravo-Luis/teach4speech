import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import  WordCloud  from 'react-d3-cloud';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import './GameHost.css';

ChartJS.register(ArcElement, Tooltip, Legend);
  
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
    
            // Handle other types of messages as needed
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

    // Doughnut chart data for accuracy
    const accuracyData = {
        labels: ['Correct Answers', 'Incorrect Answers'],
        datasets: [{
            data: [gameStats.correctAnswers, gameStats.totalAnswers - gameStats.correctAnswers],
            backgroundColor: ['#36A2EB', '#FF6384'],
            hoverBackgroundColor: ['#36A2EB', '#FF6384']
        }]
    };

    interface Word {
        text: string;
        value: number;
    }
    
    const wordCloudData: Word[] = gameStats.allAnswers && Array.isArray(gameStats.allAnswers) 
        ? gameStats.allAnswers.reduce<Word[]>((acc, answer) => {
            const word = acc.find(item => item.text === answer);
            if (word) {
                word.value += 1;
            } else {
                acc.push({ text: answer, value: 1 });
            }
            return acc;
        }, [])
        : [];
        
   

    
    return (
        <div className='game-host'>
            <Typography variant="h4" className="game-code">Game Code: {gameCode}</Typography>
            <div className='student-grid'>
                {students.map((student, index) => (
                    <div key={index} className='student-bubble'>
                        <Typography variant="h6">{student}</Typography>
                    </div>
                ))}
            </div>
            <br />

            {!gameActive ? (
                <Button 
                    variant='contained' 
                    color='secondary'
                    onClick={startGame}
                    disabled={students.length === 0}
                >
                    Start Game
                </Button>
            ) : (
                <div className="game-stats">
                    <Typography variant="h5">Game Stats</Typography>
                    <Typography variant="h6">Accuracy: {accuracyPercentage.toFixed(2)}%</Typography>
                    <Doughnut data={accuracyData} />

                    <Typography variant="h6" style={{ marginTop: '20px' }}>Most Common Words:</Typography>
                    <ul>
                        {gameStats.mostCommonAnswers.map((answer, index) => (
                            <li key={index}>{answer}</li>
                        ))}
                    </ul>

                    {wordCloudData.length > 0 && (
    <WordCloud 
        data={wordCloudData}
    />
)}

                </div>
            )}
        </div>
    );
}

export default GameHost;