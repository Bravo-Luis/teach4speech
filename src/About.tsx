import React from 'react';
import { Box, Container, Typography, Avatar } from '@mui/material';
import Tilt from 'react-parallax-tilt';
import { grey} from "@mui/material/colors";

function About() {

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent:'center',
            gap:'2vw',
            marginBottom:'20vh'
        }}>
            <div id='About'></div>


            <Typography  variant="h2" fontWeight={'bold'} gutterBottom>
                Our Goal
            </Typography>

            <img src="https://myviewboard.com/blog/wp-content/uploads/2020/08/MP0027-01-scaled.jpg" alt="classroom" style={{
                width:'75%'
            }} />

            <Typography variant='body1'>
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 
                Our Goal as an organization is to, 

            </Typography>

            <br />
            <Typography variant="h2" fontWeight={'bold'} gutterBottom sx={{
                id:'Team'
            }} >
                The Team
            </Typography>
            <div id='Team'></div>

            <Container sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent:'center',
            gap:'2vw',
        }}>
            <ProfileCard name="Luis" description="A passionate software engineer who developed this website!" avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" />
            <ProfileCard name="Luis" description="A passionate software engineer who developed this website!" avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" />
            <ProfileCard name="Luis" description="A passionate software engineer who developed this website!" avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" />
            <ProfileCard name="Luis" description="A passionate software engineer who developed this website!" avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" />

        </Container>
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

interface ProfileCardProps {
    name: string;
    description: string;
    avatarUrl: string;
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

export default About;
