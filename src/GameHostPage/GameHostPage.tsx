import { useEffect, useState } from "react";
import { SocketConsumer } from "../SocketProvider";
import { Typography, Button, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import GameCodeDisplay from "../Components/GameCodeDisplay";

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

  useEffect(() => {

    socket.off("player_list_for_host");

    socket.on("player_list_for_host", (data: any) => {
      console.log(data);
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
            variant="h3"
  
          >
            {gameNameDisplay}
          </Typography>
          <GameCodeDisplay gameCode={gameCode} isEnglish={true}/>
  
        </div>
  
        <Typography variant="h4" fontWeight={"bold"} sx={{ marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "10px",width:"100%", textAlign:"center"}}>
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
            <Typography variant="h5">Rank</Typography>
            <Typography variant="h5">Name</Typography>
            <Typography variant="h5">Score</Typography>
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
            <Typography variant="h5">{index + 1}</Typography>
            <Typography variant="h5">{player.name}</Typography>
            <Typography variant="h5">{player.score}</Typography>
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
            borderBottom: "1px solid #ccc",
            marginBottom: "20px",
            paddingBottom: "10px",
            paddingTop: "5vh",
            flexDirection: "row",
          }}
        >
          <Typography
            variant="h3"
  
          >
            {gameNameDisplay}
          </Typography>
          <GameCodeDisplay gameCode={gameCode} isEnglish={true}/>
  
        </div>
  
        <Typography variant="h4" fontWeight={"bold"} sx={{ marginBottom: "10px", borderBottom: "1px solid #ccc", paddingBottom: "10px",width:"100%", textAlign:"center"}}>
          PLAYERS
        </Typography>
  
        {players.map((player) => (
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
            <Typography variant="h4">{player.name}</Typography>
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
        {players.length > 0 && !isGameStarted && (
        <Button variant="contained" onClick={()=>{startGame(gameCode)}}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Start Game
          </Typography>
        </Button>
        )}
        {players.length === 0 && (
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Waiting for players to join...
          </Typography>
        
        )}
      </Container>
    );
  }
}

export default GameHostPage;
