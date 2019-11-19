import axios from 'axios';
axios.defaults.withCredentials = true

export const GET_FAMILY_ID_START = 'GET_FAMILY_ID_START';
export const GET_FAMILY_ID_SUCCESS = 'GET_FAMILY_ID_SUCCESS';
export const GET_FAMILY_ID_FAILURE = 'GET_FAMILY_ID_FAILURE';

export const GET_CHILDREN_START = 'GET_CHILDREN_START';
export const GET_CHILDREN_SUCCESS = 'GET_CHILDREN_SUCCESS';
export const GET_CHILDREN_FAILURE = 'GET_CHILDREN_FAILURE';

export const getFamily = (userId) => {
  return dispatch => {
    dispatch({ type: GET_FAMILY_ID_START });
    
    axios 
      .get(`https://speak-out-be-staging.herokuapp.com/api/?table=family&where=user_id=${userId}`)
      .then(res => {
        console.log('GET FAMILY ID: ', res.data.tableData[0])
        dispatch({ type: GET_FAMILY_ID_SUCCESS, payload: res.data.tableData[0] });

        //get children
        dispatch({ type: GET_CHILDREN_START });
        axios
        .get(`https://speak-out-be-staging.herokuapp.com/api/?table=student&where=family_id=${res.data.tableData[0].id}`)
        .then(res => {
          console.log('CHILDREN HERE: ', res.data.tableData)
          dispatch({ type: GET_CHILDREN_SUCCESS, payload: res.data.tableData })
        })
        .catch(err => {
          dispatch({ type: GET_CHILDREN_FAILURE, payload: err })
        }) 
      })
      .catch(err => {
        dispatch({ type: GET_FAMILY_ID_FAILURE, payload: err })
      })  
  };
}

export const GET_PLACEMENT_INFO_START = 'GET_PLACEMENT_INFO_START';
export const GET_PLACEMENT_INFO_SUCCESS = 'GET_PLACEMENT_INFO_SUCCESS';
export const GET_PLACEMENT_INFO_FAILURE = 'GET_PLACEMENT_INFO_FAILURE';
export const GET_COURSES_START = 'GET_COURSES_START';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const GET_COURSES_FAILURE = 'GET_COURSES_FAILURE';

export const getCourseInfo = (studentId) => {
  return dispatch => {
    dispatch({ type: GET_PLACEMENT_INFO_START });
    
    axios 
      .get(`https://speak-out-be-staging.herokuapp.com/api/?table=placement_exam&where=student_id=${studentId}`)
      .then(res => {
        console.log('GET PLACEMENT INFO: ', res.data)
        dispatch({ type: GET_PLACEMENT_INFO_SUCCESS, payload: res.data.tableData });

        //get courses if placement was taken
        dispatch({ type: GET_COURSES_START });
        axios
        .get(`https://speak-out-be-staging.herokuapp.com/api/?table=course_enrollment_view&where=student_id=${studentId}`)
        .then(res => {
          console.log('COURSES HERE: ', res.data);
          dispatch({ type: GET_COURSES_SUCCESS, payload: res.data.tableData })
        })
        .catch(err => {
          dispatch({ type: GET_COURSES_FAILURE, payload: err })
        }) 
      })
      .catch(err => {
        dispatch({ type: GET_PLACEMENT_INFO_FAILURE, payload: err })
      })  
  };
}

export const ADD_NEW_STUDENT_START = 'ADD_NEW_STUDENT_START';
export const ADD_NEW_STUDENT_SUCCESS = 'ADD_NEW_STUDENT_SUCCESS';
export const ADD_NEW_STUDENT_FAILURE = 'ADD_NEW_STUDENT_FAILURE';

export const addNewStudent = (newStudent, setSuccess) => dispatch => {
  dispatch({ type: ADD_NEW_STUDENT_START })
  axios.post(`https://speak-out-be-staging.herokuapp.com/api/?table=student`, newStudent)
    .then(res => {
      setSuccess(true);
      dispatch({
          type: ADD_NEW_STUDENT_SUCCESS,
      })
    })
    .catch(err => {
      dispatch({
        type: ADD_NEW_STUDENT_FAILURE,
        payload: err.data
      }) 
    })
}

