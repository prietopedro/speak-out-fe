import React, {useState, useEffect} from 'react';
import Login from './components/Login.js'
import HomePage from './components/HomePage.js';
import {Route, Switch } from 'react-router-dom';
import axios from 'axios';
import {withRouter} from "react-router";
import {getUser} from './actions/userAction'
import {connect} from 'react-redux';
axios.defaults.withCredentials = true;


const Container = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState(null);

    useEffect(() => {
      console.log('APP USE EFFECT loggedIn: ')
      // getUser();

      axios
        .get('https://speak-out-be-staging.herokuapp.com/user')
        .then(res => {
          console.log('Get user response: ')
          console.log("RES DATA", res)
          if (res.data.authenticated) {
            console.log('Get User: There is a user saved in the server session: ', res.data)
            setLoggedIn(true);
            setUsername(res.data.username);
          } else {
            console.log("Get user: no user");
            setLoggedIn(false);
            setUsername(null);
            props.history.push('/login')
          }
        })
    }, [loggedIn])

    const updateUser = (user) => {
      setLoggedIn(user.loggedIn);
      setUsername(user.username);
    }

    return (
      <div className="App">
        <Switch>
        { loggedIn && 
            <Route exact path='/' render={(props) => <Home {...props} updateUser={updateUser}/> } />  
          }
        <Route  path='/login' render={(props) => <Login {...props} updateUser={updateUser} loggedIn={loggedIn}/>} />
  
        </Switch>
      </div>
    );
  }



        const mapStateToProps = state => {
          console.log(state);
          return {
            isLoading: state.userReducer.isLoading,
            isFetchingData: state.userReducer.isFetchingData,
          }
        }

        export default withRouter(
          connect(
            mapStateToProps, {
              getUser
            }
          )(Container));