import React, { useRef, useEffect } from 'react';
import { Stepper, Step, StepLabel, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import '../assets/styles/homePage.css';

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Étape 1', 'Étape 2', 'Étape 3', 'Étape 4', 'Étape 5'];

  const isScrolling = useRef(false);

  const changeStep = (newStep) => {
    if (isScrolling.current) return;
  
    isScrolling.current = true;
    setActiveStep(newStep);
    window.scrollTo({
      top: newStep * window.innerHeight,
      behavior: 'smooth'
    });
  
    setTimeout(() => { isScrolling.current = false; }, 1000); // Temps de l'animation
  };
  

  const handleScroll = (event) => {
    if (isScrolling.current) return;
    event.preventDefault();
    isScrolling.current = true;
    setTimeout(() => { isScrolling.current = false; }, 1000); // Temps de l'animation
  
    const direction = event.deltaY; // Détecte la direction du défilement
    let newStep = activeStep;
  
    if (direction > 0) {
      // Défilement vers le bas
      newStep = Math.min(activeStep + 1, steps.length - 1);
    } else if (direction < 0) {
      // Défilement vers le haut
      newStep = Math.max(activeStep - 1, 0);
    }
  
    if (newStep !== activeStep) {
      setActiveStep(newStep);
      window.scrollTo({
        top: newStep * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };
  
  const handleKeyPress = (event) => {
    if (isScrolling.current) return;
    event.preventDefault();
    let newStep = activeStep;
    if (event.key === 'ArrowDown') {
      newStep = Math.min(activeStep + 1, steps.length - 1);
    } else if (event.key === 'ArrowUp') {
      newStep = Math.max(activeStep - 1, 0);
    }
  
    if (newStep !== activeStep) {
      changeStep(newStep);
    }
  };
  
  

  useEffect(() => {
    const handleWheel = (event) => handleScroll(event);

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [activeStep, steps.length]);


  return (
    <Stepper activeStep={activeStep} orientation="vertical" className="stepper">
      {steps.map((label, index) => (
        <Step key={label} className="step">
          <div className="step-navigation">
          {index > 0 && (
              <IconButton onClick={() => changeStep(index - 1)}>
                <ArrowUpwardIcon />
              </IconButton>
            )}
          </div>
          <StepLabel
            StepIconProps={{
              style: { color: activeStep >= index ? 'green' : 'grey' }
            }}
          >
            {label}
          </StepLabel>
          <div className="step-navigation">
            {index < steps.length - 1 && (
              <IconButton onClick={() => changeStep(index + 1)}>
                <ArrowDownwardIcon />
              </IconButton>
            )}
          </div>
        </Step>
      ))}
    </Stepper>
  );
}
  
export default VerticalStepper;
