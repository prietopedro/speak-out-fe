import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Routes from './routes/Routes'
import Dashboard from './views/Dashboard/Dashboard'



import { logIn, logOut, loggedIn } from './actions/authenticationActions';
import Login from './authentication/Login';
import Home from './components/Home';
import { withRouter } from "react-router";
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Display from './views/Dashboard/Display';

axios.defaults.withCredentials = true
library.add(faAngleLeft)

function App(props) {
  
  return (
    <div className="App">
      <Routes />
    </div>
  );
}


const mapStateToProps = state => {
  return {
    state: state
  };
};

export default withRouter(connect(
  mapStateToProps,
  { loggedIn }
)(App));

