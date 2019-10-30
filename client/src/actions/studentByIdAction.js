import axios from 'axios';

export const FETCH_STUDENTBYID_START = 'FETCH_STUDENTBYID_START';
export const FETCH_STUDENTBYID_SUCCESS = 'FETCH_STUDENTBYID_SUCCESS';
export const FETCH_STUDENTBYID_FAILURE = 'FETCH_STUDENTBYID_FAILURE';

export const getStudentById = id => dispatch => {
    dispatch({ type: FETCH_STUDENTBYID_START })
    axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=student&where=student_id=${id}`)
    .then(res => {
        console.log('getById', res.data.tableData[0])
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