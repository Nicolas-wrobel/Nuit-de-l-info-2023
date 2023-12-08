import React, { useState } from 'react';
import VerticalStepper from '../components/VerticalStepper';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import IconButton from '@mui/material/IconButton';
import '../assets/styles/homePage.css';

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const scrollToTop = () => {
    setActiveStep(0);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home-page">
      <VerticalStepper activeStep={activeStep} setActiveStep={setActiveStep} />
      <IconButton className="scroll-to-top" onClick={scrollToTop}>
        <ArrowUpwardIcon />
      </IconButton>
    </div>
  );
};

export default HomePage;