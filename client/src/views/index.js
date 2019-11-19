import React, { useEffect } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import AdminDashboard from './adminDashboard/components/index';
import ParentDashboard from './parentDashboard/components/index';
import StaffDashboard from './staffDashboard/components/index';

function Index(props) {
  //three user types
  //admin --> username: admin, password: password
  //parent --> usernmae: parent, password: password
  //staff --> username: staff, password: password
  {if (props.user.user_type === 'admin') {
      return (
        <AdminDashboard />
      )
  } else if (props.user.user_type === 'parent') {
      return (
        <ParentDashboard />
      )
  } else if (props.user.user_type === 'staff') {
      return (
        <StaffDashboard />
      )
    } 
  }
}

const mapStateToProps = state => {
  return {
    user: state.authenticationReducer.user,
    logInIsLoading: state.authenticationReducer.logIn.isLoading
  };
};

export default withRouter(connect(
  mapStateToProps,
  {}
)(Index));