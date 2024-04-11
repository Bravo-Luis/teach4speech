import { Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";

const configs = {
  particles: {
    destroy: {
      mode: "split",
      split: {
        count: 1,
        factor: {
          value: {
            min: 2,
            max: 4
          }
        },
        rate: {
          value: 100
        },
        particles: {
          life: {
            count: 1,
            duration: {
              value: {
                min: 2,
                max: 3
              }
            }
          },
          move: {
            speed: {
              min: 10,
              max: 15
            }
          }
        }
      }
    },
    number: {
      value: 80
    },
    color: {
      value: [
        "#3998D0",
        "#2EB6AF",
        "#A9BD33",
        "#FEC73B",
        "#F89930",
        "#F45623",
        "#D62E32",
        "#EB586E",
        "#9952CF"
      ]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 1
    },
    size: {
      value: {
        min: 80,
        max: 100
      }
    },
    collisions: {
      enable: false,
      mode: "bounce"
    },
    move: {
      enable: true,
      speed: 0.1,
      outModes: "bounce"
    }
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "pop"
      }
    }
  },
  background: {
    color: "#000000"
  }
};

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