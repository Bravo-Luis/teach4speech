import  { useState } from 'react';
import { Typography, Grid, TextField, Button, Link } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import './SocialSection.css';

const SocialSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    console.log(email);
    setEmail(''); 
  };

  return (
    <div className='contact-section'>
      <Typography 
        sx={{
          color: 'purple',
          fontWeight: 'bold',
          WebkitTextStroke: '0.5px black',
          fontSize: 'clamp(1.5rem, 3vw, 3rem)',
          textAlign: 'center',
        }}
        variant="h4" gutterBottom>
        Connect With Us!
      </Typography>
      <Grid container spacing={2} justifyContent="center" className='social-media-links'>
        <Grid item>
          <Link href="https://www.facebook.com/" target="_blank" >
            <FacebookIcon sx={{fontSize:"clamp(60px, 10vw, 80px)", color:"#316FF6"}} />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://www.instagram.com/" target="_blank" >
            <InstagramIcon sx={{fontSize:"clamp(60px, 10vw, 80px)", color:" #d62976 "}} />
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://twitter.com/" target="_blank">
            <TwitterIcon sx={{fontSize:"clamp(60px, 10vw, 80px )", color:"#00acee"}} />
          </Link>
        </Grid>
      </Grid>
      <hr style={{ width: '50%', margin: '20px auto' }} />
      {/* <form onSubmit={handleSubmit} style={{width:"clamp(300px, 80vw, 600px)"}}>
        <TextField 
          label="Name" 
          variant="filled" 
          fullWidth 
          margin="normal"
          sx={{
            backgroundColor:"white", 
            borderRadius:"0.25rem"
          }}
          required 
        />
        <TextField 
          label="Email" 
          variant='filled'
          fullWidth 
          margin="normal"
          type="email"
          sx={{
            backgroundColor:"white", 
            borderRadius:"0.25rem"
          }}
          required 
        />
        <TextField 
          label="Message" 
          variant="filled" 
          fullWidth 
          margin="normal"
          multiline
          rows={4}
          sx={{
            backgroundColor:"white", 
            borderRadius:"0.25rem"
          }}
          required 
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          style={{ marginTop: '1rem' }}>
          Send
        </Button>
      </form> */}
    </div>
  );
};

export default SocialSection;
