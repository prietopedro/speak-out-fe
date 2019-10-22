import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { login } from '../actions';


const LoginPage = (props) => {

const [login, setLogin] = useState({
    username: '',
    password: ''
})
console.log(login.username)
console.log(login.password)


const onChangeHandler = e => {
setLogin({ 
  ...login,  //username undefined without spread in state
[e.target.name]: e.target.value })    
}

const handleSubmit = e => {
    e.preventDefault();
    props.login(props.history, login)
    setLogin({ username: '', password: '' })
}

return(
    <>
        <h2>Login</h2>
         <form onSubmit={handleSubmit}>
             <input 
                 name='username' 
                 value={login.username}
                 onChange={onChangeHandler} 
                 placeholder='username'
             />
              <input 
                 name='password' 
                 value={login.password}
                 onChange={onChangeHandler} 
                 placeholder='password'
                 type='password'
             />
             <button>Login</button>
        </form>
        <Link to='/studenttable'>Student</Link>
    </>
)}


const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      isLoggedin: state.loginReducer.isLoggedin,
    };
  };

export default withRouter(
    connect(
      mapStateToProps,
      { login }
  )(LoginPage)
  )

// export default LoginPage;