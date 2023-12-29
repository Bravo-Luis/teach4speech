
import './App.css'
import LandingPage from './LandingPage/LandingPage'
import Game from './Game'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import LoginPage from './LoginPage/LoginPage'
import InstructorDashboard from './InstructorDashboard/InstructorDashboard'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/game/:gameCode" element={<Game/>} />
      <Route path="/instructor-dashboard" element={<InstructorDashboard/>} />
      </Routes>
    </BrowserRouter>  
    )
}

export default App
