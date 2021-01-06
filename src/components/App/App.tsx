// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from "react-hot-loader";

import React, { ComponentType } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "constants/routes";
import { Signin, Signup, Settings, Leaderboard, NotFound, GameScreen } from "views";
import { PrivateRoute, ErrorBoundary, Logout, OAuth } from "components";

import "styles/main.css";

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
  { path: ROUTES.OAUTH, Component: OAuth },
];

const App = () => (
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

export default hot(module)(App);
