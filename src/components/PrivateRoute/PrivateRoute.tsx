import React, { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router";
import { useSelector } from "react-redux";

import { authSelectors } from "services/auth";

export const PrivateRoute: FC<RouteProps> = (props) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;
};
