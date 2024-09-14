import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const SchoolsList: React.FC = () => {
  const schools = [
    "Isla Vista Elementary School", 
    "La Patera Elementary", 
    "Adams Elementary School", 
    "Roosevelt Elementary School",
    "La Cumbre Junior High School",
    "Harding Elementary School",
    "Monroe Elementary School",
    "Washington Elementary School",
    "McKinley Elementary School",
    "The Adelante Charter School",
    "Franklin Elementary School",
    "Cleveland Elementary School",
    "Deeksha STEM Bannerghatta Rd.",
    "Deeksha STEM Judicial Layout",
    "Deeksha STEM Kengeri",
    "Deeksha STEM Vidyanagar"
  ];

  return (
    <Box
      sx={{
        maxWidth: "65%",
        margin: "auto",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          marginTop: 2,
          marginBottom: 0.25,
        }}
      >
        {schools.map((school, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              {school}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SchoolsList;