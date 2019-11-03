import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from '../views/Dashboard/Dashboard'

export default function() {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" render={() => <Dashboard />} />
      </Switch>
    </div>
  );
}
