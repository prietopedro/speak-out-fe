import React, { useEffect } from 'react';
import StudentInfoTab from './StudentInfoTab';

function DisplayContent({navigation, studentData, resetForm}) {

  useEffect(() => {
    console.log('DISPLAY COMPONENT')
  }, [])

  {if (navigation === "Student Information") {
    return <StudentInfoTab studentData={studentData} resetForm={resetForm}/>
  } else if (navigation === "Courses") {
    return <div>Courses</div>
  } else if (navigation === "Progress") {
    return <div>Progress</div>
  } else if (navigation === "Billing") {
    return <div>Billling</div>
  }
  }
}

export default DisplayContent;