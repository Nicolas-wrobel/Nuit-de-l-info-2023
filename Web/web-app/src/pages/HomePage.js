import React from 'react';
import VerticalStepper from '../components/VerticalStepper';
import '../assets/styles/homePage.css';
import AnimationTitle from '../components/AnimationTitle/AnimationTitle';
import HomepageImage from '../components/Homepage/HomepageImage';

const HomePage = () => {
  return (
    <div className="home-page">
      <HomepageImage />
      <AnimationTitle />
      <VerticalStepper />
    </div>
  );
};

export default HomePage;
