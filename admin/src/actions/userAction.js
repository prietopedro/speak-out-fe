import axios from 'axios';
axios.defaults.withCredentials = true

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_SUCCESS= 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';


export const getUser = () => dispatch => {
    dispatch({ type: FETCH_USER_DATA })
    axios
        .get('https://speak-out-be-staging.herokuapp.com/user')
        .then(res => {
            console.log('Get user response: ')
            console.log("RES DATA", res)
            // if (res.data.authenticated) {
            //   console.log('Get User: There is a user saved in the server session: ', res.data)
            //   setLoggedIn(true);
            //   setUsername(res.data.username);
              dispatch({type: FETCH_USER_SUCCESS, payload:res.data})
        })
            // } else {
            //   console.log("Get user: no user");
            //   setLoggedIn(false);
            //   setUsername(null);
            //   props.history.push('/login')
              .catch(err => {
                dispatch({ type: FETCH_USER_FAILURE, payload: err})
              })
            }
