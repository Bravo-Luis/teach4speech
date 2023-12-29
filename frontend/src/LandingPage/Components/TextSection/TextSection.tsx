import React from 'react';
import { Typography } from '@mui/material';
import './TextSection.css';

type TextSectionProps = {
  title: string;
  text: string;
};

function TextSection({ title, text }: TextSectionProps) {
  return (
    <div className='text-section'>
      <Typography variant="h3">{title}</Typography>
      <br />
      <Typography variant='h6'>{text}</Typography>
    </div>
  );
}

export default TextSection;
