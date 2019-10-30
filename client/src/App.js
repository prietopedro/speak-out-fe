import React from 'react';
import Container from './Container';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft)


function App() {
  
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;

