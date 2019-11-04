import React, { useEffect, useState } from 'react';
import Main from '../../views/Dashboard/Main/Main'
import Students from '../../views/Dashboard/Students/Students'
import Courses from '../../views/Dashboard/Courses/Courses'
import Staff from '../../views/Dashboard/Staff/Staff'
import Billing from '../../views/Dashboard/Billing/Billing'

function Display({ navigation, setNavigation }) {


  useEffect(() => {
    console.log('Display navigation: ', navigation)
  })
  {if (navigation === 'main' || navigation === 'main-student') {
    return (
      <div>
        <Main navigation={navigation} setNavigation={setNavigation}/>
      </div>
    )
  } else if (navigation === 'students') {
    return (
      <div>
        <Students navigation={navigation} setNavigation={setNavigation}/>
      </div>
    )
  } else if (navigation === 'courses') {
    return (
      <div>
        <Courses navigation={navigation} setNavigation={setNavigation}/>
      </div>
    )
  } else if (navigation === 'staff') {
    return (
      <div>
        <Staff navigation={navigation} setNavigation={setNavigation}/>
      </div>
    )
  } else if (navigation === 'billing') {
    return (
      <div>
        <Billing navigation={navigation} setNavigation={setNavigation}/>
      </div>
    )
  }
}
}

export default Display;