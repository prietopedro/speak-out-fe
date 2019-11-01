import axios from 'axios';

export const FETCH_PLACEMENTTEST_START = 'FETCH_PLACEMENTTEST_START';
export const FETCH_PLACEMENTTEST_SUCCESS = 'FETCH_PLACEMENTTEST_SUCCESS';
export const FETCH_PLACEMENTTEST_FAILURE = 'FETCH_PLACEMENTTEST_FAILURE';

export const getPlecementTestById = id => dispatch => {
    dispatch({ type: FETCH_PLACEMENTTEST_START })
    axios.get(`https://speak-out-be-staging.herokuapp.com/api/?table=placementexam&where=student_id=${id}`)
        .then(res => {
            console.log('placement test action', res.data.tableData[0])
            dispatch({
                type: FETCH_PLACEMENTTEST_SUCCESS,
                payload: res.data.tableData[0]
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_PLACEMENTTEST_FAILURE,
                payload: err.data
            })
        })
}
