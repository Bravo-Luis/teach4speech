import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography, Box } from '@mui/material';
import './Game.css';
import { CSSTransition } from 'react-transition-group';

function Game({ webSocket } : {webSocket: WebSocket | null}) {
    const [inputText, setInputText] = useState("");

   
    const [gameActive, setGameActive] = useState(false);
    const { gameCode } = useParams(); 
    const [theme, setTheme] = useState("");
    const [points, setPoints] = useState(0);
    const [currentTipIndex, setCurrentTipIndex] = useState(0);
    const [showTip, setShowTip] = useState(true);


    useEffect(() => {
        if (!webSocket) return;
    
        const handleMessage = (event : any) => {
            const message = JSON.parse(event.data);
           
            if (message.message === 'Game started' && message.status === 'active') {
                setTheme(message.theme);
                setGameActive(true);
            }
            if (message.action === 'update') {
                setPoints(message.score);
            }
        };
    
        webSocket.addEventListener('message', handleMessage);

        const tipInterval = setInterval(() => {
            setShowTip(false);
        }, 8000);
    
        return () => {
            webSocket.removeEventListener('message', handleMessage);
            clearInterval(tipInterval);
        };
    }, [webSocket]);
    
    useEffect(() => {
        if (!showTip) {
            
            const timeoutId = setTimeout(() => {
                setCurrentTipIndex(prevIndex => (prevIndex + 1) % loadingScreenTips.length);
                setShowTip(true); 
            }, 300); 
            return () => clearTimeout(timeoutId);
        }
    }, [showTip]);


    const handleSubmit = () => {
        if (!gameActive || !webSocket) {
            return;
        }
        webSocket.send(JSON.stringify({ role: 'student', action: 'answer', sessionId: gameCode, answer: inputText, name: localStorage.getItem('username')}));
        setInputText("");
    };

    const loadingScreenTips = [
        "Tip: Practice makes perfect. The more you speak, the more confident you'll become!",
        "Did you know? The ability to understand and use language effectively is known as linguistic intelligence.",
        "Fun Fact: The most commonly spoken language in the world is Mandarin Chinese.",
        "Advice: Listening is as important as speaking. Good listeners are often great communicators.",
        "Language Tip: Reading out loud can significantly improve your pronunciation and fluency.",
        "Did you know? 'Eunoia' is the shortest English word containing all five main vowels. It means 'beautiful thinking.'",
        "Public Speaking Tip: Before a speech, take deep breaths to calm your nerves.",
        "Fun Fact: There are over 7,000 languages spoken in the world today.",
        "Reminder: Body language is a key part of communication. Your posture and gestures say a lot!",
        "Did you know? Shakespeare invented many words, such as 'birthplace' and 'eyeball'.",
        "Language Learning Tip: Immersion is one of the most effective ways to learn a new language.",
        "Interesting Fact: The word 'alphabet' comes from the first two letters of the Greek alphabet: alpha and beta.",
        "Advice: Keeping a vocabulary journal can help you learn new words and expressions.",
        "Fun Fact: A pangram is a sentence that contains every letter of the alphabet, like 'The quick brown fox jumps over a lazy dog.'",
        "Public Speaking Tip: Use stories and anecdotes in your speeches to make them more engaging.",
        "Did you know? The longest word in the English language is 'pneumonoultramicroscopicsilicovolcanoconiosis'.",
        "Language Learning Tip: Watching movies in a foreign language can improve your listening skills and vocabulary.",
        "Reminder: Communication isn't just about words; it's about understanding and being understood."
    ];
    

    if (!gameActive) {
        return (
        <div className='game-1'>
            <Box 
            borderRadius={16} 
            paddingLeft={1} 
            paddingRight={1} 
            boxShadow={3}
            sx={{
                background:'white',
                position: 'absolute',
                top: 'clamp(10px, 2.5%, 25px)',
                left: 'clamp(10px, 2.5%, 25px)',
            }}>
                <Typography sx={{color:"black"}}>
                    {gameCode}
                </Typography>
            </Box>
            <Typography 
            variant="h2" 
            component="h2" 
            fontWeight={'bold'} 
            gutterBottom 
            sx={{
                fontSize: 'clamp(1.5rem, 5vw, 4rem)',
            }}>
            Waiting for host to start game
            </Typography>
             <CSSTransition
                    in={showTip}
                    timeout={300}
                    classNames="tip-fade"
                    unmountOnExit
                >
                    <Typography 
                    variant="h6" 
                    fontWeight={'light'} 
                    component="p" 
                    width={'clamp(200px, 90%, 1500px)'}
                    textAlign={'center'}
                    position={'relative'}
                    height={'100px'}
                    sx={{
                
                        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
                    }}>
                        {loadingScreenTips[currentTipIndex]}
                    </Typography>
                </CSSTransition>
        </div>
        )
    }


    return (
        <div className='game-1'>
            <h2>{theme}</h2>
            <TextField
                id="filled-basic"
                variant="filled"
                type="text"
                placeholder="Enter answers here"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
               
                disabled={!gameActive}
                style={{backgroundColor: 'transparent'}}
                InputProps={{
                    style: {color: 'whitesmoke'}
                }}
                
            />
            SCORE: {points}
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleSubmit} 
                disabled={!gameActive}
            >
                Submit
            </Button>
        </div>
    )

}

export default Game;
