import { useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
function Game(){

    const [inputText, setInputText] = useState("");
    const [timer, setTimer] = useState(20);

    useEffect(() => {
        const interval = setInterval(() => {
          setTimer((prevTimer) => {

            const newTimer = prevTimer - 1;
            if (newTimer <= 0) {
              clearInterval(interval); // Stop the timer when it reaches 0
              return 0; // Set timer to 0
            } else {
              return newTimer;
            }
          });
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    console.log(timer)

    function handleSubmit(potenialAnswer: string) { 
        // placeholder for api call
        if (potenialAnswer /*Replace with API checking its a valid answer*/) {
            return true;
        }
        // Else
        return false;
    }

    const handleButtonClick = () => {
        handleSubmit(inputText);
        console.log(inputText);
        setInputText("");
    };

    return (
        <>
            <h1>Game</h1>
            {/* <input type="text" placeholder="Enter your name"  onChange={(event)=>{
                setInputText(event.target.value);
            }} />
            <button onClick={()=>{
                handleSubmit(inputText);
                console.log(inputText);
            }}> Submit </button> */}
            <TextField
                type="text"
                placeholder="Enter your name"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
            />
            <button onClick={handleButtonClick}>Submit</button>
        </>
    )
}

export default Game;