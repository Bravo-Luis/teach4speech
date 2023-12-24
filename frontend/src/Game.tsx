import { useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
function Game(){

    const [inputText, setInputText] = useState("");
    const [timer, setTimer] = useState(20);
    const [inputError, setInputError] = useState(false);
    const [gameWord, setGameWord] = useState("");

    const categories = ["fun", "boring", "tasty", "disgusting", "hot", "cold"];

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

    console.log(timer)

    // Generates a random category word from our array of words
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * categories.length);
        if (timer !== 0){
            setGameWord("Your category is: " + categories[randomIndex]);
        }
    } , []);

    // Set's the game word h1 element to "Time's Up!" once timer reaches 0
    useEffect(() => {
        if (timer === 0){
            setGameWord("Time's Up!");
        }
    } , [timer]);

    // Validating the relation between answer and prompt?
    function handleSubmit(potenialAnswer: string) { 
        // placeholder for api call
        if (potenialAnswer /*Replace with API checking its a valid answer*/) {
            return true;
        }
        // Else
        return false;
    }

    // Validating answer entry: making sure it's not empty and contains no numbers
    const handleButtonClick = () => {
        const isValidInput = validateInput(inputText);
      
        if (isValidInput) {
          handleSubmit(inputText);
          console.log(inputText);
          setInputError(false);
        } 
        else {
            // TODO: Invalid input, display on TextField
            setInputError(true);
            console.log("Invalid input. Try again.")
        }

        setInputText("");
      };

      // Allows use of enter/return key for answer submission
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === "Return") {
            handleButtonClick();
        }
    };

    // Validating answer entry
    const validateInput = (text: string) => {
        return text.trim() !== "" && !/\d/.test(text);
      };

    return (
        <>
            <h1>{gameWord}</h1>
            <TextField
                id="filled-basic"
                variant="filled"
                type="text"
                placeholder="Enter your name"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                onKeyDown={handleKeyPress}
                error={inputError}
                helperText={inputError ? "Invalid input. Try again." : ""}
                style={{backgroundColor: 'transparent'}}
                InputProps={{
                    style: {color: 'whitesmoke'}
                }}
                
            />
            <button onClick={handleButtonClick}>Submit</button>
        </>
    )
}

export default Game;