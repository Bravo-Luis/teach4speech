import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";
import DashboardPage from './pages/DashboardPage' ;
import GameHostPage from './pages/GameHostPage'
import RelatedWordsGame from './games/RelatedWordsGames'
import WaitingRoomPage from './pages/WaitingRoomPage';
import { SocketProvider } from './utils/SocketProvider'
import theme from './styles/Theme';
import Mission from './components/landing/Mission/Mission';
import Message from './components/landing/Message/Message';
import './styles/App.css'
import Charts from './components/landing/Charts/Charts';
import JoinUs from './components/landing/JoinUs/JoinUs';
import MoreAboutUs from './components/landing/MoreAboutUs/MoreAboutUs';
import  { Redirect }  from './pages/Redirect.tsx';

function App() {

  return (
    <SocketProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/redirect' element={<Redirect/>} />

          <Route path='/ourmission' element={<Mission/>} />
          <Route path='/message' element={<Message/>} />
          <Route path='/data' element={<Charts/>} />
          <Route path='/join-us' element={<JoinUs/>} />
          <Route path='/more-about-us' element={<MoreAboutUs/>} />

          {/* Player Routes */}
          <Route path='/waiting-room/:gameName/:gameCode' element={<WaitingRoomPage/>} />
          <Route path='/game/related_words/:gameCode/:theme' element={<RelatedWordsGame/>} />

          {/* Instructor Routes */}
          <Route path='/instructor-dashboard' element={<DashboardPage/>} />
          <Route path='/host/:gameName/:gameCode' element={<GameHostPage/>} />

        </Routes>
      </ThemeProvider>
    </SocketProvider>
  );
}

export default App;
