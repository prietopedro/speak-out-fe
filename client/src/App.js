import React from 'react';
import Container from './Container';
import NavBar from './components/header/NavBar';
import SideBar from './components/sidebar/SideBar'

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

