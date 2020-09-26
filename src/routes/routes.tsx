import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/home";
import InitialLogin from "../components/login/initialLogin";
import PrivateRoute from "./privateRoutes";

const Routes: React.FC = () => (
  <Switch>
    <Route name="Login" path="/login" component={InitialLogin} />
    <PrivateRoute name="Home" exact path="/" component={Home} />
  </Switch>
);

export default Routes;
