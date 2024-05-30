import { Box, Typography, Paper, Button, Theme } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AdultMonroe from "../../../assets/charts/AdultMonroe.png";
import ConfAge from "../../../assets/charts/ConfAge.png";
import HeaderAndText from "../../HeaderAndText";
import SmallGender from "../../../assets/charts/SmallGender.png";
import { useState } from "react";
import useCommonStyles from "../../../styles/CommonStyles";
import { useNavigate } from "react-router-dom";

function Charts() {
  const [selectedChart, setSelectedChart] = useState(0);
  const commonStyles = useCommonStyles();
  const navigate = useNavigate()
  const gradient = (theme: Theme) => {
    return `linear-gradient(180deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, white)`;
  };

  const charts = [
    { src: AdultMonroe, alt: "Confidence Speaking to Adults", description: "After our 10 week program, students reported a higher average confidence in speaking to adults."},
    { src: ConfAge, alt: "Confidence by Age", description: "Students in both the 6-8 and 12-14 age groups both reported increased confidence in public speaking and small group discussions after only one week of the T4S curriculum."},
    { src: SmallGender, alt: "Confidence in Small Groups", description: "Both boys and girls increased their confidence in small group discussions after only a week of Teach4Speech."}
  ];

  return (
    <Box className={commonStyles.ColumnCenteredContainer} sx={{ paddingBottom: "25vh", background: gradient,}}>
      <Button
        startIcon={
          <ArrowBackIosIcon
            sx={{
              width: "clamp(12px, 2vw, 24px)",
            }}
          />
        }
        sx={{
          position: "absolute",
          top: "2vh",
          left: "2vw",
          color: "black",
        }}
        onClick={() => {
          navigate("/");
        }}
        variant="outlined"
        color="primary"
      >
        Back
      </Button>
      <HeaderAndText
        header="The Data"
        text=""
        link=""
      />
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "2.5vw", padding: "2.5vw" }}>
        <img
          src={charts[selectedChart].src}
          alt={charts[selectedChart].alt}
          style={{ maxWidth: "600px", minWidth: "270px", border: "1px solid black", padding: "16px", borderRadius: "16px", width: "clamp(200px, 80%, 800px)" }}
        />
        <Typography component="span" sx={{ maxWidth: "600px", textAlign: "left", width: "clamp(200px, 80%, 800px)" }}>
          {charts[selectedChart].description}
        </Typography>
      </Box>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
        {charts.map((chart, index) => (
          <Paper
            key={index}
            onClick={() => setSelectedChart(index)}
            sx={{
              width: "clamp(100px, 35vw, 300px)",
              height: "calc(clamp(100px, 35vw, 300px) * 10.5 / 16)", 
              backgroundImage: `url(${chart.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: "pointer",
              margin: "1vw",
              border: selectedChart === index ? "2px solid black" : "2px solid white",
            }}
            
          />
        ))}
      </div>
    </Box>
  );
}

export default Charts;
