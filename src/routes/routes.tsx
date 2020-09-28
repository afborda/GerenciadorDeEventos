import React from "react";
import { Switch, Route } from "react-router-dom";
import InitialLogin from "../components/login/initialLogin";
import LoginForm from "../components/login/loginForm";
import RegisterForm from "../components/login/registerForm";
import RegisterDate from "../components/login/registerForm/registerDate";

const Routes: React.FC = () => (
  <Switch>
    <Route exact name="Login" path="/" component={InitialLogin} />
    <Route name="Login-form" exact path="/login" component={LoginForm} />
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
  </Switch>
);

export default Routes;
