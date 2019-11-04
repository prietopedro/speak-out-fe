import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudentById, toggleEditComponent } from '../../../actions';
import { withRouter, Link } from 'react-router-dom';
import StudentInformation from './StudentInformation';
import { Tab, Button } from 'semantic-ui-react';
import 'antd/dist/antd.css';
import './studentCard.scss';
import './StudentInformation.scss';
import StudentHeader from './StudentHeader'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StudentCard = props => {
    useEffect(() => {
        props.getStudentById(props.studentId)
    }, [])

    const panes = [
        {
            menuItem: 'STUDENT INFORMATION',
            render: () => <Tab.Pane attached={false}><StudentInformation /></Tab.Pane>,
        },
        {
            menuItem: 'ENROLLMENT',
            render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
        },
        {
            menuItem: 'ATTENDANCE',
            render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
        },
        {
            menuItem: 'BILLING',
            render: () => <Tab.Pane attached={false}>Tab 4 Content</Tab.Pane>,
        },
    ]

    const goBack = () => {
        console.log("props", props)
        if (!props.isEditing) {
            if(props.studentView) 
            { props.setStudentView('student')}
            else if(props.mainView)
            {props.setMainView('main')}
            else if(props.courseView)
            {props.setCoursesView('courses')}
            
        } else {
            props.toggleEditComponent()
        }
    }

    return (
        <div>
            <div className="student-card">
                <div className="back-button" onClick={goBack} style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon icon='angle-left' size='lg' color='gray' /> {''}
                    Back
                    </div>
                <StudentHeader studentById={props.studentById}/>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

            </div>
        </div>

    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.studentByIdReducer.isLoading,
        studentById: state.studentByIdReducer.studentById,
        isEditing: state.studentByIdReducer.isEditting,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStudentById, toggleEditComponent }
    )(StudentCard)
)



