import axios from 'axios';
axios.defaults.withCredentials = true

export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const logout = history => dispatch => {

    dispatch({type: LOGOUT_START})
    axios.get('https://speak-out-be-staging.herokuapp.com/logout')
        .then(res => {
            console.log('LOGGED OUT', res)
            dispatch({type: LOGOUT_SUCCESS, payload:res.data})
            history.push('/login')
            // props.updateUser({loggedIn: false, username: undefined})
          })
          .catch(err=> {
            dispatch({ type: LOGOUT_FAILURE, payload: err})
        })

};