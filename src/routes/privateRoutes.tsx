import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthLogin } from "../hooks/useAuthLogin";
import { PrivateRouteProps } from "../model/props/IPrivateRoute";

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...otherProps
}) => {
  const { currentUser } = useAuthLogin();

  function validateUser(routeProps: any) {
    if (currentUser) window.localStorage.setItem("UserLogin", "true");
    return <Component {...routeProps} />;
  }

  return (
    <Route
      {...otherProps}
      render={(routeProps: any) =>
        currentUser ? (
          validateUser(routeProps)
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: routeProps.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
