import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
import AddPlacementExamForm from './AddPlacementExamForm';
import AddProgressReportForm from './AddProgressReportForm';
import PlacementExamList from './PlacementExamList';
import ProgressReportList from './ProgressReportList';
import { getPlacementExam, getProgressReports } from '../../../../../../actions/adminDashboardActions/students/studentsActions';


function ProgressReports(props) {
  const [placementExamForm, setPlacementExamForm] = useState(false);
  const [progressReportForm, setProgressReportForm] = useState(false);

useEffect(() => {
  console.log('PROGRESS REPORTS: ', props);
  props.getPlacementExam(props.studentId);
  props.getProgressReports(props.studentId);
}, [])

const handleAddPlacementExam = () => {
  if (placementExamForm === true) {
    setPlacementExamForm(false);
  } else {
    setPlacementExamForm(true);
  }
}

const handleAddProgressReport = () => {
  if (progressReportForm === true) {
    setProgressReportForm(false);
  } else {
    setProgressReportForm(true);
  }
}
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', marginTop: '30px', width: '100%'}}>
      {/* <div style={{fontSize: '18px', color: '#89878a', textAlign: 'left'}}>Placement Exam</div> */}
      {/* {props.placementExam.length > 0 ? (
        <PlacementExamList />
      ) : null}
      
      {placementExamForm ? (
                <AddPlacementExamForm />
              ) : null}
      <div style={{display: 'flex', marginTop: '10px', alignContent: 'center', marginBottom: '40px'}}>
        <div><FontAwesomeIcon onClick={handleAddPlacementExam} style={{width: '18px', height: '18px', cursor: 'pointer', color: '#269FB0'}} icon={faPlusCircle} size='lg'/></div>
        <div style={{marginLeft: '5px', color: '#269FB0'}}>Add</div>
      </div> */}

      {/* <div style={{fontSize: '18px', color: '#89878a', textAlign: 'left'}}>Progress Reports</div> */}
      {props.progressReports.length > 0 ? (
        <ProgressReportList />
      ) : null}
     
      {progressReportForm ? (
                <AddProgressReportForm />
              ) : null}
      <div style={{display: 'flex', marginTop: '10px', alignContent: 'center', marginBottom: '40px'}}>
        <div><FontAwesomeIcon onClick={handleAddProgressReport} style={{width: '25px', height: '25px', cursor: 'pointer', color: '#bfbfbf'}} icon={faPlusCircle} size='lg'/></div>
        <div style={{marginLeft: '5px', color: '#89878A', fontSize: '16px'}}>Add</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state,
    studentId: state.studentsReducer.studentById.id,
    placementExam: state.studentsReducer.placementExam,
    placementIsLoading: state.studentsReducer.placementIsLoading,
    progressReports: state.studentsReducer.progressReports,
    progressIsLoading: state.studentsReducer.progressIsLoading
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { getPlacementExam, getProgressReports }
  )(ProgressReports)
)