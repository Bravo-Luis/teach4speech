import { Box, Typography, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
// import EmailIcon from '@mui/icons-material/Email';
import  YouTube  from '@mui/icons-material/YouTube';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

function JoinUs(){
    const navigate = useNavigate();
    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10vh",
            width: "100vw",
            justifyContent: "center",
            alignContent: "center",
        }}>
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
            <Typography variant="h2" fontWeight={"bold"}>Join Us</Typography>
            <Typography variant="caption" sx={{width:"clamp(275px, 80vw, 1000px)"}} textAlign={"center"} mt={"2.5vh"}>
                Teach4Speech is always looking for new volunteers and interns to help us achieve our mission. 
                If you are interested in joining our team, please reach out to us using this contact form!
            </Typography>
            <Button sx={{color:"black", marginTop:"2.5vh"}} variant={'outlined'} onClick={()=>{
                window.open('https://forms.gle/iGcuqsF9ce7HKCqQ7')
            }} >Contact Form</Button>
            <Box sx={{
                position: "absolute",
                bottom: "10vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }} >
            <Typography variant="caption" sx={{width:"clamp(275px, 80vw, 1000px)"}} textAlign={"center"} mt={"2vh"}>
                Follow us on social media to stay up to date with our latest news and events!
            </Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                gap: "2vw",
                marginTop: "2.5vh",
            
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
                {/* <EmailIcon onClick={()=>{
                    window.open('mailto:
                }} sx={{
                    color: "#D44638",
                    fontSize: "clamp(24px, 5vw, 48px)",
                    cursor: "pointer",
                    "&:hover": {
                        color: "purple",
                        scale : "1.1"
                    }
                }}/> */}
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

        </Box>
    )
}

export default JoinUs;