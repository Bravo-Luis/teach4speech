import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import ImpactText from "./ImpactText";
import OurGoalPie from "../assets/charts/OurGoalPie.png";
import useCommonStyles from "../styles/CommonStyles";

function HeaderAndText({
  header,
  text,
  link,
  quoted,
  impact = false,
  game,
  image,
  chart = false,
}: {
  header: string;
  text: string;
  link?: string;
  quoted?: string;
  impact?: boolean;
  game?: string;
  image?: any;
  chart?: boolean;
}) {
  const commonStyles = useCommonStyles();
  const [selectedChart] = useState(0);
  const charts = [
    {
      src: OurGoalPie,
      alt: 'Pie chart displaying student career goals and educational pathways.',
      description: "From a sample of 156 students in Santa Barbara, over 70% of students envisioned themselves in careers that either required no education or just a high school diploma. Fewer than 25% aimed to pursue college or higher education. Georgetown University recently released a report that by 2031, 72% of jobs will require more than a high school diploma. At Teach4Speech, we aim to bridge these gaps by fostering a love for learning early in students' educational journeys, and inspiring them to pursue high aspirations."
    },
  ];
  return (
    <Box
      sx={{
        maxWidth: "clamp(300px, 80vw, 1000px)",
        margin: "0 auto",
        textAlign: "left",
      }}
    >
      {header ? (
        <Typography
          variant="h2"
          fontWeight={"bold"}
          gutterBottom
          marginTop={"5vh"}
          textAlign={"center"}
        >
          {header}
        </Typography>
      ) : null}

      {text && !impact && (
        <Typography variant="body1" textAlign={"left"}>
          {text}
        </Typography>
      )}
      {text && impact && <ImpactText text={text} />}
      <br />
      <br />

      {game ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            width: "100%",
            justifyContent: "center",
            rowGap: "2.5vh",
          }}
        >
          <Button href={link} variant="contained">
            <Typography variant="caption" color={"white"}>
              Play
            </Typography>
          </Button>
        </Box>
      ) : null}

      {image && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5vw",
            padding: "2.5vw",
          }}
        >
          <img
            src={image}
            alt="Graph"
            style={{
              maxWidth: "1000px",
              minWidth: "270px",
              border: "1px solid black",
              padding: "16px",
              borderRadius: "16px",
              width: "clamp(200px, 80%, 800px)",
            }}
          />
        </Box>
      )}

      {chart ? (
        <Box
          className={commonStyles.ColumnCenteredContainer}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: "0vh",
            width: "100%",
            justifyContent: "center",

            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2.5vw",
              width: "100vw !important", 
            }}
          >
            <img
              src={charts[selectedChart].src}
              alt={charts[selectedChart].alt}
              style={{
                maxWidth: "600px",
                minWidth: "270px",
                border: "1px solid black",
                borderRadius: "16px",
                width: "clamp(200px, 80%, 800px)",
              }}
            />
            <Typography
              component="span"
              sx={{
                maxWidth: "600px",
                textAlign: "left",
                width: "clamp(200px, 80%, 800px)",
              }}
            >
              {charts[selectedChart].description}
            </Typography>
          </Box>
        </Box>
      ) : null}

      {link ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            width: "100%",
            justifyContent: "space-between",
            rowGap: "2.5vh",
          }}
        >
          <Button
            href={link}
            variant="outlined"
            sx={{
              padding: "10px 20px",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            <Typography
              variant="caption"
              color={"primary"}
              sx={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              {header === "The Impact"
                ? "Learn More About The Problem"
                : "Learn More"}
            </Typography>
          </Button>
          {quoted && (
            <Typography textAlign={"right"} paddingRight={"2.5vw"}>
              <i>{quoted}</i>
            </Typography>
          )}
        </Box>
      ) : null}
    </Box>
  );
}

export default HeaderAndText;
