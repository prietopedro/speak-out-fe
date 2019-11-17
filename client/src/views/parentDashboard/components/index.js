import React, { useState } from 'react';
import NavBar from './header/NavBar';
import Display from './main/Display';

function Index() {
const [navigation, setNavigation] = useState('Parent Dashboard');

  return (
    <div>
      <NavBar setNavigation={setNavigation}/>
      <Display navigation={navigation}/>
    </div>
  )
}

export default Index;