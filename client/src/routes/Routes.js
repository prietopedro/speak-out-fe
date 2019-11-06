import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { loggedIn } from '../actions/authenticationActions';
import Login from '../authentication/Login';
import Register from '../authentication/Register';
import LandingPage from '../views/landingPage/components/LandingPage';
import DashboardView from '../views';

function Routes(props) {

  useEffect(() => {
    props.loggedIn(props.history);
  }, [])

  return (
    <div>
      <Switch>
        {props.state.authenticationReducer.user.authenticated &&
          <Route exact path='/dashboard' render={() =>
            <DashboardView />
          } />
        }
        <Route path='/login' render={() => <Login />} />
        <Route path='/register' render={() => <Register />} />
        <Route exact path="/" render={() => <LandingPage />} />
      </Switch>
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
)(Routes));