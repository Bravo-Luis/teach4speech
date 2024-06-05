import { Box, Typography } from "@mui/material";
// import useGamesStyles from "./GamesStyles";
import { useEffect, useState } from "react";


function Games() {
	// const classes = useGamesStyles();
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	})


	// Web
	if (screenWidth > 850) {
		return (
			<Box  sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-evenly",
				gap: "clamp(10px, 5vw, 30px)",
				padding: "clamp(10px, 5vw, 30px)",
				maxWidth: "clamp(300px, 80vw, 1000px)",
			}}>
			   <Box boxShadow={5} sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-evenly",
				backgroundColor: "lightblue",
				borderRadius: "16px",
				padding: "clamp(10px, 5vw, 30px)",
			   }}>
				<Typography variant="h2" > Related Words </Typography>
				<br />
				<Typography variant="body1"> In this game students are given a topic and have a minute to think of as many words related to this topic, the students are ranked by how many words they can come up with in a fun quick thinking competition </Typography>
			   </Box>
			   <Box boxShadow={5} sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-evenly",
				backgroundColor: "lightblue",
				borderRadius: "16px",
				padding: "clamp(10px, 5vw, 30px)",
			   }}>
				<Typography variant="h2" >Guess The Topic</Typography>
				<br />
				<Typography variant="body1"> In this game students are given a word and have to create a speech where they describe this word without actually saying it, this speech is then sent to another student tries to guess what word they're describing </Typography>
			   </Box>
			</Box>
		   );

  } else {
	// Mobile
	return (
		<Box sx={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
				justifyContent: "space-evenly",
				gap: "clamp(10px, 5vw, 30px)",
				padding: "clamp(10px, 5vw, 30px)",
				maxWidth: "clamp(300px, 80vw, 1000px)",
		}}>
		   <Box boxShadow={5} sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-evenly",
				backgroundColor: "lightblue",
				borderRadius: "16px",
				padding: "clamp(10px, 5vw, 30px)",
			   }}>
				<Typography variant="h2" sx={{fontWeight:"bold"}} >Related Words</Typography>
				<br />
				<Typography variant="body1"> In this game students are given a topic and have a minute to think of as many words related to this topic, the students are ranked by how many words they can come up with in a fun quick thinking competition </Typography>
			</Box>
			<Box boxShadow={5} sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "space-evenly",
				backgroundColor: "lightblue",
				borderRadius: "16px",
				padding: "clamp(10px, 5vw, 30px)",
			   }}>
				<Typography variant="h2" sx={{fontWeight:"bold"}} >Guess The Topic</Typography>
				<br />
				<Typography variant="body1"> In this game students are given a word and have to create a speech where they describe this word without actually saying it, this speech is then sent to another student tries to guess what word they're describing </Typography>
			</Box>
		</Box>
	   );

  }
}
  export default Games;
