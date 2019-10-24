import axios from 'axios';
axios.defaults.withCredentials = true 

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export const login = (history, credentials) => dispatch => {

    dispatch({type: LOGIN_START})
    axios.post('https://speak-out-be-staging.herokuapp.com/login', credentials)
        .then(res => {
            console.log('login res',res)
        //    props.updateUser({loggedIn: true, username: 'username'})
            dispatch({type: LOGIN_SUCCESS, payload:res.data})
        //    setRedirectTo('/');   
           history.push("/")
        }).catch(err=> {
            dispatch({ type: LOGIN_FAILURE, payload: err})
        })

};