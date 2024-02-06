import { useEffect, useState } from 'react';
import './InstructorDashboard.css';
import { Typography, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import wcloud from "../assets/wcloud.png";

function InstructorDashboard({ webSocket, setWebSocket } : {webSocket: WebSocket | null, setWebSocket: (any: any) => void}) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const gameDictList = [
    {"title": "Related Words", "description": "In this game players are given a key word and they must provide as many related words as possible.", "img": "../assets/wcloud.png"},
  ];

  const handleGameClick = () => {
    setIsLoading(true); 
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      console.log('WebSocket is open, sending message...');
      webSocket.send(JSON.stringify({ role: 'instructor', action: 'create' }));
    } else {
      console.log('WebSocket is not open, opening connection...');
      const newWS = new WebSocket('wss://teach4speech-backend.onrender.com/');
      newWS.onopen = () => {
        // Wait for the connection to open before sending the message
        console.log('WebSocket is open, sending message...');
        newWS.send(JSON.stringify({ role: 'instructor', action: 'create' }));
      };
      setWebSocket(newWS);
    }
  };
  

  useEffect(() => {
    if (!webSocket) return;

    const handleMessage = (message: any) => {
      setIsLoading(false); 
    
      const data = JSON.parse(message.data);
      console.log(JSON.stringify(data));
      if (data.sessionId) {
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
      <Typography variant="h3"> Games </Typography>
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
