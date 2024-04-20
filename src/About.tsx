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

function About() {

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
                ["Overview", "Session 1", " Session 2", "Session 3", "Session 4", "Session 5", "Session 6", "Session 7", "Session 8", "Session 9", "Session 10"].map((session) => (
                    <Accordion key={session}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{session}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Details about {session}...
                        </Typography>
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
