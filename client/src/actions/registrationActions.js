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
    return dispatch => {
    dispatch( {type: REGISTER_START} );
    user.user_type='parent'
    axios
    .post('https://speak-out-be-staging.herokuapp.com/register', user)
    .then(resul => {
      dispatch({ type: REGISTER_SUCCESS, payload: resul.data })
      axios 
        .get('https://speak-out-be-staging.herokuapp.com/api/?table=users&where=username='+user.username)
        .then(resu => {
          dispatch({ type: RLOGGEDIN_SUCCESS, payload: resu.data })
          family.user_id=resu.data.tableData[0].user_id
          user.password=resu.data.tableData[0].password
          console.log('family',family)
          console.log('user',user)
          console.log('resu',resu.data.tableData)
          axios
            .put('https://speak-out-be-staging.herokuapp.com/?table=users&where=user_id='+family.user_id, user)
            .then(res => {
              dispatch({ type: RLOGIN_SUCCESS, payload: res.data })
              history.push('/dashboard')
              axios
              .post('https://speak-out-be-staging.herokuapp.com/api/?table=family', family)
              .then(result => {
                dispatch({ type: FAMILY_SUCCESS, payload: result.data })
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
              dispatch({ type: RLOGIN_FAILURE, payload: 'Error' })
                })  
              })
        .catch(err => {
          console.log('ERROR', err)
          dispatch({ type: RLOGGEDIN_FAILURE, payload: 'Error' })
             })  
         })  
         .catch(err => {
          console.log('ERROR', err)
          dispatch({ type: REGISTER_FAILURE, payload: 'Error' })
             })  
        }
      }
