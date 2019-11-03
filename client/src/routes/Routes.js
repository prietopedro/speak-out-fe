import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from '../views/Dashboard/Dashboard'
import Login from '../authentication/Login'

export default function() {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route path="/login" render={() => <Login />} />
      </Switch>
    </div>
  );
}
