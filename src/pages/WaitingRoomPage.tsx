import { useEffect, useState } from "react";
import { SocketConsumer } from "../utils/SocketProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, Typography, Chip } from "@mui/material";
import TranslationButton from "../components/TranslationButton";
import theme from "../styles/Theme";
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
        <Box sx={{
            backgroundColor: `${theme.palette.primary.medium}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "2.5%",
            paddingTop: "5vh",
            width: "95%",
            height: "100vh",
        }}>

                <Typography variant="h3" margin={"1px"} fontWeight={"bold"} color={"white"}  sx={{
                    textShadow: "2px 2px 4px #000000",
                    paddingLeft: "24px",
                }}>
                {gameNameDisplay}
                </Typography>

            <Grid container spacing={2} sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                color: 'black',
            }}>
                <Box sx={{
                border: "1px solid black",
                marginTop: "5vh",
                width: "clamp(200px, 90%, 1600px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                borderRadius: "16px",
                backgroundColor: `${theme.palette.primary.main}`
                }} >
                <Typography variant="h4" color={"white"} fontWeight={"bold"} sx={{
                        paddingTop: "16px",
                        paddingLeft: "24px",
                        textShadow: "2px 2px 4px #000000",
           
                    }}>
                        {isEnglish ? "Instructions" : "Instrucciones"}
                    </Typography>
                    <Typography variant="h5" color={"white"} fontWeight={"bold"}  sx={{
                        padding: "10px",
                        paddingLeft: "24px",
                        paddingRight: "24px",
                        paddingBottom: "24px",
                        textShadow: "2px 2px 2px #000000",

                    }}>
                       { gameInstructions }
                    </Typography>
                </Box>
                <Grid item 
                sx={{
                    marginTop: "2.5vh",
                    width: "clamp(200px, 90%, 1600px)",
                    borderRadius: "16px",
                    border: "1px solid black",
                    backgroundColor:`${theme.palette.primary.main}`,
                    paddingBottom: "10px",
                }}
                >
                    <Typography variant="h4" color={"white"} fontWeight={"bold"} sx={{
                        textShadow: "2px 2px 4px #000000",
                        paddingBottom: "16px",
                        paddingLeft: "10px",
                        paddingTop: "5px",

                    }}>
                        {isEnglish ? "Players" : "Jugadores"}
                    </Typography>
                    {playerList.map((player, index) => {
                        return (<Chip key={index} label={player.name} sx={{
                            background : `${theme.palette.primary.light}`,
                            fontWeight: "bold",
                            fontSize: "1.5em",
                            padding: "5px",
                            borderRadius: "16px",
                            border : "2px solid black",
                        }} style={{margin: "5px"}}/>)
                    })}
                </Grid>
            </Grid>
        </Box>
    )
}

export default WaitingRoomPage;