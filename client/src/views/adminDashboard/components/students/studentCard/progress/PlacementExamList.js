import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPlacementExam, getProgressReports } from '../../../../../../actions/adminDashboardActions/students/studentsActions';
import PlacementExamView from './PlacementExamView';

function PlacementExamList(props) {
console.log('LIST:', props.placementExam)
  return (
    <div>
      {props.placementExam.map((item, index) => {
        return <PlacementExamView exam={item} key={index}/>
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    placementExam: state.studentsReducer.placementExam,
    placementIsLoading: state.studentsReducer.placementIsLoading,
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { getPlacementExam, getProgressReports }
  )(PlacementExamList)
)