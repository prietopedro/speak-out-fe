import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getStudentById } from '../../actions';
import { withRouter, Link } from 'react-router-dom';
import StudentInformationTab from './StudentInfomationTab';
import { Tab } from 'semantic-ui-react';
import 'antd/dist/antd.css';
import './studentCard.css';
import './StudentInformationTab.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StudentCard = props => {
    useEffect(() => {
        props.getStudentById(props.match.params.id)
    }, [])

    const panes = [
        {
            menuItem: 'STUDENT INFORMATION',
            render: () => <Tab.Pane attached={false}><StudentInformationTab /></Tab.Pane>,
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

    return (
        <div>
            <Link to='/students'>Student Table</Link>
            {/* <h1>Student Card</h1>
            <h2>{props.studentById.student_id}, {props.studentById.first_name}</h2> */}
            <div className="student-card">
                <div className="back-button">
                    <FontAwesomeIcon icon='AngleRight' size='sm'/>
                   {' '} Back
                    
                    </div>
                <div className='student-title'>
                    <h2>{props.studentById.first_name}</h2>
                    <p>CPR: {props.studentById.cpr}</p>
                    <p>Student ID: {props.studentById.id}</p>
                </div>
                {/* <div className="student-card-tabs">
                <h4>STUDENT INFORMATION</h4>
                <h4>ENROLLMENT</h4>
                <h4>ATTENDANCE</h4>
                <h4>BILLING</h4>
            </div> */}
             <Tab menu={{ secondary: true, pointing: true }} panes={panes}  />
                {/* <div class="ui pointing secondary menu">
                    <a class="active item">Tab 1</a>
                    <a class="item">Tab 2</a>
                    <a class="item">Tab 3</a>
                </div>
                <div class="ui segment active tab">Tab 1 Content</div> */}
                
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






// const TabExampleSecondaryPointing = () => (
 
// )

// export default TabExampleSecondaryPointing