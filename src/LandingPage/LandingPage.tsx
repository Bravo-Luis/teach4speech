import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2.5,
        overflow: "hidden",
      }}
    >
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "clamp(10px, 2vh, 30px)",
          right: "clamp(10px, 2vw, 30px)",
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
          gap: 2,
          maxWidth: "100%",
        }}
      >
        <Typography variant="h1" fontWeight="bold">
          Teach4Speech
        </Typography>
        <Typography variant="h3">Interactive speech education</Typography>
        <Button
          variant="contained"
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            padding: "10px 20px",
            borderRadius: "20px",
            color: "primary",
          }}
          onClick={() => navigate("/join")}
        >
          <Typography variant="h5">Play</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default LandingPage;
