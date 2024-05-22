import { Box, Container, Theme, Typography } from "@mui/material";
import HeaderAndText from "../../HeaderAndText";
import useGamesStyles from "./GamesStyles";
import useCommonStyles from "../../../styles/CommonStyles";
import GenderPublicSmall from "../../../assets/charts/GenderPublicSmall.png";
import ConfHispanic from "../../../assets/charts/ConfHispanic.png";
import ImpactText from "../../ImpactText";



function Games() {
	const classes = useGamesStyles();
	const commonClasses = useCommonStyles();
	const gradient = (theme: Theme) => {
	  return `linear-gradient(180deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, white)`;
	};

  
	const content = [
	  {
		id : "Game 1 Description",
		header: "About Game 1",
		text: "Teach4Speech provides a program geared at providing elementary and middle school students from low-income and underrepresented backgrounds with speech and communication skills. In equipping students with the tools to find their voice, build confidence, and advocate for themselves, we hope to inspire the next generation of leaders, and open opportunities in a community that does not have access to this.",
		link: "/ourmission",
	  },
	  {
		id: "Game 2 Description",
		header: "About Game 2",
		text: "Teach4Speech is an organization that aims to bolster speech and communication skills in underrepresented elementary school students. While tutoring at local schools in Goleta, I saw firsthand how few of the students envisioned themselves in higher education, and how even fewer possessed the ability to advocate for themselves in the current education system. Many of the students were failing middle school and unable to advance to high school because they could not self-advocate to their teachers to meet graduation requirements. Much of the richness in my education came from the skillsets I acquired through speech and debate. With this in mind, I developed a curriculum that would build confidence in and inspire the next generation of leaders.",
		link: "/message",
		quoted: "- Riya Nilkant, Founder and Executive Director"
	  }
	];
  
	return (
	  <Container>
	  <br id="Games" />
      <br />	
		<Box className={commonClasses.ColumnCenteredContainer}>
			<Box
			className={commonClasses.ColumnCenteredContainer}
			sx={{
				// background: gradient,
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
				/>
				</>
			))}
			<br />
			<br />
			</Box>
		</Box>
	  </Container>
	);
  }
  
  export default Games;