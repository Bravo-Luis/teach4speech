import './Header.css'
import { Typography, Button } from '@mui/material'

function Header() {
    return (
      <div className="landing-header">

       <Typography sx={{paddingLeft:"clamp(10px, 2.5vw, 200px)", fontWeight: "bold",WebkitTextStroke: '1px black',  color:"black"}} variant="h1">Teach4Speech</Typography>
       <Typography sx={{ paddingLeft:"clamp(10px, 2.5vw, 200px)", fontWeight: "bold",WebkitTextStroke: '1px black', color:"black"}} variant="h4">Interactive Exercises for Speech Education</Typography>
       <br />
       <Button href="\login" variant="contained" sx={{borderRadius:"5rem",background: "purple", color:"white", WebkitTextStroke: '1px black', fontWeight:"bold" ,width: "clamp(250px, 25vw, 500px)", height: "clamp(80px, 10vw, 120px)", marginLeft:"clamp(10px, 2.5vw, 200px)", fontSize: "clamp(2rem, 4vw, 4rem)"}}>Play</Button>
       
      </div>
    );
  }

export default Header;