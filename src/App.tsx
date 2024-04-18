import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import LandingPage from "./LandingPage/LandingPage";
import LoginPage from './LoginPage/LoginPage';
import SignupPage from './SignupPage/Signup';
import DashboardPage from './DashboardPage/DashboardPage' ;
import JoinPage from './JoinPage/JoinPage';
import GameHostPage from './GameHostPage/GameHostPage'
import RelatedWordsGame from './Games/RelatedWordsGames'
import WaitingRoomPage from './WaitingRoomPage/WaitingRoomPage';
import About from './About';
import { SocketProvider } from './SocketProvider'
import theme from './Theme';
import './App.css';


function App() {
 
  return (
    <SocketProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/about' element={<About/>} />

          {/* Player Routes */}
          <Route path='/join' element={<JoinPage/>} />
          <Route path='/waiting-room/:gameName/:gameCode' element={<WaitingRoomPage/>} />
          <Route path='/game/related_words/:gameCode/:theme' element={<RelatedWordsGame/>} />

          {/* Instructor Routes */}
          <Route path='/instructor-login' element={<LoginPage/>} />
          <Route path='/instructor-signup' element={<SignupPage/>} />
          <Route path='/instructor-dashboard' element={<DashboardPage/>} />
          <Route path='/host/:gameName/:gameCode' element={<GameHostPage/>} />

        </Routes>
      </ThemeProvider>
    </SocketProvider>
  );
}

export default App;
