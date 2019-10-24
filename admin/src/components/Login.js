import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Redirect, withRouter} from 'react-router-dom';
import {login} from '../actions';
import {connect} from 'react-redux';



function Login(props) {
  const [state, setState] = useState({
    username: '',
    password: ''
  })
  const [redirectTo, setRedirectTo] = useState(null);

  useEffect(() => {
    console.log('LOGIN COMPONENT redirect ', redirectTo)
    console.log('LOGIN loggedIn', props.loggedIn)
    props.login()

    if (redirectTo !== null) {
      props.history.push('/')
    }
  }, [])

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    e.target.focus()
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://speak-out-be-staging.herokuapp.com/login', state)
      .then(res => {
        console.log('RES>DATA', res)
        console.log('PROPS', props)
        props.updateUser({
          loggedIn: true,
          username: 'username'
        })
        setRedirectTo('/');
        props.history.push('/')

      })
      .catch(err => {
        console.log('ERROR', err)
      })
    setState({
      username: '',
      password: ''
    })
  }

  if (props.loggedIn) {
    return <Redirect to = '/' />
  } else {
    return ( 
      <div>
      <form onSubmit = {handleSubmit} method = "POST" >
      <fieldset>
      <label htmlFor = "email"> Email </label> 
      <input 
      style = {{marginBottom: "15px"}}
      type = "text"
      name = "username"
      placeholder = "Username"
      onChange = {handleChange}
      value = {state.username}/> 
      <label htmlFor = "password" > Password </label> 
      <input style = {{marginBottom: "15px"}}
      className = "input-class"
      type = "password"
      name = "password"
      onChange = {handleChange}
      value = {state.password} /> 
      <button type = "submit">
      Sign in
      </button> 
      </fieldset> 
      </form> 
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.loginReducer.isLoading,
    isLoggedin: state.loginReducer.isLoggedin,
  };
};

export default withRouter(
  connect(
    mapStateToProps, {
      login
    }
  )(Login)
)