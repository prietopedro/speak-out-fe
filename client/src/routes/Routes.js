import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { loggedIn } from "../actions/authenticationActions";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import LandingPage from "../views/landingPage/components/LandingPage";
import DashboardView from "../views";
import CourseStructure from "../views/courseStructure/CourseStructure";
import Kindergarten from "../views/courseStructure/Kindergarten";
import Primary from "../views/courseStructure/Primary";
import MiddleSecondary from "../views/courseStructure/MiddleSecondary";
import RegistrationInformation from "../views/registrationInformation/RegistrationInformation";
import AboutUs from "../views/aboutUs/AboutUs";
import ContactUs from "../views/contactUs/ContactUs";

function Routes(props) {
  useEffect(() => {
    props.loggedIn(props.history);
  }, []);

  return (
    <div>
      <Switch>
        {props.state.authenticationReducer.user.authenticated && (
          <Route exact path="/dashboard" render={() => <DashboardView />} />
        )}
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
        <Route exact path="/" render={() => <LandingPage />} />
        <Route path="/course" render={() => <CourseStructure />} />
        <Route path="/kindergarten" render={() => <Kindergarten />} />
        <Route path="/primary" render={() => <Primary />} />
        <Route path="/middle-secondary" render={() => <MiddleSecondary />} />
        <Route
          path="/registration-information"
          render={() => <RegistrationInformation />}
        />
        <Route path="/about-us" render={() => <AboutUs />} />
        <Route path="/contact-us" render={() => <ContactUs />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { loggedIn }
  )(Routes)
);
