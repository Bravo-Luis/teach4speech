import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768; // threshold for mobile device size

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",                      // For mobile layout
        justifyContent: "center",
        alignItems: "center",
        px: "5%",                                     // Spacing for mobile
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "clamp(10px, 2vh, 5%)",                // Adjusted for mobile
          right: "clamp(10px, 2vw, 5%)",              // this too
          fontWeight: "bold",
          borderRadius: "16px",
          padding: "10px 20px",
        }}
        onClick={() => navigate("/instructor-login")}
      >
        <Typography variant="h5">Instructor</Typography>
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",                                // Adjusted for mobile
          maxWidth: "100%",
        }}
      >
        {isMobile ? (
          <Typography variant="h2" fontWeight="bold"> {/* Conditional for mobile */}
            Teach4Speech
          </Typography>
        ) : (
          <Typography variant="h1" fontWeight="bold"> {/* Else for desktop */}
            Teach4Speech
          </Typography>
        )}
        <Typography variant="h4">                     {/* Adjusted font size */}
          Interactive speech education
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",                        // Adjusted
            padding: "10px 20px",
            borderRadius: "20px",
            color: "primary",
          }}
          onClick={() => navigate("/join")}
        >
          <Typography variant="h6">Play</Typography>  {/* Adjusted font size */}
        </Button>
      </Box>
    </Box>
  );
}

export default LandingPage;