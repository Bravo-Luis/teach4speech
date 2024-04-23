import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import Tilt from 'react-parallax-tilt';

import andres from './assets/Team_Headshots/andres.png';
import anna from './assets/Team_Headshots/anna.png';
import benicio from './assets/Team_Headshots/benicio.png';
import brandon from './assets/Team_Headshots/brandon.png';
import eric from './assets/Team_Headshots/eric.png';
import jayne from './assets/Team_Headshots/jayne.png';
import olivia from './assets/Team_Headshots/olivia.png';
import riya from './assets/Team_Headshots/riya.png';
import julianna from './assets/Team_Headshots/julianna.png';
import luis from './assets/Team_Headshots/luis.jpeg';
interface ProfileCardProps {
    name: string;
    description: string;
    avatarUrl: string;
}

function Team(){
    return (
        <>
        <Typography variant="h2" fontWeight={'bold'} gutterBottom marginTop={"5vh"}>
                The Team
            </Typography>
            

            <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent:'center',
            gap:'2vw',
        }}>
            <ProfileCard 
                name="Riya Nilkant" 
                description="Riya founded the Teach4Speech program creating a tailored curriculum for speaking and advocacy at local Santa Barbara elementary schools. She is a Biological Sciences major at UCSB passionate about medicine and life sciences research. In her free time, she enjoys exploring the outdoors and new coffee shops!" 
                avatarUrl={riya}
            />

            <ProfileCard 
                name="Andres Stidger" 
                description="I am a 3rd year student at UCSB and I enjoy freediving and rock climbing in my free time. I volunteer as an in-person educator for Teach4Speech, helping children foster their communication skills." 
                avatarUrl={andres} 
            />

            <ProfileCard 
                name="Olivia Candelaria" 
                description="I’m Olivia, I’m a third year Statistics and Data Science major at UCSB and I volunteer as the statistician for T4S. In my free time I like to swim, hike, and read." 
                avatarUrl={olivia} 
            />

            <ProfileCard 
                name="Benicio Rivera" 
                description="I’m Benicio a third year applied mathematics student and am a part of the curriculum team for Teach4Speech. I am passionate about teaching and working on automotives." 
                avatarUrl={benicio}
            />

            <ProfileCard 
                name="Eric Lee" 
                description="Eric is a master’s student at Stanford studying Computer Science and helps manage development initiatives for the technology team. In his free time, he loves to cook and play violin!" 
                avatarUrl={eric} 
            />

            <ProfileCard 
                name="Brandon Mercado" 
                description="Hi, I’m Brandon and I’m part of the Game Development department here at T4S! One of my favorite hobbies is going bowling because I’m pretty good at it." 
                avatarUrl={brandon}
            />

            <ProfileCard 
                name="Luis" 
                description="A passionate software engineer who developed this website!" 
                avatarUrl={luis} 
            />

            <ProfileCard 
                name="Julianna" 
                description="I'm Julianna, a first year studying Computer Science at UCSB. I am part of the Web Design and Graphic Design teams! I am passionate about learning German and AR." 
                avatarUrl={julianna}
            />

            <ProfileCard 
                name="Anna Leith" 
                description="I’m anna, I’m a 3rd year psych and brain science major at ucsb and I am part of the t4s outreach and administration teams. In my free time I enjoy hiking, slack lining, and working with neurodiverse populations." 
                avatarUrl={anna}
            />

            <ProfileCard 
                name="Jayne Romero" 
                description="Jayne is a third year Environmental Studies major at UCSB and is part of the t4s outreach and administration teams. Outside of school and outreach, she is a ballet dancer and loves to read." 
                avatarUrl={jayne}
            />


        </Container>
        </>
    );

}


const ProfileCard: React.FC<ProfileCardProps> = ({ name, description, avatarUrl }) => {
    const [showDescription, setShowDescription] = React.useState(false);

    return (
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.1} glareColor="purple" style={{
            borderRadius: '10px',
            position: 'relative', 
            overflow: 'hidden', 
        }}>
            <Box onClick={() => setShowDescription(!showDescription)}
                sx={{
                    position: 'relative',  
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 'clamp(250px, 25vw, 400px)',
                    height: 'clamp(250px, 25vw, 400px)',
                    boxShadow: 3,
                    borderRadius: '10px',
                    backgroundColor: 'black',
                    gap: '1rem',
                    cursor: 'pointer',
                    '&::before': { 
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${avatarUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        opacity: showDescription ? 0.5 : 1, 
                        transition: 'opacity 0.3s ease' 
                    }
                }}
            >
                <Typography variant='h2' fontWeight={'bold'} gutterBottom color={'white'} sx={{
                    textShadow: `-2px 2px 1px black`,
                    zIndex: 1, 
                }}>
                    {name}
                </Typography>
                {showDescription && (
                    <Typography variant='caption' color={'white'} fontWeight={'bold'} sx={{
                        textShadow: `-2px 2px 1px black`,
                        zIndex: 1, 
                        opacity: 0.95,
                        width: '100%',
                        overflow: 'auto',
                    }}>
                        {description}
                    </Typography>
                )}
            </Box>
        </Tilt>
    );
};


export default Team;