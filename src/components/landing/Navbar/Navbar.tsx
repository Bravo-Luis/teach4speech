import { Drawer, Typography, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

function Navbar(){
    
    const screenwidth = useState(window.innerWidth)
    const openDrawer = useState(false)
    const navigate = useNavigate()
    const yPos = useState(0)

    useEffect(()=>{
        const handleScroll = () => {
            yPos[1](window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

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
        <>
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
  
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent : 'space-between',
      alignItems: 'center',
      marginTop:'4vh',
      gap: 'clamp(10px, 5vw, 200px)',
      width:"100vw",
      position: "fixed",
      top: "0",
      margin: "0",
      padding: "2vh",
      borderRadius: '0px',
      boxShadow: `0px 0px ${Math.min(yPos[0] * 0.01, 4)}px -2px black`,
      background: 'white',
      zIndex: 100,
    }}>

        <Box sx={{
            paddingLeft: 'clamp(10px, 1vw, 200px)',
            marginLeft: 'clamp(10px, 1vw, 200px)',
            fontWeight: 'bold',
            color: 'black',
        }}> 
        <a href="#home">
        <img 
          src='pdfs/T4S.png' 
          alt='Teach4Speech Logo'
          style={{ 
            marginTop: '-20px',
            marginBottom: '-40px', 
            marginRight: '-3px',   
            marginLeft: '-25px', 
            width: '150px', 
            height: '80px' 
            }}>
          </img>
        </a>
        </Box>
  
        <Box sx={{
            gap: 'clamp(10px, 5vw, 200px)',
            display: 'flex',
            marginRight: '150px'    
        }}>
        <NormalButton href={"#Goal"} label={"Goal"}/>
        <NormalButton href={"#ImpactMessage"} label={"Impact"}/>
        <NormalButton href={"#Curriculum"} label={"Curriculum"}/>
        <NormalButton href={"#Games"} label={"Games"}/>
        <NormalButton href={"#Team"} label={"Team"}/>
        <NormalButton href={'https://forms.gle/iGcuqsF9ce7HKCqQ7'} label={"Join Us"}/>

        </Box>

        <Button variant='contained' sx={{
          marginRight: 'clamp(10px, 1vw, 200px)',
        }}  onClick={()=>{
            navigate('/redirect')
        }} 

        >
            <Typography variant="caption" color={"white"}> Play </Typography>
        </Button>


  
    </Box>
        </>
      ) : (<Drawer onClose={
        () => {
          openDrawer[1](false)
        }
      
      } open={openDrawer[0]} anchor="top">
     
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      
    }}>
  
        <MobileButton href={"#Goal"} label={"Goal"}/>
        <MobileButton href={"#Impact"} label={"Impact"}/>
        <MobileButton href={"#Curriculum" }label={"Curriculum"}/>
        <MobileButton href={"#Team"} label={"Team"}/>
        <MobileButton href={'https://forms.gle/iGcuqsF9ce7HKCqQ7'} label={"Join Us"}/>
  
    </Box>
      </Drawer>)}
        </>
    )
}



interface NavButton {
    href: string;
    label: string;
    bold?: boolean;
}

function MobileButton({href, label} : NavButton){
    return (
        <a style={{
            textDecoration: 'none',
            textAlign: 'center',
            padding: '1vh',
            background: 'white',
            borderBottom: '1px solid black',
          }} href={href}>
            <Typography variant="caption"> {label} </Typography>
          </a>
    )
}

function NormalButton({href, label, bold=false} : NavButton){
    return (
        <a href={href} style={{
            textDecoration: 'none',
            userSelect: 'none',
            whiteSpace: 'no'
          }}>
            <Typography variant="caption" fontWeight={bold ? "bold" : ""}>
            {label}
            </Typography>
          </a>
    )
}

export default Navbar;