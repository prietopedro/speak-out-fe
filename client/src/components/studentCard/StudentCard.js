import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getStudentById } from '../../actions';
import { withRouter, Link } from 'react-router-dom';
import StudentInformationTab from './StudentInfomationTab'
import 'antd/dist/antd.css';
import './studentCard.css'
import './StudentInformationTab.css'


const StudentCard = props => {
    useEffect(() => {
        props.getStudentById(props.match.params.id)
    }, [])

    return (
        <div>
            <Link to='/students'>Student Table</Link>
            {/* <h1>Student Card</h1>
            <h2>{props.studentById.student_id}, {props.studentById.first_name}</h2> */}
            <div className="student-card">
            <div className="back-button">Back</div>
            <div className='student-title'>
                <h2>{props.studentById.first_name}</h2>
                <p>CPR: {props.studentById.cpr}</p>
                <p>Student ID: {props.studentById.student_id}</p>
            </div>
            <div className="student-card-tabs">
                <h4>STUDENT INFORMATION</h4>
                <h4>ENROLLMENT</h4>
                <h4>ATTENDANCE</h4>
                <h4>BILLING</h4>
            </div>
            <StudentInformationTab />
        </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.studentByIdReducer.isLoading,
        studentById: state.studentByIdReducer.studentById
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getStudentById }
  )(StudentCard)
  )