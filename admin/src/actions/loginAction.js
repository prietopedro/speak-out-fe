import axios from 'axios';
import { Cookies } from 'react-cookie';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (history, credentials) => dispatch => {

    dispatch({type: LOGIN_START})
    axios.post('https://speak-out-be-staging.herokuapp.com/login', credentials)
        .then(res => {
            //set cookie?
            // Cookies.set('cookie', response.data.cookie);
            console.log('login res',res)
           dispatch({type: LOGIN_SUCCESS, payload:res.data})
           history.push("/studenttable")
        }).catch(err=> {
            dispatch({ type: LOGIN_FAILURE, payload: err})
        })

};