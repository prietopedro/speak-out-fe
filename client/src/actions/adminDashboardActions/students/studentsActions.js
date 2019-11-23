import axios from 'axios';

export const FETCH_STUDENTS_START = 'FETCH_STUDENTS_START';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';

export const getStudentTable = (setSavePrevState, newRecord) => dispatch => {
    dispatch({type: FETCH_STUDENTS_START})
    axios.get('https://speak-out-be-staging.herokuapp.com/api?table=student_view')
        .then(res => {
           setSavePrevState(newRecord);
           dispatch({type: FETCH_STUDENTS_SUCCESS, payload:res.data.tableData})
        }).catch(err=> {
            dispatch({type: FETCH_STUDENTS_FAILURE, payload: err.payload})
        });
};


export const FETCH_STUDENTBYID_START = 'FETCH_STUDENTBYID_START';
export const FETCH_STUDENTBYID_SUCCESS = 'FETCH_STUDENTBYID_SUCCESS';
export const FETCH_STUDENTBYID_FAILURE = 'FETCH_STUDENTBYID_FAILURE';

export const getStudentById = id => dispatch => {
    dispatch({ type: FETCH_STUDENTBYID_START })
    axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=student&where=id=${id}`)
    .then(res => {
        dispatch({
            type: FETCH_STUDENTBYID_SUCCESS,
            payload: res.data.tableData[0]
        })
    })
    .catch(err => {
       dispatch({
        type: FETCH_STUDENTBYID_FAILURE,
        payload: err.data
       }) 
    })
}


export const EDIT_STUDENTBYID_START = 'EDIT_STUDENTBYID_START';
export const EDIT_STUDENTBYID_SUCCESS = 'EDIT_STUDENTBYID_SUCCESS';
export const EDIT_STUDENTBYID_FAILURE = 'EDIT_STUDENTBYID_FAILURE';


export const editStudentById = (id, state) => dispatch => {
    axios.put(`https://speak-out-be-staging.herokuapp.com/api/?table=student&where=id=${id}`, state)
    .then(res => {
      dispatch({
          type: EDIT_STUDENTBYID_SUCCESS,
          payload: res.data
      })
    })
    .catch(err => {
       dispatch({
        type: EDIT_STUDENTBYID_FAILURE,
        payload: err.data
       }) 
    })
}

export const resetEdited = () => {
  return { type: 'RESET_EDITED'}
}

export const DELETE_STUDENTBYID_START = 'DELETE_STUDENTBYID_START';
export const DELETE_STUDENTBYID_SUCCESS = 'DELETE_STUDENTBYID_SUCCESS';
export const DELETE_STUDENTBYID_FAILURE = 'DELETE_STUDENTBYID_FAILURE';

export const deleteStudentById = id => dispatch => {
    dispatch({ type: DELETE_STUDENTBYID_START })
    axios.put(`https://speak-out-be-staging.herokuapp.com/api/?table=student&where=id=${id}`)
    .then(res => {
      dispatch({
          type: DELETE_STUDENTBYID_SUCCESS,
          payload: res.id
      })
    })
    .catch(err => {
       dispatch({
        type: DELETE_STUDENTBYID_FAILURE,
        payload: err.data
       }) 
    })
}

export const resetForm = () => {
  return { type: 'RESET_FORM' }
};


export const getLocationsTable = () => dispatch => {
  axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=location`)
  .then(res => {
    dispatch({
        type: 'GET_LOCATIONS_TABLE_SUCCESS',
        payload: res.data.tableData
    })
  })
  .catch(err => {
    //TODO: if it catches 401 unauthorized it means the session has expired so push to login here
 })
}

export const getPreferredContactMethodTable = () => dispatch => {
  axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=preferred_contact_type`)
  .then(res => {
    dispatch({
        type: 'GET_PREFERRED_CONTACT_METHOD_TABLE_SUCCESS',
        payload: res.data.tableData
    })
  })
  .catch(err => {
    //TODO: if it catches 401 unauthorized it means the session has expired so push to login here
 })
}

