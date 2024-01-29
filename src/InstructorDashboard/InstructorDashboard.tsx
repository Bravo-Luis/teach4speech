import { useEffect, useState } from 'react';
import './InstructorDashboard.css';
import { Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import wcloud from "../assets/wcloud.png";

function InstructorDashboard({ webSocket } : {webSocket: WebSocket | null}) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const gameDictList = [
    {"title": "Related Words", "description": "In this game players are given a key word and they must provide as many related words as possible.", "img": "../assets/wcloud.png"},
  ];

  const handleGameClick = () => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      setIsLoading(true); // Set loading to true when the game is clicked
      webSocket.send(JSON.stringify({ role: 'instructor', action: 'create' }));
    }
  };

  useEffect(() => {
    if (!webSocket) return;

    const handleMessage = (message: any) => {
      setIsLoading(false); // Set loading to false when a message is received
      // Handle messages received from the server
      const data = JSON.parse(message.data);
      console.log(JSON.stringify(data));
      if (data.sessionId) {
        // If a session ID is received, navigate to the game host page
        navigate(`/game-host/${data.sessionId}`);
      }
    };

    webSocket.addEventListener('message', handleMessage);

    return () => {
      // Clean up WebSocket connection when the component unmounts
      webSocket.removeEventListener('message', handleMessage);
    };
  }, [webSocket, navigate]);

  return (
    <div className='instructor-dashboard'>
      <div className="background-layer bg2"></div>
      <div className="background-layer bg1"></div>
      <Typography variant="h3">Choose A Game</Typography>
      <br />
      <div className='dashboard-games'>
        {gameDictList.map((gameDict, index) => (
          <div key={index} className='dashboard-game' onClick={handleGameClick}>
            <Typography variant="h5">{gameDict.title}</Typography>
            <img src={wcloud} alt="Game" style={{width:"300px"}} />
            <Typography variant="h6">{gameDict.description}</Typography>
          </div>
        ))}
      </div>
      {isLoading && (
        <div className="loading-indicator">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}

export default InstructorDashboard;
