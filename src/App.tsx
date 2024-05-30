import { ThemeProvider } from '@mui/material/styles';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage' ;
import JoinPage from './pages/JoinPage';
import GameHostPage from './pages/GameHostPage'
import RelatedWordsGame from './games/RelatedWordsGames'
import WaitingRoomPage from './pages/WaitingRoomPage';
import { SocketProvider } from './utils/SocketProvider'
import theme from './styles/Theme';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Mission from './components/landing/Mission/Mission';
import Message from './components/landing/Message/Message';
import './styles/App.css'
import Charts from './components/landing/Charts/Charts';
import JoinUs from './components/landing/JoinUs/JoinUs';
import MoreAboutUs from './components/landing/MoreAboutUs/MoreAboutUs';

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
          <Route path='/message' element={<Message/>} />
          <Route path='/data' element={<Charts/>} />
          <Route path='/join-us' element={<JoinUs/>} />
          <Route path='/more-about-us' element={<MoreAboutUs/>} />

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
