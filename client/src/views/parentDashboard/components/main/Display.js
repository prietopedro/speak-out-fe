import React from 'react';
import ParentDashboard from '../main/ParentDashboard';


function Display({ navigation }) {

  {if (navigation === 'Parent Dashboard') {
    return (
      <div>
        <ParentDashboard />
      </div>
    )
  }  
 }
}

export default Display;