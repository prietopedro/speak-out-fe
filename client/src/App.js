import React from 'react';
import Container from './Container';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight)
function App() {
  
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;

