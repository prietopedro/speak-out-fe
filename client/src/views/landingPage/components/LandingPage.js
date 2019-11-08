import React, { useState, useEffect } from 'react';
import NavBar from './header/NavBar';
import Header from './header/Header';
import Special from './special/Special';
import Affordability from './affordability/Affordability';
import AgeGroups from './ageGroups/AgeGroups';
import Carousel from './carousel/Carousel';
import RegistrationInformation from './registrationInformation/RegistrationInformation';

function LandingPage() {
  const [navigation, setNavigation] = useState('');
  const [selected, setSelected] = useState(false);
  const [textDecoration, setTextDecoration] = useState('none');
  const [textDecorationColor, setTextDecorationColor] = useState('transparent');

  return (
    <>
      <NavBar setNavigation={setNavigation} selected={selected} setSelected={setSelected} textDecoration={textDecoration} textDecorationColor={textDecorationColor} />
      <Header />
      <Special />
      <Affordability />
      <AgeGroups />
      <Carousel />
      <RegistrationInformation />
    </>
  )
}

export default LandingPage;