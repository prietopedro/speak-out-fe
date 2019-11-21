import React, { useEffect } from 'react';
import StudentInfoTab from '../studentCard/studentInformation/StudentInfoTab';
import StudentCourses from '../studentCard/courses/StudentCourses';
import Progress from '../studentCard/progress/Progress';

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