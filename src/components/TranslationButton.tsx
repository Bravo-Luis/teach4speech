import { Box, Typography } from "@mui/material";
import { useState } from "react";

function TranslationButton({
    isEnglish,
    setIsEnglish,
  }: {
    isEnglish: boolean;
    setIsEnglish: any;
  }) {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Box
        borderRadius={16}
        paddingLeft={1}
        paddingRight={1}
        boxShadow={3}
        border={"3px solid black"}
        sx={{
          background: "white",
          fontWeight: "bold",
          fontSize: "1em",
          transition: "transform 0.3s ease-in-out",
          ":hover": {
            cursor: "pointer",
            transform: "scale(1.05)",
          },
        }}
        onClick={() => setIsEnglish(!isEnglish)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            textAlign: "center",
            transition: "opacity 0.3s ease-in-out",
            transitionDelay: isHovered ? "0s" : "0.1s",
            userSelect: "none",
            padding: "5px",
            msUserSelect: "none",
          }}
            variant="h4"
        >
          {isEnglish ? "Español" : "English"}
        </Typography>
      </Box>
      </div>
    );
  }

export default TranslationButton;