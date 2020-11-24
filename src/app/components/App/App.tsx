import React, { ComponentType } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "app/constants/routes";
import { Signin, Signup, Settings, Leaderboard, NotFound, GameScreen } from "app/views";
import { PrivateRoute, ErrorBoundary, Logout } from "app/components";

import "app/styles/main.css";

type IComponentMap = {
  path: string;
  Component: ComponentType;
  isPrivate?: boolean;
  exact?: boolean;
}[];

const componentMap: IComponentMap = [
  { path: ROUTES.SIGNIN, Component: Signin, exact: true },
  { path: ROUTES.SIGNUP, Component: Signup },
  { path: ROUTES.SETTINGS, Component: Settings, isPrivate: true },
  { path: ROUTES.GAME, Component: GameScreen },
  { path: ROUTES.LOGOUT, Component: Logout, isPrivate: true },
  { path: ROUTES.NOT_FOUND, Component: NotFound },
  { path: ROUTES.LEADERBOARD, Component: Leaderboard },
];

export const App = () => (
  <Switch>
    {componentMap.map((props) => {
      const { path, Component, isPrivate, ...restRouteProps } = props;
      const RouteComponent = isPrivate ? PrivateRoute : Route;

      return (
        <RouteComponent key={path} path={path} {...restRouteProps}>
          <ErrorBoundary>
            <Component />
          </ErrorBoundary>
        </RouteComponent>
      );
    })}
    <Redirect to={ROUTES.NOT_FOUND} />
  </Switch>
);