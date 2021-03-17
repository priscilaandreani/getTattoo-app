import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { SignIn, SignUp } from "../pages";

const Routes: FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
