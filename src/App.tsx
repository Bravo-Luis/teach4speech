import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import LandingPage from "./LandingPage/LandingPage";
import LoginPage from './LoginPage/LoginPage';
import SignupPage from './SignupPage/Signup';
import DashboardPage from './DashboardPage/DashboardPage' ;
import JoinPage from './JoinPage/JoinPage';
import GameHostPage from './GameHostPage/GameHostPage'
import RelatedWordsGame from './Games/RelatedWordsGames'
import WaitingRoomPage from './WaitingRoomPage/WaitingRoomPage';
import { SocketProvider } from './SocketProvider'
import theme from './Theme';
import './App.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Mission from './Mission';
import RiyasMessage from './RiyasMessage';


function App() {

  const navigate = useNavigate()
 
  return (
    <SocketProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path='/redirect' element={<Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw"
          
          }}
          >
              <Button
        startIcon={<ArrowBackIosIcon
        sx={{
          width:"clamp(12px, 2vw, 24px)",
        }}
        />}
        sx={{
          position:'absolute',
          top:'2vh',
          left:'2vw',
          color: 'black'
        }}
        onClick={()=>{
          navigate('/')
        }}
        variant='outlined'
        color='primary'
   
        >
        Back
      </Button>
            <Button variant='contained' onClick={()=>navigate('/join')}
            >Student</Button>
            <Button variant='contained' onClick={()=>{
              navigate('/instructor-login')
            
            }} >Instructor</Button>
          </Box>} />

          <Route path='/ourmission' element={<Mission/>} />
          <Route path='/riyasmessage' element={<RiyasMessage/>} />

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
