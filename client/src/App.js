import React from 'react';
import Container from './Container';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'

import NavBar from './components/header/NavBar';
import SideBar from './components/sidebar/SideBar'
library.add(faAngleLeft)

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Container />
    </div>
  );
}

export default App;

