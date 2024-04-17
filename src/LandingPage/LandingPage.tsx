import { Box, Typography, ButtonGroup, Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import About from "../About";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

function LandingPage() {

  const screenwidth = useState(window.innerWidth) 
  const openDrawer = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      screenwidth[1](window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",                     
        justifyContent: "center",
        alignItems: "center",
        px: "5%",                                    
        overflow: "hidden",
        textAlign: "center",
        background: (theme)=>{return theme.palette.background.default}
      }}
    >

      {screenwidth[0] <= 720 ? (<MenuIcon
      
        onClick={() =>{
          openDrawer[1](!openDrawer[0])
        }}
      sx={{
        position: "absolute",
        top: "clamp(30px, 2vh, 5%)",
        left: "clamp(30px, 2vw, 5%)",
        color: "black",
        scale: "2",
      }}
      />) : (null)}
   
      {
        screenwidth[0] > 720 ? (
          <>

      <ButtonGroup sx={{
        marginTop:'4vh',
        gap: 'clamp(10px, 5vw, 200px)',
      }}>

          <a href="#About" style={{
            textDecoration: 'none',
          }}>
            <Typography>
              About
            </Typography>
          </a>
          <a href="#Team" style={{
            textDecoration: 'none',
          }}>
          <Typography>
              Team
            </Typography>
          </a>
          <a href="#Interest" style={{
            textDecoration: 'none',
          }}>
          <Typography>
              Interest
            </Typography>
          </a>
         

      </ButtonGroup>
          </>
        ) : (<Drawer onClose={
          () => {
            openDrawer[1](false)
          }
        
        } open={openDrawer[0]} anchor="top">
       
      <ButtonGroup sx={{
        display: 'flex',
        flexDirection: 'column',
        
      }}>

          <a style={{
            textDecoration: 'none',
            textAlign: 'center',
            padding: '1vh',
            background: 'white',
            borderBottom: '1px solid black',
          }} href="#About">About</a>
          <a style={{
            textDecoration: 'none',
            textAlign: 'center',
            padding: '1vh',
            background: 'white',
            borderBottom: '1px solid black',
          }} href="#Team">Team</a>
          <a style={{
            textDecoration: 'none',
            textAlign: 'center',
            padding: '1vh',
            background: 'white',
            borderBottom: '1px solid black',
          }} href="#Interest">Interest</a>


      </ButtonGroup>
        </Drawer>)
      }
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0rem",                               
          maxWidth: "100%",
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        <Typography variant="h1">Teach4Speech</Typography>

        
        <Typography variant="h2">                   
          Interactive speech education
        </Typography>

        
      </Box>
      <About/>
    </Box>
  );
}

export default LandingPage;