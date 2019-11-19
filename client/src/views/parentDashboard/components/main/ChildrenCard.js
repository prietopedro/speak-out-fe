import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './parentDashboard.scss';
import { getCourseInfo } from '../../../../actions/parentDashboardActions/parentDashboard/ParentDashboardActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Spin } from 'antd';

function ChildrenCard(props) {

  useEffect(() => {
    //get placement/course info
    props.getCourseInfo(props.item.id);
    console.log('CHILDREN CARD: ', props.item)
  }, [])

  if (props.getCourseInfoIsLoading) {
    return <div>Loading...</div>
  } else {
  return (
    <div className="children-card">
      <FontAwesomeIcon icon={faUserCircle} size='lg' color='gray' style={{width: '70px', height: '70px', color: '#b1afb1'}}/>
      <div style={{fontSize: '24px', fontWeight: '500', color: 'black'}}>{props.item.first_name}&nbsp;{props.item.additional_names}</div> 
      <div>{props.item.placement_test.length === 0 ? 'Pending Placement' : `Enrolled: ${props.item.courses[0].grade}`}</div>
    </div>
  )
}
}


const mapStateToProps = state => {
  return {
    getCourseInfoIsLoading: state.parentDashboardReducer.getCourseInfoIsLoading
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { getCourseInfo }
  )(ChildrenCard)
)