import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { logIn, logOut, loggedIn } from '../../actions/authenticationActions';
// import Login from '../../authentication/Login';
// import Home from '../../components/Home';
import { withRouter } from "react-router";

// import Panel from "../../components/main/Panel"

// import StudentTable from "../../components/tables/StudentTable"
// import StudentCard from '../../components/studentCard/StudentCard'
import Students from './Students/Students'
import Courses from './Courses/Courses'
import Main from './Main/Main'
import Staff from './Staff/Staff'
import Billing from './Billing/Billing'

import '../../App.scss';

axios.defaults.withCredentials = true

function DashboardContainer(props) {

  useEffect(() => {
    props.loggedIn(props.history);
  }, [])
  
  return (
    <div className="Container">

       {/* If active tab === Main */}
       <Main />

      {/* If active tab === students */}
      <Students />

       {/* If active tab === Courses */}
       <Courses />

       {/* If active tab === Staff */}
      <Staff />

      {/* If active tab === Billing */}
      <Billing />

     



      {/* <Switch>
        { props.state.authenticationReducer.user.authenticated && 
            <Route exact path='/' render={() => <Home /> } />  
          }
        <Route  path='/login' render={() => <Login />} />
        <Route path='/panel' render={() => <Panel />} />
        <Route path='/students/:id' render={() => <StudentCard />} />
        <Route path='/students' render={() => <StudentTable />} />
        
      </Switch> */}



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
)(DashboardContainer));