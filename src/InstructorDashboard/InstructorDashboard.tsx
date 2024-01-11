import  {  useEffect } from 'react';
import './InstructorDashboard.css';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function InstructorDashboard({ webSocket } : {webSocket: WebSocket | null}) {
  const navigate = useNavigate();

  const gameDictList = [
    {"title": "Game 1", "description": "This is a game", "img": "https://researchparent.com/wp-content/uploads/Generic-Game-Board-Facebook.jpg"},
    // ... other games if any
  ];

  const handleGameClick = () => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      // Send a message to the server to create a new session
      webSocket.send(JSON.stringify({ role: 'instructor', action: 'create' }));
    }
  };

  useEffect(() => {
    if (!webSocket) return;

    const handleMessage = (message: any) => {
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
      <Typography variant="h3">Instructor Dashboard</Typography>
      <br />
      <div className='dashboard-games'>
        {gameDictList.map((gameDict, index) => (
          <div key={index} className='dashboard-game' onClick={handleGameClick}>
            <img src={gameDict.img} alt="Game" />
            <Typography variant="h5">{gameDict.title}</Typography>
            <Typography variant="h6">{gameDict.description}</Typography>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default InstructorDashboard;
