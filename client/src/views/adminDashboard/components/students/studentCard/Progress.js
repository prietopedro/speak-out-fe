import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
import AddPlacementExamForm from './AddPlacementExamForm';
import AddProgressReportForm from './AddProgressReportForm';
import PlacementExamView from './PlacementExamView';


function ProgressReports(props) {
  const [placementExamForm, setPlacementExamForm] = useState(false);
  const [progressReportForm, setProgressReportForm] = useState(false);

useEffect(() => {
  console.log('PROGRESS REPORTS: ', props)
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
    <div style={{display: 'flex', flexDirection: 'column', marginTop: '30px'}}>
      <div style={{fontSize: '20px', color: '#89878a'}}>Placement Exam</div>
      <PlacementExamView />
      {placementExamForm ? (
                <AddPlacementExamForm />
              ) : null}
      <div style={{display: 'flex', marginTop: '10px', alignContent: 'center', marginBottom: '40px'}}>
        <div><FontAwesomeIcon onClick={handleAddPlacementExam} style={{width: '20px', height: '20px', cursor: 'pointer', color: '#269FB0'}} icon={faPlusCircle} size='lg'/></div>
        <div style={{marginLeft: '5px', color: '#269FB0'}}>Add</div>
      </div>

      <div style={{fontSize: '20px', color: '#89878a'}}>Progress Reports</div>
      {progressReportForm ? (
                <AddProgressReportForm />
              ) : null}
      <div style={{display: 'flex', marginTop: '10px', alignContent: 'center', marginBottom: '40px'}}>
        <div><FontAwesomeIcon onClick={handleAddProgressReport} style={{width: '20px', height: '20px', cursor: 'pointer', color: '#269FB0'}} icon={faPlusCircle} size='lg'/></div>
        <div style={{marginLeft: '5px', color: '#269FB0'}}>Add</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      {}
  )(ProgressReports)
)