import React, { useState } from 'react';
import { Typography, Grid, TextField, Button, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import './SocialSection.css';

type SocialSectionProps = {
  // You can add specific props if needed
};

const SocialSection: React.FC<SocialSectionProps> = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log(email); // For demonstration
    setEmail(''); // Reset the input field after submission
  };

  return (
    <div className='contact-section'>
      <Typography variant="h4" gutterBottom>
        Connect with Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Link href="#" color="inherit">
            <EmailIcon /> Email
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">
            <InstagramIcon /> Instagram
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">
            <FacebookIcon /> Facebook
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">
            <TwitterIcon /> Twitter
          </Link>
        </Grid>
      </Grid>
    <br />
    Stuff About the team...
    </div>
  );
};

export default SocialSection;
