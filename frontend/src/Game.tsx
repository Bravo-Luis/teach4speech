import { useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
function Game(){

    const [inputText, setInputText] = useState("");
    const [timer, setTimer] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTimer((timer)=>timer+1);
        }, 1000);
        return ()=>clearInterval(interval);
    }, []);

    console.log(timer)

    function handleSubmit(potenialAnswer: string) { 
        // placeholder for api call
        return true // or false
    }

    return (
        <>
        <h1>Game</h1>
        <input type="text" placeholder="Enter your name"  onChange={(event)=>{
            setInputText(event.target.value);
        }} />
        <button onClick={()=>{
            console.log(inputText);
        }}> Submit </button>
        </>
    )
}

export default Game;