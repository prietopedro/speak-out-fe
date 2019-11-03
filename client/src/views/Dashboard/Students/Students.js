import React, {useState} from 'react'
import StudentTable from '../../../components/students/StudentTable'
import StudentCard from '../../../components/students/studentCard/StudentCard'

export default function Students() {

      const [studentView, setStudentView] = useState("studentTable")
      const [studentId, setStudentId] = useState('')

    return (
        <div>
           {studentView=== "studentTable" ?
        <StudentTable studentView= {studentView} setStudentView={setStudentView} studentId={studentId} setStudentId={setStudentId}/>
        :
        studentView === "studentInfo" ?
        <StudentCard studentId={studentId} setStudentView={setStudentView}/> : null}
        </div>
    )
}
