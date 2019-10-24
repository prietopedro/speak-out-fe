import axios from 'axios';
axios.defaults.withCredentials = true

export const FETCH_API_DATA = 'FETCH_API_DATA';
export const FETCH_API_SUCCESS= 'FETCH_API_SUCCESS';
export const FETCH_API_FAILURE = 'FETCH_API_FAILURE';


export const getAPI = () => dispatch => {
    dispatch({ type: FETCH_API_DATA })
    axios
        .get('https://speak-out-be-staging.herokuapp.com/api')
        .then(res => {
            console.log('Get API response: ')
            console.log("RES DATA", res)
              dispatch({type: FETCH_API_SUCCESS, payload:res.data})
        })
        .catch(err => {
        dispatch({ type: FETCH_API_FAILURE, payload: err})
        })
    }
