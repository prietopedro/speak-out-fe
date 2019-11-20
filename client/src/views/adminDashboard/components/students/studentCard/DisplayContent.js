import React, { useEffect } from 'react';
import StudentInfoTab from './StudentInfoTab';
import StudentCourses from './StudentCourses';
import Progress from './Progress';

function DisplayContent({navigation, studentData, resetForm}) {

  useEffect(() => {
    console.log('DISPLAY COMPONENT')
  }, [])

  {if (navigation === "Student Information") {
    return <StudentInfoTab studentData={studentData} resetForm={resetForm}/>
  } else if (navigation === "Courses") {
    return <StudentCourses id={studentData.id}/>
  } else if (navigation === "Progress") {
    return <Progress />
  } 
  }
}

export default DisplayContent;