import React from "react";
import { Typography } from "@mui/material";
import "./TextSection.css";

function TextSection() {
  return (
    <div className="text-section">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            WebkitTextStroke: "0.5px black",
            fontSize: "clamp(2rem, 4vw, 4rem)",
          }}
          variant="h3"
        >
          What is
        </Typography>

        <Typography
          sx={{
            color: "purple",
            fontWeight: "bold",
            WebkitTextStroke: "0.5px black",
            fontSize: "clamp(2rem, 4vw, 4rem)",
            paddingLeft: "0.8vw",
          }}
          variant="h3"
        >
          Teach4Speech
        </Typography>
        <Typography
          sx={{
            color: "black",
            fontWeight: "bold",
            WebkitTextStroke: "0.5px black",
            fontSize: "clamp(2rem, 4vw, 4rem)",
          }}
          variant="h3"
        >
          ?{" "}
        </Typography>
      </div>
      <br />
      <Typography variant="h6"
      
sx={{padding:"5vw",
fontWeight: "bold",
WebkitTextStroke: '0.5px black',
color:"black",
}}
      >

      Teach4Speech is an organization focused on creating interactive exercises for speech education. We believe that speech education should be accessible to everyone, and that it should be fun and engaging. Our goal is to create a platform that allows speech educators to hosting educational sessions based around our course material and to provide a space for students to practice their speech skills.

      </Typography>
    </div>
  );
}

export default TextSection;
