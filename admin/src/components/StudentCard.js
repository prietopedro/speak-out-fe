import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStudentById } from '../actions';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { Wrapper } from './styledComponents'

const StudentCard = (props) => {
    // props.match.params.student_id

   useEffect(() => {
       props.getStudentById(props.student_id)
   },[props.student_id])
    return (
        <>
            <div>
                <Wrapper>
                    <h4>Student ID: {props.studentById.student_id}</h4>
                    <h4>First Name: {props.studentById.first_name}</h4>
                    <h4>Additional Name: {props.studentById.additional_names}</h4>
                    <h4>registration_date: {props.studentById.registration_date}</h4>
                    <h4>Gerder: {props.studentById.gerder}</h4>
                    <h4>Birthdate: {props.studentById.birthdate}</h4>
                    <h4>School Grade: {props.studentById.school_grade}</h4>
                    <h4>School Name: {props.studentById.school_name}</h4>
                    <h4>Grade Update: {props.studentById.grade_updated}</h4>
                    <h4>Home Telephone: {props.studentById.home_telephone}</h4>
                    <h4>Mobile Telephone: {props.studentById.mobile_telephone}</h4>
                    <h4>Address: 
                        Block{props.studentById.block}
                        Road{props.studentById.road}
                        Building{props.studentById.building}
                        Flat{props.studentById.flat}
                        </h4>
                    <h4>registration_date: {props.studentById.registration_date}</h4>
                </Wrapper>
                
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        studentById: state.studentCardReducer.studentById
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStudentById }
    )(StudentCard)
)


