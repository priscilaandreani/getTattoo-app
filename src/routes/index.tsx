import React from 'react';
import { Switch } from 'react-router-dom';
import { SignIn, SignUp } from '../pages';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import RouteWithAuth from './RouteWithAuth';

const Routes: React.FC = () => (
  <Switch>
    <RouteWithAuth exact path="/" component={SignIn} />
    <RouteWithAuth path="/signup" component={SignUp} />

    <RouteWithAuth path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
