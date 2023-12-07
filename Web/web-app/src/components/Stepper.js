import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const VerticalStepper = () => {
  return (
    <Stepper activeStep={1} orientation="vertical">
      {[1, 2, 3, 4, 5].map((label, index) => (
        <Step key={label}>
          <StepLabel>Étape {label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default VerticalStepper;
