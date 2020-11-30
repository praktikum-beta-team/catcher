import React, { ComponentType } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from "react-hot-loader/root";

import { ROUTES } from "app/constants/routes";
import { Signin, Signup, Settings, Leaderboard, NotFound, GameScreen } from "app/views";
import { PrivateRoute, ErrorBoundary, Logout, OAuth } from "app/components";

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
  { path: ROUTES.OAUTH, Component: OAuth },
];

export const App = hot(() => (
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
));
