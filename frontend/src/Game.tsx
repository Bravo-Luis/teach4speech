import { useState } from 'react';
function Game(){


    const [inputText, setInputText] = useState("");

    return (
        <>
        <h1>Game</h1>
        <input type="text" placeholder="Enter your name"  onChange={(event)=>{
            setInputText(event.target.value);
        }} />
        <button onClick={()=>{
            console.log(inputText);
        }}>Submit</button>
        </>
    )
}

export default Game;