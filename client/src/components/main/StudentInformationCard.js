import React from 'react'
import './StudentInformationCard.scss'
import StudentInformationTab from './StudentInformationTab'


const StudentInformationCard = () => {
    return (
        <div className="student-card">
            <div className="back-button">Back</div>
            <div className='student-title'>
                <h2>Student Name Goes Here</h2>
                <p>CPR: 1232374932</p>
                <p>Student ID: 1234</p>
            </div>
            <div className="student-card-tabs">
                <h4>STUDENT INFORMATION</h4>
                <h4>ENROLLMENT</h4>
                <h4>ATTENDANCE</h4>
                <h4>BILLING</h4>
            </div>
            <StudentInformationTab />
        </div>
    )
}



export default StudentInformationCard;

