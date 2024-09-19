import { Typography, Container, Box, Link, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import overviewImage from "../../../assets/curriculum_images/old_pngs/overviewImg.png";
import session1Image from "../../../assets/curriculum_images/old_pngs/session1Img.png";
import session2Image from "../../../assets/curriculum_images/old_pngs/session2Img.png";
import session3Image from "../../../assets/curriculum_images/old_pngs/session3Img.png";
import session4Image from "../../../assets/curriculum_images/old_pngs/session4Img.png";
import session5Image from "../../../assets/curriculum_images/old_pngs/session5Img.png";
import session6Image from "../../../assets/curriculum_images/old_pngs/session6Img.png";
import session7Image from "../../../assets/curriculum_images/old_pngs/session7Img.png";
import session8Image from "../../../assets/curriculum_images/old_pngs/session8Img.png";
import session9Image from "../../../assets/curriculum_images/old_pngs/session9Img.png";
import session10Image from "../../../assets/curriculum_images/old_pngs/session10Img.png";

function Curriculum(){

      const sessions = [
        {name: "Overview", image: overviewImage},
        {name: "Session 1", image: session1Image},
        {name: "Session 2", image: session2Image},
        {name: "Session 3", image: session3Image},
        {name: "Session 4", image: session4Image},
        {name: "Session 5", image: session5Image},
        {name: "Session 6", image: session6Image},
        {name: "Session 7", image: session7Image},
        {name: "Session 8", image: session8Image},
        {name: "Session 9", image: session9Image},
        {name: "Session 10", image: session10Image},
      ];

    return (
        <Container>
        <br id="Curriculum" />
        <br />
        <Typography
          variant="h2"
          fontWeight={"bold"}
          gutterBottom
          marginTop={"5vh"}
        >
          The Curriculum
        </Typography>

        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "2vw",
            justifyContent: "center",
            marginTop: "3vh",
            marginBottom: "5vh",
          }}
        >
          <a
            href="/pdfs/new_full_curriculum.pdf"
            download={"new_full_curriculum.pdf"}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                border: "1px solid black",
                borderRadius: "1vw",
                padding: "1vw",
                backgroundColor: "#ffdbbb",
                "&:hover": {
                  backgroundColor: "#ffc897",
                },
                "&:active": {
                  backgroundColor: "#4b4c4d",
                },
              }}
            >
              <Typography variant="body1" fontWeight={"bold"}>
                Download Full Curriculum
              </Typography>
            </Box>
          </a>

          <a
            href="/pdfs/new_student_surveys.pdf"
            download={"new_student_surveys.pdf"}
            style={{ textDecoration: "none" }}
          >
            <Box
              sx={{
                border: "1px solid black",
                borderRadius: "1vw",
                padding: "1vw",
                backgroundColor: "#ffdbbb",
                "&:hover": {
                  backgroundColor: "#ffc897",
                },
                "&:active": {
                  backgroundColor: "#4b4c4d",
                },
              }}
            >
              <Typography variant="body1" fontWeight={"bold"}>
                Download Surveys
              </Typography>
            </Box>
          </a>

          <Link
            href="https://www.youtube.com/playlist?list=PLt-uUZKJjdAGp47zfxyhhhXyMfio-fIPV"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <Box
              sx={{
                border: "1px solid black",
                borderRadius: "1vw",
                padding: "1vw",
                backgroundColor: "#ffdbbb",
                "&:hover": {
                  backgroundColor: "#ffc897",
                },
                "&:active": {
                  backgroundColor: "#4b4c4d",
                },
              }}
            >
              <Typography variant="body1" fontWeight={"bold"}>
                Video Lessons
              </Typography>
            </Box>
          </Link>

          <Link
            href="https://www.youtube.com/playlist?list=PLt-uUZKJjdAFdH0uffJRDnTIlIzDDzhZx"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
          >
            <Box
              sx={{
                border: "1px solid black",
                borderRadius: "1vw",
                padding: "1vw",
                backgroundColor: "#ffdbbb",
                "&:hover": {
                  backgroundColor: "#ffc897",
                },
                "&:active": {
                  backgroundColor: "#4b4c4d",
                },
              }}
            >
              <Typography variant="body1" fontWeight={"bold"}>
                Watch in Live Action
              </Typography>
            </Box>
          </Link>
        </Container>

        {sessions.map((session, index) => (
        <Accordion key={index} sx={{ backgroundColor: "#ffdbbb" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{session.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img src={session.image} alt={session.name} style={{
              maxWidth: "clamp(250px, 80vw, 1000px)", maxHeight: "80vh"
            }} />
          </AccordionDetails>
        </Accordion>
      ))}
        </Container>
    )
}

export default Curriculum;