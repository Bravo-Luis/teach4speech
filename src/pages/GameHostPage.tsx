import { useEffect, useState } from "react";
import { SocketConsumer } from "../utils/SocketProvider";
import { Typography, Button, Container, Divider} from "@mui/material";
import { useParams } from "react-router-dom";
import { red, grey } from "@mui/material/colors";

interface Student {
  id: string;
  name: string;
}

function GameHostPage() {
  const gameCode = useParams().gameCode as string;
  const gameName = useParams().gameName as string;
  const socket = SocketConsumer();
  const [players, setPlayers] = useState<Student[]>([]);
  const [playerScores, setPlayerScores] = useState<any[]>([])
  const [isGameStarted, setIsGameStarted] = useState(false);
  let gameNameDisplay = ""


  function handleRestart(){

    if (!socket.isConnected()){
      console.log("Socket not connected... trying to connect.");
      socket.connect();
    }
    socket.emit("restart_game", {game_code: gameCode});
    const newPlayerScores = playerScores.map((player) => {
      player.score = 0;
      return player;
    });
    setPlayerScores(newPlayerScores);
    setIsGameStarted(false);
  }


  if(gameName == "related_words"){
    gameNameDisplay = "Related Words";
  }

  const handleDeletePlayer = (id: string, game_code: string) => {
    console.log("Kicking player with id: ", id);
    setPlayers((currentPlayers) =>
      currentPlayers.filter((player) => player.id !== id)
    );
    socket.emit("player_kick", { id, game_code });
  };

  const startGame = (game_code: String) => {
    socket.emit("start_game", { game_code });
  }
  console.log(socket)

  useEffect(() => {

    if (!socket.isConnected()){
      console.log("Socket not connected... trying to connect.");
      socket.connect();
    }

    console.log("connected to socket");

    socket.off("player_list_for_host");

    socket.on("player_list_for_host", (data: any) => {
      setPlayers(data.player_list);
    })

    socket.on("player_list_scores_for_host", (data: any)=>{
      data.player_list.sort((a : any, b : any) => b.score - a.score);
      setPlayerScores(data.player_list);

    });

    socket.on("game_started", () => {
      setIsGameStarted(true);
    })

  }, [socket]);

  if (isGameStarted) {
    return (
      <Container sx={{
        padding: "2.5%",
      }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            marginBottom: "20px",
            paddingBottom: "10px",
            paddingTop: "5vh",
            flexDirection: "row",
          }}
        >

          <Typography
          color={"black"}
            variant="h3"
  
          >
            {gameNameDisplay}
          </Typography>
  
        </div>
  
        <Typography color={"black"} variant="h4" fontWeight={"bold"} sx={{ marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "10px",width:"100%", textAlign:"center"}}>
          PLAYERS
        </Typography>

        <div
           
            style={{
              marginBottom: "10px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
              paddingLeft: "5px",
              paddingRight: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography color={"black"} variant="h5">Rank</Typography>
            <Typography color={"black"} variant="h5">Name</Typography>
            <Typography color={"black"} variant="h5">Score</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                fontWeight: "bold",
                color: "white"
                
              }}
              disabled
             

            >
              Kick
            </Button>
          </div>
  
        {playerScores.map((player, index) => (
          <div
            key={player.id}
            style={{
              marginBottom: "10px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
              paddingLeft: "5px",
              paddingRight: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography color={"black"} variant="h5">{index + 1}</Typography>
            <Typography color={"black"} variant="h5">{player.name}</Typography>
            <Typography color={"black"} variant="h5">{player.score}</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                fontWeight: "bold",
              }}
              onClick={() => handleDeletePlayer(player.id, gameCode)}
            >
              Kick
            </Button>
          </div>
        ))}
                {isGameStarted && 
        <Button variant="contained" onClick={handleRestart} >
          Restart Game
        </Button>
        }

      </Container>
    )
  } else {
    return (
      <Container sx={{
        padding: "2.5%",
      }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",

            paddingTop: "5vh",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h1"
  
          >
            {gameNameDisplay}
          </Typography>
          
  
        </div>
        <Divider variant='middle' sx={{background:"gray"}}  />

        <Typography variant="h2" textAlign={'center'} padding={1} >
        Join with Code 
        <Typography onClick={()=>{
          
        }} sx={{
          ":hover" : {
            transition: 'scale 1s ease-in',
            cursor: 'pointer'
          }
        }} variant="h1" color={'primary.light'} fontWeight={'bold'}>
          {gameCode}
        </Typography>
        </Typography>
        <Divider variant='middle' sx={{ mb: '1vh', background:"gray"}}  />
        <br />
        <Typography variant="h2" fontWeight={"bold"} >
          Players
        </Typography>
        <br />

        <Container sx={{
          padding: '2.5%',
          gap:'0'
        }}>
        {players.map((player, idx) => (
          <div
            key={player.id}
            style={{
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
              display: "flex",
              justifyContent: "space-between",
              background: idx % 2 == 0 ? grey[800] : grey[900],
              alignItems: "center",
              paddingTop: '10px'

            }}
          >
            <Typography variant="h2">{player.name}</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: red[500],
                ":hover" : {
                  backgroundColor: red[900]
                }
              }}
              onClick={() => handleDeletePlayer(player.id, gameCode)}
            >
Kick
            </Button>
          </div>
        ))}
        
        {players.length === 0 && (
          <Typography variant="body1" >
            No players have joined yet.
          </Typography>
        
        )}
        </Container>

        {players.length > 0 && !isGameStarted && (

          <Button variant="contained" sx={{
            ml:'clamp(5px, 2.5vw, 25px)'
          }} onClick={()=>{startGame(gameCode)}} >
            Start Game
        </Button>

        )}
        
      </Container>
    );
  }
}

export default GameHostPage;
