import { useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import './Game.css';
function Game(){

    const [inputText, setInputText] = useState("");
    const [timer, setTimer] = useState(65);
    const [preGameTimer, setPreGameTimer] = useState(5);
    const [inputError, setInputError] = useState(false);
    const [gameWord, setGameWord] = useState("");
    const [gameActive, setGameActive] = useState(false);

    const categories = [
        "fun/divertido", 
        "boring/aburrido", 
        "tasty/delicioso", 
        "disgusting/asqueroso", 
        "hot/caliente", 
        "cold/frio", 
        "fruits/frutas", 
        "vegetables/verdudas"
    ];

    const censored = [
        "poop", 
        "***"
    ];

    // Handles 5 second timer before the game
    useEffect(() => {
        const preGameInterval = setInterval(() => {
            setPreGameTimer((prevTimer) => {
                const newTimer = prevTimer - 1;
                if (newTimer <= 0) {
                    clearInterval(preGameInterval);
                    setGameActive(true);
                }
                return newTimer;
            });
        }, 1000);
        return () => clearInterval(preGameInterval);
    }, []);



    // Handles timer countdown from 20 seconds (Game timer)
    useEffect(() => {
        const interval = setInterval(() => {
          setTimer((prevTimer) => {

            const newTimer = prevTimer - 1;
            if (newTimer <= 0) {
              clearInterval(interval);
              return 0;
            } else {
              return newTimer;
            }
          });
        }, 1000);
        return () => clearInterval(interval);
      }, []);



    // Generates a random category word from our array of words
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * categories.length);
        if (timer !== 0){
            setGameWord("Your category is: " + categories[randomIndex]);
        }
    } , []);

    

    // Set's the game word h2 element to "" once timer reaches 0
    useEffect(() => {
        if (timer === 0){
            setGameWord("");
            setGameActive(false);
            setInputError(false);
        }
    } , [timer, gameActive]);



    // Validating the relation between answer and prompt?
    function handleSubmit(potenialAnswer: string) { 
        // placeholder for api call
        if (potenialAnswer /*Replace with API checking its a valid answer*/) {
            return true;
        }
        // Else
        return false;
    }



    // Validating answer entry: making sure it's not empty, contains no numbers, and is not in
    // our censored words list
    const handleButtonClick = () => {
        
        if (gameActive){
            const isValidInput = validateInput(inputText);
            if (isValidInput && !censored.includes(inputText)) {
            handleSubmit(inputText);
            console.log(inputText);
            setInputError(false);
            } 
            else {
                setInputError(true);
                console.log("Invalid input. Try again.")
            }

            setInputText("");
        }
      };



    // Allows use of enter/return key for answer submission
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (gameActive && (event.key === "Enter" || event.key === "Return")) {
            handleButtonClick();
        }
    };



    // Validating answer entry
    const validateInput = (text: string) => {
        return text.trim() !== "" && !/\d/.test(text);
      };



    return (
        <div className='game-1'>
            <h1>{preGameTimer > 0 ? `Countdown: ${preGameTimer}` : timer > 0 ? `Time Remaining: ${timer}` : "Time's up!"}</h1>
            <h2>{gameWord}</h2>
            <TextField
                id="filled-basic"
                variant="filled"
                type="text"
                placeholder="Enter answers here"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                onKeyDown={handleKeyPress}
                error={inputError}
                helperText={inputError ? "Invalid answer." : ""}
                disabled={!gameActive}
                style={{backgroundColor: 'transparent'}}
                InputProps={{
                    style: {color: 'whitesmoke'}
                }}
                
            />
            <button onClick={handleButtonClick}>Submit</button>
        </div>
    )
}

export default Game;