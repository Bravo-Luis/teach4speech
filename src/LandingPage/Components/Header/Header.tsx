import './Header.css'
import { Typography, Button } from '@mui/material'

function Header() {
    return (
      <div className="landing-header">

       <Typography sx={{paddingLeft:"clamp(10px, 2.5vw, 200px)", fontWeight: "bold",WebkitTextStroke: '1px black',  color:"black", fontSize: "clamp(40px, 10vw, 80px)"}} variant="h1">Teach4Speech</Typography>
       <Typography sx={{ paddingLeft:"clamp(10px, 2.5vw, 200px)", fontWeight: "regular",WebkitTextStroke: '1px black', color:"black", fontSize: "clamp(16px, 7vw, 40px)"}} variant="h4">Interactive Exercises for Speech Education</Typography>
       <br />
       <Button href="\join" variant="contained" 
       sx={{
        borderRadius:"5rem",
        background: "purple", 
        color:"white", 
        WebkitTextStroke: '1px black', 
        fontWeight:"bold" ,
        width: "clamp(200px, 25vw, 300px)", 
        height: "clamp(80px, 10vw, 100px)", 
        marginLeft:"clamp(10px, 2.5vw, 200px)", 
        fontSize: "clamp(2rem, 4vw, 4rem)",
        ":hover": {
          backgroundColor: "#FFEF58",
          color: "black"
        }
       }}>Play</Button>
       
      </div>
    );
  }

export default Header;