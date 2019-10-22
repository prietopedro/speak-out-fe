import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Cookies } from 'react-cookie';


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      {...rest}
      render={props => 
        Cookies.get('sessionId') ?
          <Component {...props} /> : <Redirect to='/login' /> 
    }/>
  )
}

export default PrivateRoute;