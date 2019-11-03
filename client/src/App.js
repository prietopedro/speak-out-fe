import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Routes from './routes/Routes'
import Dashboard from './views/Dashboard/Dashboard'

library.add(faAngleLeft)

function App() {
  
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;

