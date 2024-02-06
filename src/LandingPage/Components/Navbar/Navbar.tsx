import  { useState, useEffect } from 'react';
import { Button, Typography, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate()


  const toggleDrawer = (open : any) => (event : any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      // Check if the scroll position is more than 50 pixels
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 25);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getNavbarClass = () => {
    return isScrolled ? "landing-nav-bar-low" : "landing-nav-bar";
  };

  if (windowWidth > 850) {
    return (
      <nav className={getNavbarClass()}>
        <div className="landing-nav-bar-content">
            <Typography sx={{fontWeight:"bold", color: isScrolled ? "white" : "black"}} variant="h6">
            Teach4Speech
            </Typography>
            <nav className="landing-nav-buttons">
            <Button sx={{color: isScrolled ? "white" : "black", fontWeight:"bold"}} href='#Home'> Home </Button>
            <Button sx={{color: isScrolled ? "white" : "black", fontWeight:"bold"}} href="#About"> About </Button>
            <Button sx={{color: isScrolled ? "white" : "black", fontWeight:"bold"}} href='#Contact'> Contact </Button>
            </nav>
            <Button href="\signin" variant="contained" 
            sx={{
              backgroundColor: isScrolled ? "#FFEF58" : "purple", 
              fontWeight:"bold",
              color: isScrolled ? "black" : "white", 
              borderRadius:"1rem",
              ":hover": {
                backgroundColor: isScrolled ? "black" : "#FFEF58",
                color:  isScrolled ? "white" : "black"
              }
              }}>
            Instructor
            </Button>
        </div>
      </nav>    
    );
  } else {
    return (
      <nav className={getNavbarClass()}>
        <div className="landing-nav-bar-content">
        <Typography variant="h6" sx={{fontWeight: "bold", color: isScrolled ? "white" : "black"}}>
          Teach4Speech
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{paddingRight:"20px", color: isScrolled ? "white" : "black"}}/>
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{height:"100vh", width:"200px", backgroundColor: "white", paddingTop: "2.5vh"}}
          >
            <div className='landing-nav-bar-menu'
            
            >
            <Button href='#Home' sx={{color:"black"}}> Home </Button>
            <Button href="#About" sx={{color:"black"}}> About </Button>
            <Button href='#Contact' sx={{color:"black"}}
            
            > Contact </Button>
              <Button
              onClick={()=>{
                navigate('/signin')
              }}
              variant="contained"
              style={{
                backgroundColor: "#FFEF58", color: "black",
              }}>
                Instructor
              </Button>
            </div>
          </div>
        </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
