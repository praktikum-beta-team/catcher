import React, { ComponentType, FC } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { PrivateRoute } from "components/PrivateRoute";
import { Signin } from "components/Signin";
import { Signup } from "components/Signup";
import { Settings } from "components/Settings";
import { Leaderboard } from "components/Leaderboard";
import { ErrorBoundary } from "components/ErrorBoundary";
import { NotFound } from "components/NotFound";
import { Logout } from "components/Logout";
import { ROUTES } from "constants/routes";
import { GameScreen } from "components/GameScreen";
import { withStartup } from "components/withStartup";

interface IComponentMap {
  path: string;
  Component: ComponentType;
  isPrivate?: boolean;
  exact?: boolean;
}

const componentMap: IComponentMap[] = [
  { path: ROUTES.SIGNIN, Component: Signin, exact: true },
  { path: ROUTES.SIGNUP, Component: Signup },
  { path: ROUTES.SETTINGS, Component: Settings, isPrivate: true },
  { path: ROUTES.GAME, Component: GameScreen },
  { path: ROUTES.LOGOUT, Component: Logout, isPrivate: true },
  { path: ROUTES.NOT_FOUND, Component: NotFound },
  { path: ROUTES.LEADERBOARD, Component: Leaderboard },
];

const routes = componentMap.map(({ path, Component, isPrivate, exact }, index) =>
  isPrivate ? (
    <PrivateRoute key={index} path={path} exact={exact}>
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    </PrivateRoute>
  ) : (
    <Route key={index} path={path} exact>
      <ErrorBoundary>
        <Component />
      </ErrorBoundary>
    </Route>
  )
);

export const App: FC = withStartup(() => {
  return (
    <Router>
      <Switch>
        {routes}
        <Redirect to={ROUTES.NOT_FOUND} />
      </Switch>
    </Router>
  );
});