export const getSchoolGradeTable = () => dispatch => {
  axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=school_grade`)
  .then(res => {
    dispatch({
        type: 'GET_SCHOOL_GRADE_TABLE_SUCCESS',
        payload: res.data.tableData
    })
  })
  .catch(err => {
    //TODO: if it catches 401 unauthorized it means the session has expired so push to login here
  })
}

export const getBlockTable = () => dispatch => {
  axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=block`)
  .then(res => {
    dispatch({
        type: 'GET_BLOCK_TABLE_SUCCESS',
        payload: res.data.tableData
    })
  })
  .catch(err => {
    //TODO: if it catches 401 unauthorized it means the session has expired so push to login here
 })
}

export const CREATE_NEW_STUDENT_START = 'CREATE_NEW_STUDENT_START';
export const CREATE_NEW_STUDENT_SUCCESS = 'CREATE_NEW_STUDENT_SUCCESS';
export const CREATE_NEW_STUDENT_FAILURE = 'CREATE_NEW_STUDENT_FAILURE';

export const createNewStudent = (newStudent, setNewRecord, newRecord, displaySuccessMessageTimeout, setSavePrevState) => dispatch => {
  dispatch({ type: CREATE_NEW_STUDENT_START })
  axios.post(`https://speak-out-be-staging.herokuapp.com/api/?table=student`, newStudent)
  .then(res => {
    setSavePrevState(newRecord);
    setNewRecord(!newRecord);
    displaySuccessMessageTimeout();
    dispatch({
        type: CREATE_NEW_STUDENT_SUCCESS,
        // payload: res
    })
  })
  .catch(err => {
     dispatch({
      type: CREATE_NEW_STUDENT_FAILURE,
      payload: err.data
     }) 
  })
}

export const resetSuccessMessage = () => {
  return { type: 'RESET_SUCCESS_MESSAGE' }
}

export const FETCH_COURSES_BY_STUDENT_START = 'FETCH_COURSES_BY_STUDENT_START';
export const FETCH_COURSES_BY_STUDENT_SUCCESS = 'FETCH_COURSES_BY_STUDENT_SUCCESS';
export const FETCH_COURSES_BY_STUDENT_FAILURE = 'FETCH_COURSES_BY_STUDENT_FAILURE';

export const getCoursesByStudent = (id) => dispatch => {
  dispatch({type: FETCH_COURSES_BY_STUDENT_START})
  axios.get(`https://speak-out-be-staging.herokuapp.com/api?table=course_result_view&where=student_id=${id}`)
      .then(res => {
         dispatch({type: FETCH_COURSES_BY_STUDENT_SUCCESS, payload:res.data.tableData})
      }).catch(err=> {
          dispatch({type: FETCH_COURSES_BY_STUDENT_FAILURE, payload: err.payload})
      });
};

export const GET_PLACEMENT_EXAM_START = 'GET_PLACEMENT_EXAM_START';
export const GET_PLACEMENT_EXAM_SUCCESS = 'GET_PLACEMENT_EXAM_SUCCESS';
export const GET_PLACEMENT_EXAM_FAILURE = 'GET_PLACEMENT_EXAM_FAILURE';


export const getPlacementExam = (studentId) => {
  return dispatch => {
    dispatch({ type: GET_PLACEMENT_EXAM_START });
    
    axios 
      .get(`https://speak-out-be-staging.herokuapp.com/api/?table=placement_exam&where=student_id=${studentId}`)
      .then(res => {
        console.log('GET PLACEMENT EXAM: ', res.data)
        dispatch({ type: GET_PLACEMENT_EXAM_SUCCESS, payload: res.data.tableData }); 
      })
      .catch(err => {
        dispatch({ type: GET_PLACEMENT_EXAM_FAILURE, payload: err })
      })  
  };
}

export const GET_PROGRESS_REPORTS_START = 'GET_PROGRESS_REPORTS_START';
export const GET_PROGRESS_REPORTS_SUCCESS = 'GET_PROGRESS_REPORTS_SUCCESS';
export const GET_PROGRESS_REPORTS_FAILURE = 'GET_PROGRESS_REPORTS_FAILURE';


