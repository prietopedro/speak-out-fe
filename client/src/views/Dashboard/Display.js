import React, { useEffect, useState } from 'react';
import Main from '../../views/Dashboard/Main/Main'
import Students from '../../views/Dashboard/Students/Students'
import Courses from '../../views/Dashboard/Courses/Courses'
import Staff from '../../views/Dashboard/Staff/Staff'
import Billing from '../../views/Dashboard/Billing/Billing'

function Display({ navigation }) {

  useEffect(() => {
    console.log('Display navigation: ', navigation)
  })
  {if (navigation === 'main') {
    return (
      <div>
        <Main />
      </div>
    )
  } else if (navigation === 'students') {
    return (
      <div>
        <Students />
      </div>
    )
  } else if (navigation === 'courses') {
    return (
      <div>
        <Courses />
      </div>
    )
  } else if (navigation === 'staff') {
    return (
      <div>
        <Staff />
      </div>
    )
  } else if (navigation === 'billing') {
    return (
      <div>
        <Billing />
      </div>
    )
  }
}
}

export default Display;