import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Other imports...
import LandingPage from './LandingPage/LandingPage';
import Game from './Game';
import LoginPage from './LoginPage/LoginPage';
import InstructorDashboard from './InstructorDashboard/InstructorDashboard';
import GameHost from './GameHost/GameHost';
import JoinSection from './JoinSection/JoinSection';
import Signup from './SignUp/SignUp';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [webSocket, setWebSocket] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user : any) => {
      console.log("Auth state changed:", user);
      setCurrentUser(user);
    });

    // Initialize WebSocket connection
    const ws : any = new WebSocket('wss://teach4speech-backend.onrender.com'); 
    setWebSocket(ws);

    // Function to close WebSocket
    const closeWebSocket = () => {
      if (ws) {
        ws.close();
        console.log('WebSocket closed');
      }
    };

    // Event listener for closing the WebSocket when the window is about to be unloaded
    window.addEventListener('beforeunload', closeWebSocket);

    return () => {
      unsubscribe();
      closeWebSocket();
      // Remove the event listener on cleanup
      window.removeEventListener('beforeunload', closeWebSocket);
    };
}, []);


  const ProtectedRoute = ({ children } : any) => {
    return currentUser ? children : <Navigate to="/signin" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/join" element={<JoinSection webSocket={webSocket} />} />
        <Route path="/game/:gameCode" element={
          <ProtectedRoute>
            <Game  webSocket={webSocket}/>
          </ProtectedRoute>
        } />
        <Route path="/instructor-dashboard" element={
          <ProtectedRoute>
            <InstructorDashboard webSocket={webSocket} />
          </ProtectedRoute>
        } />
        <Route path="/game-host/:gameCode" element={
          <ProtectedRoute>
            <GameHost webSocket={webSocket} />
          </ProtectedRoute>
        } />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
