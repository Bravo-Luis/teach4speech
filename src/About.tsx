import { Box, Container, Typography, Paper } from '@mui/material';

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



            <Typography  variant="h2" fontWeight={'bold'} gutterBottom marginTop={"5vh"}>
                Our Goal
            </Typography>

  

            <Typography variant='body1'>
            Teach4Speech is a program geared at providing elementary and middle school students from low-income and underrepresented backgrounds with speech and communication skills. In equipping students with the tools to find their voice, build confidence, and advocate for themselves, we hope to inspire the next generation of leaders, and open opportunities in a community that does not have access to this. 
The first aspect of this program involves implementing this public speaking curriculum in elementary and middle schools, individualized by grade level. This incluces a children’s book that demonstrates diversity, equity, and inclusion, which is greatly lacking from the literature. The second aspect of this program includes a teacher-training model that allows easy classroom integration in an effort to increase accessiblity. This would involve a video supplemented curriculum that demonstrates how each lesson should be communicated. In order make these lessons accessible to the community, especially for students who have barriers to learning and education, the third aspect of the curriculum involves multiple web based applications of speech and debate games that our team has developed. 


            </Typography>


            <Typography  variant="h2" fontWeight={'bold'} gutterBottom>
                Message from the Founder
            </Typography>

  

            <Typography variant='body1'>
            Teach4Speech is an organization that aims to bolster speech and communication skills in underrepresented elementary school students. While tutoring at local schools in Goleta, I saw firsthand how few of the students envisioned themselves in higher education, and how even fewer possessed the ability to advocate for themselves in the current education system. Many of the students were failing middle school and unable to advance to high school because they could not self-advocate to their teachers to meet graduation requirements. Unfortunately, classrooms and after-school programs did little to address this.
 Much of the richness in my education came from the skillsets I acquired through speech and debate. With this in mind, I developed a curriculum that would build confidence in and inspire the next generation of leaders. The program takes the form of a 10-week series of speech and debate games, which are specifically tailored to pique the interest of elementary school students. By the end of the program, students can give speeches at the front of the room with limited preparation, a skill that I believe is crucial in the empowerment of the next generation. 
In each school we have implemented Teach4Speech workshops in Santa Barbara, there was a measurable increase in the elementary students’ willingness to come to the front of the room and voice their opinions. Their improvement motivated me to further develop and expand this initiative. I aim to make the program accessible to more communities, and create resources to meet specific student communication needs. 


            </Typography>
            <Typography variant='body1' sx={{
            }}>

- Riya Nilkant, Founder and Executive Director
            </Typography>
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

            
        </Container>
    );
}



export default About;
