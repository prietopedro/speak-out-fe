import React, { useEffect } from 'react';
import StudentInfoTab from './StudentInfoTab';

function DisplayContent({navigation, studentData, resetForm}) {

  useEffect(() => {
    console.log('DISPLAY COMPONENT')
  }, [])

  {if (navigation === "Student Information") {
    return <StudentInfoTab studentData={studentData} resetForm={resetForm}/>
  } else if (navigation === "Enrollment") {
    return <div>Enrollment</div>
  } else if (navigation === "Attandance") {
    return <div>Attandance</div>
  } else if (navigation === "Billing") {
    return <div>Billling</div>
  }
  }
}

export default DisplayContent;