import { Box, Typography, ButtonGroup, Drawer } from "@mui/material";

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
        display: 'flex',
        flexDirection: 'row',
        justifyContent : 'center',
        alignItems: 'center',
        marginTop:'4vh',
        gap: 'clamp(10px, 5vw, 200px)',
        width:"100vw",
        position: "fixed",
        top: "0",
        margin: "0",
        padding: "2vh",
        borderRadius: '0px',
        boxShadow: '0px 0px 3px 0px black',
        background: 'white',
        zIndex: 1,
      }}>

          <a href="#Goal" style={{
            textDecoration: 'none',
          }}>
            <Typography variant="body2">
            Our Goal
            </Typography>
          </a>
          <a href="#Impact" style={{
            textDecoration: 'none',
          }}>
          <Typography variant="body2" >
              Impact
            </Typography>
          </a>
          <a href="#Curriculum" style={{
            textDecoration: 'none',
          }}>
          <Typography variant="body2">
              Curriculum
            </Typography>
          </a>
          <a href="#Team" style={{
            textDecoration: 'none',
          }}>
          <Typography variant="body2" >
              Team
            </Typography>
          </a>
          <a href="/join" style={{
            textDecoration: 'none',
          }}>
          <Typography variant="body2" >
              Play
            </Typography>
          </a>
          <a href="/instructor-login" style={{
            textDecoration: 'none',
          }}>
          <Typography variant="body2" >
              Instructor
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
          }} href="#Goal">
            <Typography variant="body2"> Goal </Typography>
          </a>
          <a style={{
            textDecoration: 'none',
            textAlign: 'center',
            padding: '1vh',
            background: 'white',
            borderBottom: '1px solid black',
          }} href="#Impact">
            <Typography variant="body2"> Impact </Typography>
          </a>
          <a style={{
            textDecoration: 'none',
            textAlign: 'center',
            padding: '1vh',
            background: 'white',
            borderBottom: '1px solid black',
          }} href="#Curriculum">
            <Typography variant="body2"> Curriculum </Typography>
          </a>
          <a style={{
            textDecoration: 'none',
            textAlign: 'center',
            padding: '1vh',
            background: 'white',
            borderBottom: '1px solid black',
          }} href="#Team">
            <Typography variant="body2"> Team </Typography>
          </a>
          <a style={{
            textDecoration: 'none',
            textAlign: 'center',
            padding: '1vh',
            background: 'white',
            borderBottom: '1px solid black',
          }} href="/join">
            <Typography variant="body2"> Play </Typography>
          </a>
          <a style={{
            textDecoration: 'none',
            textAlign: 'center',
            padding: '1vh',
            background: 'white',
            borderBottom: '1px solid black',
          }} href="/instructor-login">
            <Typography variant="body2"> Instructor </Typography>
          </a>


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