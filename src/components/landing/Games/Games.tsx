import { Box, Container } from "@mui/material";
import HeaderAndText from "../../HeaderAndText";
// import useGamesStyles from "./GamesStyles";
import useCommonStyles from "../../../styles/CommonStyles";
import { Theme } from "@mui/system";


function Games() {
	// const classes = useGamesStyles();
	const commonClasses = useCommonStyles();
	const gradient = (theme: Theme) => {
	  return `linear-gradient(180deg, white, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, white)`;
	};

  
	const content = [
	  {
		id : "Game 1 Description Part 1",
		header: "About Game 1",
		text: "This game allows students to think on their feet and voice their thoughts coherently to communicate ideas--a common struggle amongst adults.",
		link: "",
	  },
	  {
		id : "Game 1 Description Part 2",
		header: "",
		text: "In this game, players are shown a category word prompt on the screen and under a 60 second timer are tasked to name objects/items that fit the description. Players practice their abilities to communicate new ideas in a fun atmosphere with their peers. For each word that successfully matching the category, players are awarded points. Players also have the opportunity to practice forming a speech with these words at the end of the game.",
		link: "",
		game_link: "", // ADD LINK OT GAME 1 HERE
	  },
	  {
		id: "Game 2 Description Part 1",
		header: "About Game 2",
		text: "This game provides students with the opportunities to practice giving a speech, as well as acgtive listening for their peer's speeches.",
		link: "",
		quoted: ""
	  }, 
	  {
		id: "Game 2 Description Part 2",
		header: "",
		text: "Players are shown the name of a random object on the screen and under a 60 second timer are tasked with recording a voice memo describing said item without explicitly saying its name. After recording, players are to submit their voice memos where all the recordings will be randomly distributed amongst all players. Once every player receives a random player’s voice message, they are to listen to it and guess what object the previous player is describing.",
		link: "",
		game_link: "", // ADD LINK TO GAME 2 HERE
		quoted: ""
	  }

	  
	];
  
	return (
	  <Container sx={{
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	  }}>
	  <br id="Games" />
      <br />	
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
				<HeaderAndText
					key={index}
					header={item.header}
					text={item.text}
					link={item.link}
					quoted={item.quoted ? item.quoted : ""}
					impact={true}
					game={item.game_link}
				/>
				</>
			))}
			</Box>
		</Box>
	  </Container>
	);
  }
  
  export default Games;
