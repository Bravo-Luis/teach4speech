import { Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

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
      }}
    >
   
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "clamp(10px, 2vh, 5%)",             
          right: "clamp(10px, 2vw, 5%)",              
        }}
        onClick={() => navigate("/instructor-login")}
      >
        Instructor
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0rem",                               
          maxWidth: "100%",
        }}
      >
        <Typography variant="h1">Teach4Speech</Typography>

        
        <Typography variant="h2">                   
          Interactive speech education
        </Typography>

        
        <Button
          variant="contained"
          sx={{mt: '2vh'}}

          onClick={() => navigate("/join")}
        >
          Play
         
        </Button>
      </Box>
      <Link to="/about" style={{ textDecoration: "none", position:'absolute', bottom:'2.5%'}}>
        <Typography variant="body1" color={"primary.light"} sx={{
          ':hover' : {
            textDecoration: "underline"
          }
        }}>
          Learn more about Teach4Speech
        </Typography>
      </Link>
    </Box>
  );
}

export default LandingPage;