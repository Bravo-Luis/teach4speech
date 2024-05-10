import { useEffect, useState } from "react";
import { SocketConsumer } from "../utils/SocketProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Grid, Typography, Chip } from "@mui/material";
import TranslationButton from "../components/TranslationButton";
function WaitingRoomPage(){

    const socket = SocketConsumer();
    const navigate = useNavigate()
    const gameName = useParams().gameName as string;
    const gameCode = useParams().gameCode as string;
    const [playerList, setPlayerList] = useState<Array<any>>([]);
    const [isEnglish, setIsEnglish] = useState(localStorage.getItem('language') === "en" ? true : false);
    let gameNameDisplay = ""
    let gameInstructions = ""
    
    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        setIsEnglish(storedLanguage === "en");
    }, []); 

    useEffect(() => {
        const languageCode = isEnglish ? "en" : "es";
        localStorage.setItem('language', languageCode);
    }, [isEnglish]); 

    if(gameName == "related_words"){
        if (isEnglish){
            gameNameDisplay = "Related Words";
            gameInstructions = "Once the game starts you'll be given a prompt. You'll have 60 seconds to input as many words as possible that relate to the prompt. The more words you input, the more points you get. Good luck!";

        } else {
            gameNameDisplay = "Palabras Relacionadas";
            gameInstructions = "Cuando empiece el juego, te vamos a dar una tema. Tienes 60 segundos para escribir todas las palabras que se te ocurran relacionadas con la tema. Mientras más palabras pongas, más puntos ganas. ¡Mucha suerte!";
        }
    }

    useEffect(() => {
        if (!socket.isConnected()){
            console.log("Socket not connected... trying to connect.");
            socket.connect();
        }

        socket.off('kicked');
        socket.off('player_list');

        socket.emit('fetch_player_list', {game_code: gameCode})

        socket.on('kicked', (message: string) => {
            alert(message);
            socket.disconnect();
            navigate('/join');
        })

        socket.on('player_list', (data: any) => {
            console.log(data);
            setPlayerList(data.player_list);
        })

        socket.on('game_started', (data: any) => {
            navigate(`/game/${data.game_name}/${gameCode}/${data.theme}`);
        })

    }, [socket]);


    return (
        <Container sx={{
            padding: "2.5%",
        }}>
           <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ccc",
                marginBottom: "20px",
                paddingBottom: "10px",
                paddingTop: "5vh",
                flexDirection: "row",
                color: 'black',

           }}>
                <Typography variant="h3" margin={"1px"} sx={{
                }}>
                
                {gameNameDisplay}
                
                </Typography>
            <TranslationButton isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
           </div>
            <Grid container spacing={2} sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                color: 'black',
            }}>
                <Grid item xs={12} >
                    <Typography variant="h4" sx={{
                        padding: "10px",
                    }}>
                        {isEnglish ? "Instructions" : "Instrucciones"}
                    </Typography>
                    <Typography variant="h5" sx={{
                        padding: "10px",
                    }}>
                       { gameInstructions }
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    <Typography variant="h4" sx={{
                        padding: "10px",

                    }}>
                        {isEnglish ? "Players" : "Jugadores"}
                    </Typography>
                    {playerList.map((player, index) => {
                        return (<Chip key={index} label={player.name} sx={{
                            background : "white",
                            fontWeight: "bold",
                            fontSize: "1.5em",
                            padding: "5px",
                        }} style={{margin: "5px"}}/>)
                    })}
                </Grid>
            </Grid>
        </Container>
    )
}

export default WaitingRoomPage;