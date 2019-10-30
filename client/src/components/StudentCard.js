import React, {useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getStudentById } from './../actions';
import { withRouter, Link } from 'react-router-dom';
import 'antd/dist/antd.css';



const StudentCard = props => {
    useEffect(() => {
        props.getStudentById(props.match.params.id)
    }, [])

    return (
        <div>
            <Link to='/students'>Student Table</Link>
            <h1>Student Card</h1>
            <h2>{props.studentById.student_id}, {props.studentById.first_name}</h2>
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