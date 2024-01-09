import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './App.css';
import LandingPage from './LandingPage/LandingPage';
import Game from './Game';
import LoginPage from './LoginPage/LoginPage';
import InstructorDashboard from './InstructorDashboard/InstructorDashboard';
import GameHost from './GameHost/GameHost';
import UsernameSelect from './UsernameSelect/UsernameSelect';
import Game2 from './Game2';
import Signup from './SignUp/SignUp';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      setCurrentUser(user);
    });
  
    return unsubscribe; // Unsubscribe on unmount
  }, []);
  

  const ProtectedRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/signin" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/game/:gameCode" element={<Game />} />
        <Route path="/instructor-dashboard" element={
          <ProtectedRoute>
            <InstructorDashboard />
          </ProtectedRoute>
        } />
        <Route path="/game-host/:gameCode" element={
          <ProtectedRoute>
            <GameHost />
          </ProtectedRoute>
        } />
        <Route path="/username-select" element={<UsernameSelect />} />
        {/* Add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
