import { Box, Typography} from "@mui/material";
import About from "../About";
import Navbar from "../Navbar";


function LandingPage() {
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
      <div id="home"></div>
      <Navbar/>

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