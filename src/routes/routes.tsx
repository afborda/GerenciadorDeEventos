import React from "react";
import { Switch, Route } from "react-router-dom";
import InitialLogin from "../components/initialLogin";
import Login from "../components/login";
import RegisterForm from "../components/registerForm";
import RegisterDate from "../components/registerDate";

const Routes: React.FC = () => (
  <Switch>
    <Route exact name="Login" path="/" component={InitialLogin} />
    <Route name="Login-form" exact path="/login" component={Login} />
    <Route
      name="register-form"
      exact
      path="/register-form"
      component={RegisterForm}
    />
    <Route
      name="register-form"
      exact
      path="/register-form-date"
      component={RegisterDate}
    />
    <Route name="register-form" path="*" component={InitialLogin} />
  </Switch>
);

export default Routes;
