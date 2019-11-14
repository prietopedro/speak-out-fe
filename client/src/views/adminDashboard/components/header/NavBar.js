import React, { useState } from 'react';
import Logo from '../../../../assets/Logo.png';
import './navbar.scss';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { logOut } from '../../../../actions/authenticationActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function NavBar(props) {
  const [display, setDisplay] = useState('none');

  const logout = () => {
    props.logOut(props.history);
  }

  const pushToHome = () => {
    props.history.push('/');
  }

  const displayDropdown = () => {
    if (display === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  }

  const pushToLanding = () => {
    props.history.push('/');
  }

  const handleBlur = (e) => {
    console.log('on blur')
    setDisplay('none');
  }

  return (
    <div className="nav-admin">
      <div className="navbar-left">
        <a onClick={pushToHome} className="logo"><img className="logo-image" src={Logo}></img></a>
      </div>
      <div className="navbar-right">
      <div class="dropdown" onBlur={handleBlur}>
        <FontAwesomeIcon onClick={displayDropdown} icon={faUserCircle} size='lg' color='gray' style={{marginRight: '20px', width: '50px', height: '50px'}}/> 
        <div id="myDropdown" class="dropdown-content" style={{display: display}} >
          {/* <a >Link 1</a> */}
          <a onClick={pushToLanding}>Landing Page</a>
          <a onClick={logout}>Sign out</a>
        </div>
      </div>
       
        {/* <button 
        onClick={logout} 
        >Sign Out</button> */}
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
  { logOut }
)(NavBar));