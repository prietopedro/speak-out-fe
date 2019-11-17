import React, { useState, useEffect } from 'react';
import Logo from '../../../../assets/Logo.png';
import './navbar.scss';
import { withRouter } from "react-router";
import { resetNav } from '../../../../actions/landingPageActions/landingPageActions';
import { connect } from 'react-redux';
import { logOut } from '../../../../actions/authenticationActions';

function NavBar(props) {
  const [selected, setSelected] = useState('Parent Dashboard');

  useEffect(() => {

  }, [selected])

  const handleLogo = () => {
    props.history.push('/')
    setSelected(false);
  }

  const handleParentDashboard = () => {
    setSelected('Parent Dashboard');
    props.setNavigation('Parent Dashboard');
  }

  const logout = () => {
    props.logOut(props.history);
  }

  return (
    <div className="nav">
      <div className="navbar-left">
        <a onClick={handleLogo} className="logo"><img className="logo-image" src={Logo}></img></a>
      </div>
      <div className="navbar-right">
        <a onClick={handleParentDashboard} style={{borderBottom: `${selected === 'Parent Dashboard' && selected !== 'signin' ? '2px solid #C73642' : '2px solid transparent'}`}}>Parent Dashboard</a>
        <div onClick={logout} style={{cursor: 'pointer'}} className="button" >Sign Out</div>
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    reset: state.landingPageReducer.reset,
    loggedIn: state.authenticationReducer.user.authenticated,
    toggle: state.landingPageReducer.toggle
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { resetNav, logOut }
  )(NavBar)
)
