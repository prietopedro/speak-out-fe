import React, { useState, useEffect } from 'react';
import NavBar from './header/NavBar';

function LandingPage() {
  const [navigation, setNavigation] = useState('');
  const [selected, setSelected] = useState(false);
  const [textDecoration, setTextDecoration] = useState('none');
  const [textDecorationColor, setTextDecorationColor] = useState('transparent');

  return (
    <div>
      <NavBar setNavigation={setNavigation} selected={selected} setSelected={setSelected} textDecoration={textDecoration} textDecorationColor={textDecorationColor} />
    </div>
  )
}

export default LandingPage;