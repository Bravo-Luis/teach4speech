import { Container, Typography, Paper } from "@mui/material";
import AdultMonroe from "../../assets/charts/AdultMonroe.png";
import ConfAge from "../../assets/charts/ConfAge.png";
import ConfHispanic from "../../assets/charts/ConfHispanic.png";
import GenderPublicSmall from "../../assets/charts/GenderPublicSmall.png";
import LearnHispanic from "../../assets/charts/LearnHispanic.png";
import LearnMonroe from "../../assets/charts/LearnMonroe.png";
import SmallAge from "../../assets/charts/SmallAge.png";
import SmallGender from "../../assets/charts/SmallGender.png";
import { useState } from "react";

function Charts() {
    const charts = [
        [AdultMonroe, "Confidence Level Speaking to Adults"], 
        [ConfAge, "Confidence Level by Age"], 
        [ConfHispanic, "Confidence Levels of Hispanic Students after T4S"], 
        [GenderPublicSmall, "Confidence Levels by Gender"], 
        [LearnHispanic, "Learning Levels of Hispanic Students after T4S"], 
        [LearnMonroe, "Learning Levels of Students after T4S"], 
        [SmallAge, "Confidence Levels in Small Groups by Age Group"], 
        [SmallGender, "Confidence Levels in Small Groups by Gender"]
    ];
    const [selectedChart, setSelectedChart] = useState(0);
  

    return (
        <Container sx={{ 
            position: 'relative', 
            width: '100vw', 
            overflow: 'hidden', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            paddingBottom: '25vh',
            }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px', color:'black'}}>
                The Data
            </Typography>
            <Paper
                sx={{
                    borderRadius: "1vw",
                    boxShadow: 5,
                    marginBottom: '20px',
                    width: 'clamp(200px, 80%, 800px)',
                    overflow: 'hidden',
                    padding: '2vw',
                    backgroundColor: 'white',
                    cursor: 'pointer',

                }}
                onClick={() => setSelectedChart((selectedChart + 1) % charts.length)} // Optional: cycle through charts on main click
            >
                <img
                    src={charts[selectedChart][0]}
                    alt={charts[selectedChart][1]}
                    style={{
                        width: "100%",
                        height: "auto"
                    }}
                />
            </Paper>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
                {charts.map((chart, index) => (
                    <Paper
                        key={index}
                        onClick={() => setSelectedChart(index)}
                        sx={{
                            margin: '5px',
                            padding: '10px',
                            width: 'clamp(100px, 35vw, 300px)',  // Smaller width for mobile
                            height: 'clamp(50px, 30vw, 200px)', // Smaller height for mobile
                            backgroundSize: 'cover',
                            backgroundImage: `url(${chart[0]})`,
                            border: selectedChart === index ? '2px solid purple' : 'none',
                            boxSizing: 'border-box',
                            cursor: 'pointer'
                        }}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Charts;
