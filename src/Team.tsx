import React from 'react';
import { Typography, Container, Box, Avatar } from '@mui/material';
import { grey } from '@mui/material/colors';
import Tilt from 'react-parallax-tilt';

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
            <ProfileCard name="Luis" description="A passionate software engineer who developed this website!" avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" />
            <ProfileCard name="Luis" description="A passionate software engineer who developed this website!" avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" />
            <ProfileCard name="Luis" description="A passionate software engineer who developed this website!" avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" />
            <ProfileCard name="Luis" description="A passionate software engineer who developed this website!" avatarUrl="https://tr.rbxcdn.com/d5a7a6b9ac9fe4b94c6d8a82476d6a1f/420/420/Hat/Png" />

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