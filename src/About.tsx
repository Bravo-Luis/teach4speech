import { Box, Container, Typography, Paper, Button } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AdultMonroe from './assets/charts/AdultMonroe.png';
import ConfAge from './assets/charts/ConfAge.png';
import ConfHispanic from './assets/charts/ConfHispanic.png';
import GenderPublicSmall from './assets/charts/GenderPublicSmall.png';
import LearnHispanic from './assets/charts/LearnHispanic.png';
import LearnMonroe from './assets/charts/LearnMonroe.png';
import SmallAge from './assets/charts/SmallAge.png';
import SmallGender from './assets/charts/SmallGender.png';

import Team from './Team';

import overviewImage from './assets/curriculum_images/overviewImg.png';
import session1Image from './assets/curriculum_images/session1Img.png';
import session2Image from './assets/curriculum_images/session2Img.png';
import session3Image from './assets/curriculum_images/session3Img.png';
import session4Image from './assets/curriculum_images/session4Img.png';
import session5Image from './assets/curriculum_images/session5Img.png';
import session6Image from './assets/curriculum_images/session6Img.png';
import session7Image from './assets/curriculum_images/session7Img.png';
import session8Image from './assets/curriculum_images/session8Img.png';
import session9Image from './assets/curriculum_images/session9Img.png';
import session10Image from './assets/curriculum_images/session10Img.png';

function About() {

    // Moved hard-coded array of session titles to top of file.
    // Assigning each imported session file a key to be accesses by curriculum code down below.

    const sessions = ["Overview", "Session 1", " Session 2", "Session 3", "Session 4", "Session 5", "Session 6", "Session 7", "Session 8", "Session 9", "Session 10"];
    const sessionDetails: Record<typeof sessions[number], string> = {
        "Overview": overviewImage,
        "Session 1": session1Image,
        "Session 2": session2Image,
        "Session 3": session3Image,
        "Session 4": session4Image,
        "Session 5": session5Image,
        "Session 6": session6Image,
        "Session 7": session7Image,
        "Session 8": session8Image,
        "Session 9": session9Image,
        "Session 10": session10Image
    };

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent:'center',
            gap:'2vw',
            padding:'0',
            marginBottom:'20vh'
            
        }}>
            <br id='Goal'/>


            <HeaderAndText header="Mission Statement" text="Teach4Speech is a program geared at providing elementary and middle school students from low-income and underrepresented backgrounds with speech and communication skills. In equipping students with the tools to find their voice, build confidence, and advocate for themselves, we hope to inspire the next generation of leaders, and open opportunities in a community that does not have access to this." link='/ourmission' />
            <HeaderAndText header="Message From Our Founder" text="Teach4Speech is an organization that aims to bolster speech and communication skills in underrepresented elementary school students. While tutoring at local schools in Goleta, I saw firsthand how few of the students envisioned themselves in higher education, and how even fewer possessed the ability to advocate for themselves in the current education system. Many of the students were failing middle school and unable to advance to high school because they could not self-advocate to their teachers to meet graduation requirements. Unfortunately, classrooms and after-school programs did little to address this. Much of the richness in my education came from the skillsets I acquired through speech and debate. With this in mind, I developed a curriculum that would build confidence in and inspire the next generation of leaders." link='riyasmessage' />


            <br id='Impact'/>
            <Typography  variant="h2" fontWeight={'bold'} gutterBottom marginTop={"5vh"}>
                Impact and Initiatives
            </Typography>

  

            <Typography variant='body1'>
            <Container sx={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                gap:'2vw',
                justifyContent:'center'
            }}>
                <Box sx={{
                    border: '1px solid black',
                    borderRadius: '1vw',
                    padding: '1vw',
                    background: (theme) => theme.palette.primary.light
                }}>
                    <Typography variant='body1' fontWeight={'bold'} >
                        12 Schools in Santa Barbara
                    </Typography>
                </Box>

                <Box sx={{
                    border: '1px solid black',
                    borderRadius: '1vw',
                    padding: '1vw',
                    background: (theme) => theme.palette.primary.light
                }}>
                    <Typography variant='body1' fontWeight={'bold'} >
                    10 week curriculum 

                    </Typography>
                </Box>
                <Box sx={{
                    border: '1px solid black',
                    borderRadius: '1vw',
                    padding: '1vw',
                    background: (theme) => theme.palette.primary.light
                }}>
                    <Typography variant='body1' fontWeight={'bold'} >
                    Teacher training model implemented 

                    </Typography>
                </Box>

                <Box sx={{
                    border: '1px solid black',
                    borderRadius: '1vw',
                    padding: '1vw',
                    background: (theme) => theme.palette.primary.light
                }}>
                    <Typography variant='body1' fontWeight={'bold'} >
                    Web App Developed

                    </Typography>
                </Box>

                <Box sx={{
                    border: '1px solid black',
                    borderRadius: '1vw',
                    padding: '1vw',
                    background: (theme) => theme.palette.primary.light
                }}>
                    <Typography variant='body1' fontWeight={'bold'} >
                    Children's Book
                    </Typography>
                </Box>
                <br />

              
                <Typography variant='body1' fontWeight={'bold'} component={'span'}>
  After just 
  <Typography component={'span'} variant="body2" fontWeight={'bold'}  sx={{
      
  }}> 5 sessions  </Typography>
  students on average 
  <Typography component={'span'} variant='body2' fontWeight={'bold'} > tripled </Typography>
   their
   <Typography component={'span'} variant='body2' fontWeight={'bold'}> speaking times. </Typography>
  The record speaker spoke 
  <Typography component={'span'} variant='body2' fontWeight={'bold'}  sx={{

  }}> 4x the initial time. </Typography>
  By the tenth session, 
  <Typography component={'span'} variant='body2' fontWeight={'bold'} sx={{

  }}> 66% </Typography>
  of students who spoke at the front of the room had not done so during the first session, and 
  <Typography component={'span'} variant='body2' fontWeight={'bold'}  sx={{

  }}> 66% were girls </Typography>
  compared to only
  <Typography component={'span'} variant='body2' fontWeight={'bold'}  sx={{

  }}> 25% of girls </Typography>
  initially
