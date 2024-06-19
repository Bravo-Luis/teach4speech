import { Box } from "@mui/material";
import HeaderAndText from "../../HeaderAndText";
import useCommonStyles from "../../../styles/CommonStyles";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTube  from '@mui/icons-material/YouTube';



function Socials () {

    const commonClasses = useCommonStyles();

	// const gradient = (theme: Theme) => {
	// 	return `linear-gradient(180deg, white ,${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, white)`;
	//   };

  
	const content = [
	  {
		id : "Socials",
		header: "Want to see more from us?",
		text: "Follow us on social media to stay up to date with our latest news and events!",
	  },

	  
	];
  
	return (
	  <Box sx={{
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	  }}>
	  <br id="Socials" />
      <br />	
		<Box className={commonClasses.ColumnCenteredContainer}>
			<Box
			className={commonClasses.ColumnCenteredContainer}
			sx={{
				paddingBottom: "0vh",
			}}
			>
			{content.map((item, index) => (
				<>
				<br id={item.id} />
				<HeaderAndText
					key={index}
					header={item.header}
					text={item.text}
					impact={true}
				/>
				</>
			))}
			</Box>

            <Box sx={{
                display: "flex",
                flexDirection: "row",
                gap: "2vw",
            
            }}>
                <InstagramIcon onClick={()=>{
                    window.open('https://www.instagram.com/teach4speech_')
                }} sx={{
                    color: "#C13584",
                    fontSize: "clamp(24px, 5vw, 48px)",
                    cursor: "pointer",
                    "&:hover": {
                        color: "purple",
                        scale: "1.1"
                    }
                }} />
                <YouTube onClick={()=>{
                    window.open('https://youtube.com/@Teach4Speech')
                }} sx={{
                    color: "#FF0000",
                    fontSize: "clamp(24px, 5vw, 48px)",
                    cursor: "pointer",
                    "&:hover": {
                        color: "purple",
                        scale: "1.1"
                    }
                
                }} />
            </Box>
		</Box>

        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "10vh",
        }}> 
        
        </Box>
	  </Box>

        
    );
}

export default Socials;