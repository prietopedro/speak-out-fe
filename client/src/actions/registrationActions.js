import axios from 'axios';
axios.defaults.withCredentials = true

export const FAMILY_START = 'FAMILY_START';
export const FAMILY_SUCCESS = 'FAMILY_SUCCESS';
export const FAMILY_FAILURE = 'FAMILY_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const RLOGIN_START = 'RLOGIN_START';
export const RLOGIN_SUCCESS = 'RLOGIN_SUCCESS';
export const RLOGIN_FAILURE = 'RLOGIN_FAILURE';

export const RLOGGEDIN_START = 'RLOGGEDIN_START';
export const RLOGGEDIN_SUCCESS = 'RLOGGEDIN_SUCCESS';
export const RLOGGEDIN_FAILURE = 'RLOGGEDIN_FAILURE';

export const register = (user, family, history) => {
    console.log('register', user)
    console.log('family 1',family)
    return dispatch => {
    dispatch( {type: REGISTER_START} );
    axios
    .post('https://speak-out-be-staging.herokuapp.com/login', {"username": "parent1", "password": "password"})
    .then(res => {
        dispatch({ type: RLOGIN_SUCCESS, payload: res.data })
        console.log('RLOGIN SUCCESS: ', res)
        console.log('RLOGIN user: ', user)
        axios 
        .get('https://speak-out-be-staging.herokuapp.com/user', {"username": "parent1", "password": "password"})
        .then(resu => {
          dispatch({ type: RLOGGEDIN_SUCCESS, payload: resu.data })
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
              history.push('/dashboard')
              return null;
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
          dispatch({ type: RLOGGEDIN_FAILURE, payload: 'Error' })
             })  
         })  
         .catch(err => {
          console.log('ERROR', err)
          dispatch({ type: RLOGIN_FAILURE, payload: 'Error' })
             })  
        }
      }
