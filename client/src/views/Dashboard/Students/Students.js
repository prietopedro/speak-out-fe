import React, {useState} from 'react'
import StudentList from '../../../components/students/StudentList'
import StudentCard from '../../../components/students/studentCard/StudentCard'

export default function Students() {

      const [studentView, setStudentView] = useState("student")
      const [studentId, setStudentId] = useState('')

    return (
        <div>
           {studentView=== "student" ?
        <StudentList studentView= {studentView} setStudentView={setStudentView} studentId={studentId} setStudentId={setStudentId}/>
        :
        studentView === "studentInfo" ?
        <StudentCard studentId={studentId} setStudentView={setStudentView} studentView={studentView}/> : null}
        </div>
    )
}
