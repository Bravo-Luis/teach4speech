import React from 'react';
import { Typography, Container, Box, Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import Tilt from 'react-parallax-tilt';

import andres from './assets/Team_Headshots/andres.png';
import anna from './assets/Team_Headshots/anna.png';
import benicio from './assets/Team_Headshots/benicio.png';
import brandon from './assets/Team_Headshots/brandon.png';
import eric from './assets/Team_Headshots/eric.png';
import jayne from './assets/Team_Headshots/jayne.png';
import olivia from './assets/Team_Headshots/olivia.png';
import riya from './assets/Team_Headshots/riya.png';

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
                description="TBD" 
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
                avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" 
            />

            <ProfileCard 
                name="Julianna" 
                description="TBD" 
                avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" 
            />

            <ProfileCard 
                name="Anna Leith" 
                description="I’m anna, I’m a 3rd year psych and brain science major at ucsb and I am part of the t4s outreach and administration teams. In my free time I enjoy hiking, slack lining, and working with neurodiverse populations." 
                avatarUrl={anna}
            />

            <ProfileCard 
                name="Jayne Romero" 
                description="TBD" 
                avatarUrl={jayne}
            />


        </Container>
        </>
    );

}


const ProfileCard: React.FC<ProfileCardProps> = ({ name, description, avatarUrl }) => {
    return (
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2500} glareEnable={true} glareMaxOpacity={0.1} glareColor="purple" style={{

        }}>
            <Box
                sx={{
                    background: grey[900],
                    padding: '24px',

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: 'clamp(150px, 20vw, 300px)',
                    boxShadow: 3,
                }}
            >
                <Typography variant='h2' fontWeight={'bold'} gutterBottom color={'primary.medium'}>
                    {name}
                </Typography>

                <Avatar src={avatarUrl} sx={{ width: 'clamp(100px, 25vw, 250px)', height: 'clamp(100px, 25vw, 250px)' }} />
                <br />
                <Typography variant='body1' textAlign={'center'} color={'primary.light'} >
                    {description}   
                </Typography>
            </Box>
        </Tilt>
    );
};

export default Team;