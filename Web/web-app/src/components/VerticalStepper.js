import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import '../assets/styles/homePage.css';

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Étape 1', 'Étape 2', 'Étape 3', 'Étape 4', 'Étape 5'];

  return (
    <Stepper activeStep={activeStep} orientation="vertical" className="stepper">
      {steps.map((label, index) => (
        <Step key={label} className="step">
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default VerticalStepper;
