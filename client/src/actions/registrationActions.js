import axios from 'axios';
axios.defaults.withCredentials = true

export const FAMILY_START = 'FAMILY_START';
export const FAMILY_SUCCESS = 'FAMILY_SUCCESS';
export const FAMILY_FAILURE = 'FAMILY_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGGEDIN_START = 'LOGIN_START';
export const LOGGEDIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGGEDIN_FAILURE = 'LOGIN_FAILURE';

export const register = (user, family, history) => {
    console.log('register', user)
    console.log('family 1',family)
    return dispatch => {
    dispatch( {type: REGISTER_START} );
    axios
    .post('https://speak-out-be-staging.herokuapp.com/login', {"username": "admin", "password": "password"})
    .then(res => {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        console.log('LOGIN SUCCESS: ', res)
        console.log('LOGIN user: ', user)
        axios 
        .get('https://speak-out-be-staging.herokuapp.com/user', {"username": "admin", "password": "password"})
        .then(resu => {
          dispatch({ type: LOGGEDIN_SUCCESS, payload: resu.data })
          axios
          .post('https://speak-out-be-staging.herokuapp.com/api/?table=users', user)
          .then(resul => {
            dispatch({ type: REGISTER_SUCCESS, payload: resul.data })
            console.log('REGISTER SUCCESS: ', resul)
            family.user_id=resul.data[0].user_id
            console.log('family is',family)
            axios
            .post('https://speak-out-be-staging.herokuapp.com/api/?table=family', family)
            .then(result => {
              dispatch({ type: FAMILY_SUCCESS, payload: result.data })
              console.log('FAMILY SUCCESS: ', result)
              history.push('/dashboard');
                })
            .catch(err => {
              console.log('ERROR', err)
              dispatch({ type: FAMILY_FAILURE, payload: 'Error' })
                })  
              })
          .catch(err => {
            console.log('ERROR', err)
            dispatch({ type: REGISTER_FAILURE, payload: 'Error' })
               })  
              })  
        .catch(err => {
          console.log('ERROR', err)
          dispatch({ type: LOGGEDIN_FAILURE, payload: 'Error' })
             })  
         })  
         .catch(err => {
          console.log('ERROR', err)
          dispatch({ type: LOGIN_FAILURE, payload: 'Error' })
             })  
        }
      }
