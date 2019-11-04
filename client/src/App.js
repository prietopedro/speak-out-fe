import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Routes from './routes/Routes'
import { loggedIn } from './actions/authenticationActions';
import { withRouter } from "react-router";
import axios from 'axios';
import { connect } from 'react-redux';

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

