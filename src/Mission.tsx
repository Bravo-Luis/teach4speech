import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Mission(){

    const navigate = useNavigate()

    return(
        <Container maxWidth="sm" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '10vh'
          }}>
                 <Button
              startIcon={<ArrowBackIosIcon
              sx={{
                width:"clamp(12px, 2vw, 24px)",
              }}
              />}
              sx={{
                position:'absolute',
                top:'2vh',
                left:'2vw',
                color: 'black'
              }}
              onClick={()=>{
                navigate('/')
              }}
              variant='outlined'
              color='primary'
         
              >
              Back
            </Button>
        </Container>
    )
}

export default Mission;