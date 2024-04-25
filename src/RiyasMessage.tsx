import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function RiyasMessage(){

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
            <Typography variant="h2" fontWeight={'bold'}>
              A message from the founder
            </Typography>
            <Typography variant="caption" sx={{width:'80vw', padding:'2vw'}} fontWeight={'bold'}>
            &emsp;&emsp;&emsp;&emsp; Teach4Speech is an organization that aims to bolster speech and communication skills in underrepresented elementary school students. While tutoring at local schools in Goleta, I saw firsthand how few of the students envisioned themselves in higher education, and how even fewer possessed the ability to advocate for themselves in the current education system. Many of the students were failing middle school and unable to advance to high school because they could not self-advocate to their teachers to meet graduation requirements. Unfortunately, classrooms and after-school programs did little to address this.
 <br/> &emsp;&emsp;&emsp;&emsp; Much of the richness in my education came from the skillsets I acquired through speech and debate. With this in mind, I developed a curriculum that would build confidence in and inspire the next generation of leaders. The program takes the form of a 10-week series of speech and debate games, which are specifically tailored to pique the interest of elementary school students. By the end of the program, students can give speeches at the front of the room with limited preparation, a skill that I believe is crucial in the empowerment of the next generation. 
 <br/> &emsp;&emsp;&emsp;&emsp; In each school we have implemented Teach4Speech workshops in Santa Barbara, there was a measurable increase in the elementary students’ willingness to come to the front of the room and voice their opinions. Their improvement motivated me to further develop and expand this initiative. I aim to make the program accessible to more communities, and create resources to meet specific student communication needs. 
<br />
<br/>
<Typography sx={{
  'fontStyle': 'italic',
  fontWeight:'bold',
  textAlign:'right'
}}>
- Riya Nilkant, Founder and Executive Director
</Typography>

            </Typography>
        </Container>
    )
}

export default RiyasMessage;