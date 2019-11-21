import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPlacementExam, getProgressReports } from '../../../../../../actions/adminDashboardActions/students/studentsActions';
import ProgressReportView from './ProgressReportView';

function ProgressReportList(props) {

  return (
    <div>
     {props.progressReports.map((item, index) => {
        return <ProgressReportView report={item} key={index}/>
      })} 
    </div>
  )
}

const mapStateToProps = state => {
  return {
    progressReports: state.studentsReducer.progressReports,
    progressIsLoading: state.studentsReducer.progressIsLoading
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { getPlacementExam, getProgressReports }
  )(ProgressReportList)
)