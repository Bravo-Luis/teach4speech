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
  const [token, setToken] = useState(null);


  useEffect(() => {
    // Function to retrieve the token from local storage
    const getTokenFromLocalStorage = () => {
      const storedToken : any = localStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
        // Here, you can also establish WebSocket connection using the token if needed
      }
    };

    // Function to store the token in local storage
    const storeTokenInLocalStorage = (token : any) => {
      localStorage.setItem('token', token);
    };

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user : any) => {
      console.log("Auth state changed:", user);
      setCurrentUser(user);
      if (user) {
        // Assuming 'user' has a method to get the token, modify as per your user object
        user.getIdToken().then((idToken : any) => {
          setToken(idToken);
          storeTokenInLocalStorage(idToken);
        });
      }
    });

    // Initialize WebSocket connection
    const ws : any = new WebSocket('ws://localhost:3000'); // Replace with your server URL
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

    // Retrieve token from local storage on component mount
    getTokenFromLocalStorage();

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
        <Route path="/" element={<LandingPage token={token}/>} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/join" element={<JoinSection webSocket={webSocket} />} />
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
    </BrowserRouter>
  );
}

export default App;
