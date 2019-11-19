import React, { useEffect } from 'react';
import CourseInfoTab from './CourseInfoTab';
import EnrolledStudents from './EnrolledStudents';



function DisplayContent({navigation, courseData, resetForm}) {

  useEffect(() => {
    console.log('DISPLAY COMPONENT')
  }, [])

  {if (navigation === "Course Information") {
    return <CourseInfoTab courseData={courseData} resetForm={resetForm}/>
  } else if (navigation === "Enrolled Students") {
     return <EnrolledStudents />
  } 
  }
}

export default DisplayContent;