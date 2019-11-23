import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faCheck } from '@fortawesome/free-solid-svg-icons';
import AddPlacementExamForm from './AddPlacementExamForm';
import AddProgressReportForm from './AddProgressReportForm';
import PlacementExamList from './PlacementExamList';
import ProgressReportList from './ProgressReportList';
import { getPlacementExam, getProgressReports, getTeacherTable, getCoursesByStudent } from '../../../../../../actions/adminDashboardActions/students/studentsActions';
import { Spin } from 'antd';

function ProgressReports(props) {
  const [progressReportForm, setProgressReportForm] = useState(false);
  const [reload, setReload] = useState(false);

useEffect(() => {
  console.log('PROGRESS REPORTS: ', props);
  // props.getPlacementExam(props.studentId);
  props.getProgressReports(props.studentId);
  props.getCoursesByStudent(props.studentId);
  props.getTeacherTable();
}, [reload])

const handleAddProgressReport = () => {
  if (progressReportForm === true) {
    setProgressReportForm(false);
  } else {
    setProgressReportForm(true);
  }
}


const handleCancelButtonOnForm = () => {
  setProgressReportForm(false);
}
  if (props.progressIsLoading) {
    return (
      <div style={{marginTop: '30px', width: '100%'}}>
        <Spin style={{marginTop: '20px'}}size="large" />
      </div>)
  } else if (props.coursesListIsLoading) {
    return <div></div>
  } else if (props.teachersTableIsLoading) {
    return <div></div>
  } else if (props.createNewProgressReportIsLoading) {
    return <div></div>
  } else {
  return (
    <div style={{display: 'flex', flexDirection: 'column', marginTop: '30px', width: '100%'}}>
      {props.progressReports.length > 0 ? (
        <ProgressReportList />
      ) : null}
     
      {progressReportForm ? 
        props.courseList.length > 0 ? 
              (
                <AddProgressReportForm handleCancelButtonOnForm={handleCancelButtonOnForm} setReload={setReload}/>
              ) : (<div style={{textAlign: 'left'}}>Student isn't enrolled.</div>)
        : null}
      <div style={{display: 'flex', marginTop: '10px', alignContent: 'center', marginBottom: '40px'}}>
        <div><FontAwesomeIcon onClick={handleAddProgressReport} style={{width: '18px', height: '18px', cursor: 'pointer', color: '#bfbfbf', marginLeft: '2px'}} icon={faPlusCircle} size='lg'/></div>
        <div style={{marginLeft: '5px', color: '#89878A', fontSize: '14px'}}>Add</div>
      </div>
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    state: state,
    studentId: state.studentsReducer.studentById.id,
    placementExam: state.studentsReducer.placementExam,
    placementIsLoading: state.studentsReducer.placementIsLoading,
    progressReports: state.studentsReducer.progressReports,
    progressIsLoading: state.studentsReducer.progressIsLoading,
    coursesListIsLoading: state.studentsReducer.coursesListIsLoading,
    teachersTableIsLoading: state.studentsReducer.teachersTableIsLoading,
    courseList: state.studentsReducer.courseList,
    createNewProgressReportIsLoading: state.studentsReducer.createNewProgressReportIsLoading,
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { getPlacementExam, getProgressReports, getTeacherTable, getCoursesByStudent }
  )(ProgressReports)
)