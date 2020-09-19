import React, { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router";
import { useSelector } from "react-redux";

import { isAuthenticatedSelector } from "services/auth/selectors";

export const PrivateRoute: FC<RouteProps> = (props) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;
};