export const getProgressReports = (studentId) => {
  return dispatch => {
    dispatch({ type: GET_PROGRESS_REPORTS_START });
    
    axios 
      .get(`https://speak-out-be-staging.herokuapp.com/api/?table=progress_report&where=student_id=${studentId}`)
      .then(res => {
        console.log('GET PROGRESS REPORTS: ', res.data)
        dispatch({ type: GET_PROGRESS_REPORTS_SUCCESS, payload: res.data.tableData }); 
      })
      .catch(err => {
        dispatch({ type: GET_PROGRESS_REPORTS_FAILURE, payload: err })
      })  
  };
}

export const GET_TEACHERS_TABLE_START = 'GET_TEACHERS_TABLE_START';
export const GET_TEACHERS_TABLE_SUCCESS = 'GET_TEACHER_TABLE_SUCCESS';
export const GET_COURSE_INFO_START = 'GET_COURSE_INFO_START';
export const GET_COURSE_INFO_SUCCESS = 'GET_COURSE_INFO_SUCCESS';


export const getTeacherTable = ()  => {
  return dispatch => {
    dispatch({ type: GET_TEACHERS_TABLE_START });

  axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=staff`)
  .then(res => {
    dispatch({
        type: GET_TEACHERS_TABLE_SUCCESS,
        payload: res.data.tableData
    })
  })
  .catch(err => {
    //TODO: if it catches 401 unauthorized it means the session has expired so push to login here
  })
 }
}


export const getCourseInfo = (courseId)  => {
  return dispatch => {
    dispatch({ type: GET_COURSE_INFO_START });

    axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=course_view&where=id=${courseId}`)
    .then(res => {
      dispatch({
          type: GET_COURSE_INFO_SUCCESS,
          payload: res.data.tableData[0]
      })
    })
    .catch(err => {
      //TODO: if it catches 401 unauthorized it means the session has expired so push to login here
    })
 }
}

export const EDIT_PROGRESS_REPORT_START = 'EDIT_PROGRESS_REPORT_START';
export const EDIT_PROGRESS_REPORT_SUCCESS = 'EDIT_PROGRESS_REPORT_SUCCESS';
export const EDIT_PROGRESS_REPORT_FAILURE = 'EDIT_PROGRESS_REPORT_FAILURE';


export const editProgressReport = (id, state) => dispatch => {
    axios.put(`https://speak-out-be-staging.herokuapp.com/api/?table=progress_report&where=id=${id}`, state)
    .then(res => {
      console.log('EDIR REPORT SUCCESS: ', res.data)
      dispatch({
          type: EDIT_PROGRESS_REPORT_SUCCESS,
          payload: res.data
      })
    })
    .catch(err => {
       dispatch({
        type: EDIT_PROGRESS_REPORT_FAILURE,
        payload: err.data
       }) 
    })
}


export const CREATE_NEW_PROGRESS_REPORT_START = 'CREATE_NEW_PROGRESS_REPORT_START';
export const CREATE_NEW_PROGRESS_REPORT_SUCCESS = 'CREATE_NEW_PROGRESS_REPORT_SUCCESS';
export const CREATE_NEW_PROGRESS_REPORT_FAILURE = 'CREATE_NEW_PROGRESS_REPORT_FAILURE';

export const createNewProgressReport = (newProgressReport, setNewRecord, newRecord, displaySuccessMessageTimeout, setSavePrevState) => dispatch => {
  dispatch({ type: CREATE_NEW_PROGRESS_REPORT_START })

  axios.post(`https://speak-out-be-staging.herokuapp.com/api/?table=progress_report`, newProgressReport)
  .then(res => {
    // setSavePrevState(newRecord);
    // setNewRecord(!newRecord);
    // displaySuccessMessageTimeout();
    console.log('NEW REPORT ADDED: ', res.data)
    dispatch({
        type: CREATE_NEW_PROGRESS_REPORT_SUCCESS,
        // payload: res
    })
  })
  .catch(err => {
     dispatch({
      type: CREATE_NEW_PROGRESS_REPORT_FAILURE,
      payload: err.data
     }) 
  })
}