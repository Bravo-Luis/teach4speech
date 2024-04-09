import React from 'react';
import { Box, Button, Container, Typography, Avatar } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { grey} from "@mui/material/colors";

function About() {
    const navigate = useNavigate();
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent:'center',
            marginTop: '10vh',
            marginBottom:'10vh',
            gap:'2vw',
        }}>


            <Button
                startIcon={<ArrowBackIosIcon sx={{ width:"clamp(12px, 2vw, 24px)" }} />}
                sx={{ position:'absolute', top:'2vh', left:'2vw' }}
                onClick={() => navigate('/')}
                variant='outlined'
                color='primary'
            >
                Back
            </Button>

            <Typography variant="h2" fontWeight={'bold'} gutterBottom>
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
            <Typography variant="h2" fontWeight={'bold'} gutterBottom>
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
            <ProfileCard name="Luis" description="A passionate software engineer who developed this website!" avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" />
            <ProfileCard name="Luis" description="A passionate software engineer who developed this website!" avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" />
            <ProfileCard name="Luis" description="A passionate software engineer who developed this website!" avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" />
            <ProfileCard name="Luis" description="A passionate software engineer who developed this website!" avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" />

        </Container>
        <br />

        
            <Typography variant="h2" fontWeight={'bold'} gutterBottom>
                Interested in Joining?
            </Typography>
            <Typography variant="body1" fontWeight={'bold'} gutterBottom>
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
                    maxWidth: 'clamp(200px, 25vw, 400px)',
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
