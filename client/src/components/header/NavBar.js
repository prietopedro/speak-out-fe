import React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { logOut, loggedIn } from '../../actions/authenticationActions.js';
import "./navbar.css"

function NavBar(props) {

  const logout = () => {
    props.logOut(props.history);
  }

  return (
    <div className="nav">
      <div className="navbar-left">
        <a className="logo">SpeakOut</a>
      </div>
      <div className="navbar-right">
        <a>Lorem</a>
        <a>Ipsum</a>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default withRouter(connect(
  mapStateToProps,
  { logOut, loggedIn }
)(NavBar));