</Typography>



                

            </Container>
            <br id='Curriculum'/>
            <br />
            <Typography variant="h2" fontWeight={'bold'} gutterBottom marginTop={"5vh"}>
                The Curriculum 
            </Typography>
            {
                sessions.map((session) => (
                     
                    // Background color TDB
                    <Accordion key={session} sx={{ backgroundColor: '' }}>  
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{session}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <img src={sessionDetails[session]}/>
                      </AccordionDetails>
                    </Accordion>
                          ))
            }

            <br />

            </Typography>

            <br id='Team'/>
            <Team />

            
        <br />

        
            <Typography variant="h2" fontWeight={'bold'} gutterBottom>
                Interested in Joining?
            </Typography>
            <div id='Interest'></div>
            <Typography variant="body1"  gutterBottom>
                Send an email telling us what youre interested in contributing.
                Send an email telling us what youre interested in contributing.
                Send an email telling us what youre interested in contributing.
                Send an email telling us what youre interested in contributing.
                Send an email telling us what youre interested in contributing.
                Send an email telling us what youre interested in contributing.
                Send an email telling us what youre interested in contributing.
                Send an email telling us what youre interested in contributing.
                Send an email telling us what youre interested in contributing.
                Send an email telling us what youre interested in contributing.
            </Typography>

            <Typography variant="h2" fontWeight={'bold'} gutterBottom>
                The Data
            </Typography>
            <div id='Data'></div>

            <Paper sx={{
    paddingTop:'1vw',
    background: 'white',
    borderRadius: '1vw',
    boxShadow: 5,
    maxHeight:'clamp(300px, 80vw, 800px)',
    padding: '2vw'

}}>
    <img src={SmallAge} alt="" style={{
        width:'clamp(300px, 80vw, 800px)',
    }}/>
</Paper>
<Paper sx={{
    paddingTop:'1vw',
    background: 'white',
    borderRadius: '1vw',
    boxShadow: 5,
    maxHeight:'clamp(300px, 80vw, 800px)',
    padding: '2vw',

}}>
    <img src={SmallGender} alt="" style={{
        width:'clamp(300px, 80vw, 800px)',
    }}/>
</Paper>
<Paper sx={{
    paddingTop:'1vw',
    background: 'white',
    borderRadius: '1vw',
    boxShadow: 5,
    maxHeight:'clamp(300px, 80vw, 800px)',
    padding: '2vw',

}}>
    <img src={AdultMonroe} alt="" style={{
        width:'clamp(300px, 80vw, 800px)',
    }}/>
</Paper>
<Paper sx={{
    paddingTop:'1vw',
    background: 'white',
    borderRadius: '1vw',
    boxShadow: 5,
    maxHeight:'clamp(300px, 80vw, 800px)',
    padding: '2vw',

}}>
    <img src={ConfAge} alt="" style={{
        width:'clamp(300px, 80vw, 800px)',
    }}/>
</Paper>
<Paper sx={{
    paddingTop:'1vw',
    background: 'white',
    borderRadius: '1vw',
    boxShadow: 5,
    maxHeight:'clamp(300px, 80vw, 800px)',
    padding: '2vw',

}}>
    <img src={ConfHispanic} alt="" style={{
        width:'clamp(300px, 80vw, 800px)',
    }}/>
</Paper>
<Paper sx={{
    paddingTop:'1vw',
    background: 'white',
    borderRadius: '1vw',
    boxShadow: 5,
    maxHeight:'clamp(300px, 70vw, 800px)',
    padding: '2vw',

}}>
    <img src={GenderPublicSmall} alt="" style={{
        width:'clamp(300px, 80vw, 800px)',
    }}/>
</Paper>
<Paper sx={{
    paddingTop:'1vw',
    background: 'white',
    borderRadius: '1vw',
    boxShadow: 5,
    maxHeight:'clamp(300px, 80vw, 800px)',
    padding: '2vw',

}}>
    <img src={LearnHispanic} alt="" style={{
        width:'clamp(300px, 80vw, 800px)',
    }}/>
</Paper>
<Paper sx={{
    paddingTop:'1vw',
    background: 'white',
    borderRadius: '1vw',
    boxShadow: 5,
    maxHeight:'clamp(300px, 80vw, 800px)',
    padding: '2vw',

}}>
    <img src={LearnMonroe} alt="" style={{
        width:'clamp(300px, 80vw, 800px)',
    }}/>
</Paper>

            
        </Container>
    );
}



function HeaderAndText({header, text, link} : {header: string, text: string, link?: string}) {
    return (
        <Box sx={{
            maxWidth: 'clamp(300px, 80vw, 1000px)',
        }} >
            <Typography  variant="h2" fontWeight={'bold'} gutterBottom marginTop={"5vh"}>
                {header}
            </Typography>

            <Typography variant='body1' >
                {text}
            </Typography>
            {
                link ? (
                <>
                <br />
                <Button href={link} variant='outlined' >
                <Typography variant='caption' color={"primary"}>
                      Learn More
                </Typography>
             </Button>
                </>
             ) : null
            }
        </Box>
    )
}


export default About;
