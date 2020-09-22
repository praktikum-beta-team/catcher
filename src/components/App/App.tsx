import React, { ComponentType, FC } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { PrivateRoute } from "components/PrivateRoute";
import { Signin } from "components/Signin";
import { Signup } from "components/Signup";
import { Settings } from "components/Settings";
import { Leaderboard } from "components/Leaderboard";
import { NotFound } from "components/NotFound";
import { Logout } from "components/Logout";
import { ROUTES } from "constants/routes";
import { GameScreen } from "components/GameScreen";
import { withStartup } from "components/withStartup";
import { withErrorBoundary } from "components/withErrorBoundary";

interface IComponentMap {
  path: string;
  component: ComponentType;
  isPrivate?: boolean;
  exact?: boolean;
}

const componentMap: IComponentMap[] = [
  { path: ROUTES.SIGNIN, component: Signin, exact: true },
  { path: ROUTES.SIGNUP, component: Signup },
  { path: ROUTES.SETTINGS, component: Settings, isPrivate: true },
  { path: ROUTES.GAME, component: GameScreen },
  { path: ROUTES.LOGOUT, component: Logout, isPrivate: true },
  { path: ROUTES.NOT_FOUND, component: NotFound },
  { path: ROUTES.LEADERBOARD, component: Leaderboard },
];

const routes = componentMap.map(({ path, component, isPrivate, exact }, index) => {
  return isPrivate ? (
    <PrivateRoute key={index} component={withErrorBoundary(component)} path={path} exact={exact} />
  ) : (
    <Route key={index} component={withErrorBoundary(component)} path={path} exact={exact} />
  );
});

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
