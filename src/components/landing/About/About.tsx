import { Box, Theme, Typography } from "@mui/material";
import HeaderAndText from "../../HeaderAndText";
import useAboutStyles from "./AboutStyles";
import useCommonStyles from "../../../styles/CommonStyles";
import GenderPublicSmall from "../../../assets/charts/GenderPublicSmall.png";
import ConfHispanic from "../../../assets/charts/ConfHispanic.png";
import ImpactText from "../../ImpactText";
import ProblemGender from "../../../assets/charts/ProblemGender.png"
import InitialProblem from "../../../assets/charts/initialproblem.png";

function About() {
  const classes = useAboutStyles();
  const commonClasses = useCommonStyles();
  const gradient = (theme: Theme) => {
    return `linear-gradient(180deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, white)`;
  };

  const items = [
    "12 Schools in Santa Barbara",
    "10 week curriculum",
    "Teacher training model implemented",
    "Web App Developed",
  ];

  const impactText = "After just {5} {sessions} students on average {tripled} their speaking times. The record speaker spoke {4x} the initial time. By the tenth session, {66%} of students who spoke at the front of the room had not done so during the first session, and {66%} were girls (compared to only {25%} of girls initially)"

  const content = [
    {
      id : "Goal",
      header: "Our Mission",
      text: "Teach4Speech provides a program geared at providing elementary and middle school students from low-income and underrepresented backgrounds with speech and communication skills. In equipping students with the tools to find their voice, build confidence, and advocate for themselves, we hope to inspire the next generation of leaders, and open opportunities in a community that does not have access to this.",
      link: "/ourmission",
    },
    {
      id: "Initial Confidence Level Graph",
      header: "Learn More About The Problem",
      text: "Before the Teach4Speech program, students reported an average confidence score of 3 for public speaking on a 1-5 scale. This was notably lower than students’ confidence in small groups and speaking with adults. This disparity in low public speaking confidence in young students motivates our mission behind the Teach4Speech curriculum.",
      link: "",
      image: InitialProblem,
    },
    {
      id: "Initial Confidence Level Graph By Gender",
      header: " ",
      text: "Girls showed significantly lower average confidence in public speaking and small group discussions compared to boys before Teach4Speech. We hope to bridge these gender disparities in Teach4Speech and promote all groups of students, including girls and students of underrepresented backgrounds, to develop their confidence, speech, and communication skills.",
      link: "",
      image: ProblemGender,
    },
    {
      id: "Founder",
      header: "What is Teach4Speech? - A Message From Our Founder ",
      text: "Teach4Speech is an organization that aims to bolster speech and communication skills in underrepresented elementary school students. While tutoring at local schools in Goleta, I saw firsthand how few of the students envisioned themselves in higher education, and how even fewer possessed the ability to advocate for themselves in the current education system. Many of the students were failing middle school and unable to advance to high school because they could not self-advocate to their teachers to meet graduation requirements. Much of the richness in my education came from the skillsets I acquired through speech and debate. With this in mind, I developed a curriculum that would build confidence in and inspire the next generation of leaders.",
      link: "/message",
      quoted: "- Riya Nilkant, Founder and Executive Director"
    },
    {
      id: "ImpactMessage",
      header: "The Impact",
      text: impactText,
      link: "",
      quoted: ""
    },
  ];

  return (
    <Box className={commonClasses.ColumnCenteredContainer}>
      <Box
        className={commonClasses.ColumnCenteredContainer}
        sx={{
          background: gradient,
          paddingBottom: "20vh",
        }}
      >
        {content.map((item, index) => (
          <>
            <br id={item.id} />
            <br />
            <HeaderAndText
              key={index}
              header={item.header}
              text={item.text}
              link={item.link}
              quoted={item.quoted ? item.quoted : ""}
              impact={true}
              image={item.image}
            />
          </>
        ))}
        <br />
        <br />

        <Box className={classes.ImpactBubbleCollection}>
          {items.map((item, index) => (
            <Typography
              key={index}
              variant="caption"
              className={classes.ImpactBubbleStyling}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>

      <HeaderAndText header="The Data" text="To evaluate the impact of the Teach4Speech curriculum on our students, we distributed surveys at the start and end of the Teach4Speech program. We quantified confidence in public speaking, speaking in small groups, and speaking to adults, on a 1 to 5 scale (with 1 being hard and 5 being easy), along with their interest in learning. The graphs below depict our findings after only one week of Teach4Speech lessons." link="" impact/>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center", gap:"2.5vw", padding:"2.5vw" }}>
        <img
          src={GenderPublicSmall}
          alt="Confidence Levels by Gender"
          style={{ 
            maxWidth: "600px", 
            minWidth: "270px",
            border: "1px solid black",
            padding: "16px",
            borderRadius: "16px",
            width: "clamp(200px, 80%, 800px)",
          }}
        />
      <ImpactText text="Confidence in speaking increased across gender after just one week of Teach4Speech lessons.  Confidence in small group discussion for girls increased by 22%." />
       
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap-reverse", alignItems:"center", justifyContent:"center", gap:"2.5vw", padding:"2.5vw" }}>
        <ImpactText text=" After just one week of the program, students of Hispanic backgrounds reported a 16% increase in confidence for speaking in small groups. In public speaking, confidence increased by 8% and speaking to adults increased by 7%."/>
        <img
          src={ConfHispanic}
          alt="Confidence Levels of Hispanic Students"
          style={{ 
            maxWidth: "600px", 
            minWidth: "270px",
            border: "1px solid black",
            padding: "16px",
            borderRadius: "16px",
            width: "clamp(200px, 80%, 800px)",
          }}
        />
      </Box>
      <HeaderAndText header="" text="" link="/data"/>
      
    </Box>
  );
}

export default About;
