import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SecondPage, SignIn } from '../pages';

const Routes: FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/second" component={SecondPage} />
  </Switch>
);

export default Routes;
