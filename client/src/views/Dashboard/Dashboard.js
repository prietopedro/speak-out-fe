import React from 'react';
import DashboardContainer from './DashboardContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import NavBar from '../../components/header/NavBar';
import SideBar from './SideBar'
library.add(faAngleLeft)

function Dashboard() {
  
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <DashboardContainer />
    </div>
  );
}

export default Dashboard;