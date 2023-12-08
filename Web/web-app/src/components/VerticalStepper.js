import React, { useRef, useEffect } from 'react';
import { Stepper, Step, StepLabel, IconButton, StepConnector } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ImageComponent from './ImageComponent';
import '../assets/styles/homePage.css';

import constatImage from '../assets/images/constat.png';
import evolutionImage from '../assets/images/evolution.png';
import causesImage from '../assets/images/causes.png';
import consequencesImage from '../assets/images/conséquences.png';
import conseilsImage from '../assets/images/conseils.png';
import solutionImage from '../assets/images/solutions.png';


const VerticalStepper = ({ activeStep, setActiveStep }) => {
  const steps = ['', '', '', '', '', ''];

  const isScrolling = useRef(false);

  const changeStep = (newStep) => {
    if (isScrolling.current) return;
  
    isScrolling.current = true;
    setActiveStep(newStep);
    const headerHeight = 1900;
    const scrollToPosition = newStep * window.innerHeight + headerHeight;
  
    window.scrollTo({
      top: scrollToPosition,
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

  const stepData = [
    { path: constatImage, description: "Constat sur le climat actuelle et son dégradement", texte: "Texte de l'image 1" },
    { path: evolutionImage, description: "Évolution sur le climat actuelle", texte: "Texte de l'image 2" },
    { path: causesImage, description: "Causes du réchauffement climatique et du dégradement du climat", texte: "Texte de l'image 3" },
    { path: consequencesImage, description: "Conséquences de son dégradement", texte: "Texte de l'image 4" },
    { path: conseilsImage, description: "Conseils pour lutter pour le climat", texte: "Texte de l'image 5" },
    { path: solutionImage, description: "Solution pour améliorer le climmat à son échelle", texte: "Texte de l'image 6" }
  ];

  return (
    <Stepper activeStep={activeStep} orientation="vertical" className="stepper">
      {steps.map((label, index) => (
        <Step key={label} className="step">
          <div className="step-navigation-left">
            <div className="step-content-left">
            {index % 2 === 0 ? (
              <ImageComponent path={stepData[index].path} description={stepData[index].description} onClick={() => {}}/>
              ) : <div className="step-text">{stepData[index].texte}</div>}
            </div>
            {index >= 0 && (
                <IconButton className='step-arrow' onClick={() => changeStep(index - 1)}>
                  <ArrowUpwardIcon />
                </IconButton>
              )}
          </div>
          <StepLabel className='step-label'
            StepIconProps={{
              style: { color: 'grey' },
              classes: { root: 'step-icon' }
            }}
          >
          </StepLabel>
          <div className="step-navigation-right">
            {index <= steps.length - 1 && (
              <IconButton className='step-arrow' onClick={() => changeStep(index + 1)}>
                <ArrowDownwardIcon />
              </IconButton>
            )}
            <div className="step-content-right">
            {index % 2 !== 0 ? (
              <ImageComponent path={stepData[index].path} description={stepData[index].description }onClick={() => {}} />
            ) : <div className="step-text">{stepData[index].texte}</div>}
            </div>
          </div>
        </Step>
      ))}
    </Stepper>
  );
}
  
export default VerticalStepper;
