import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
  const [token, setToken] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user : any) => {
      console.log("Auth state changed:", user);
      setCurrentUser(user);
      setToken(user?.getIdToken());
    });


    const ws : any = new WebSocket('wss://teach4speech-backend.onrender.com/'); 
    setWebSocket(ws);

    const closeWebSocket = () => {
      if (ws) {
        ws.close();
        console.log('WebSocket closed');
      }
    };

    window.addEventListener('beforeunload', closeWebSocket);


    return () => {
      unsubscribe();
      closeWebSocket();
      window.removeEventListener('beforeunload', closeWebSocket);
    };
  }, []);



  const ProtectedRoute = ({ children } : any) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  const FastTrack = ({children} : any) => {
    return currentUser ? <Navigate to="/instructor-dashboard" /> : children;
  }

  return (

      <Routes>
        <Route path="/" element={<LandingPage token={token}/>} />
      
          <Route path="/signin" element={
          <FastTrack>
            <LoginPage />
          </FastTrack>
          } />
          <Route path="/signup" element={
            <FastTrack>
            <Signup />
          </FastTrack>
          } />

       

        <Route path="/join" element={<JoinSection webSocket={webSocket} setWebSocket={setWebSocket}/>} />
        <Route path="/game/:gameCode" element={
            <Game  webSocket={webSocket}/>
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

  );
}

export default App;
