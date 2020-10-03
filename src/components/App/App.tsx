import React, { ComponentType } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "constants/routes";
import {
  PrivateRoute,
  Signin,
  Signup,
  Settings,
  Leaderboard,
  NotFound,
  Logout,
  GameScreen,
  withErrorBoundary,
  withStartup,
} from "components";

type IComponentMap = {
  path: string;
  component: ComponentType;
  isPrivate?: boolean;
  exact?: boolean;
}[];

const componentMap: IComponentMap = [
  { path: ROUTES.SIGNIN, component: Signin, exact: true },
  { path: ROUTES.SIGNUP, component: Signup },
  { path: ROUTES.SETTINGS, component: Settings, isPrivate: true },
  { path: ROUTES.GAME, component: GameScreen },
  { path: ROUTES.LOGOUT, component: Logout, isPrivate: true },
  { path: ROUTES.NOT_FOUND, component: NotFound },
  { path: ROUTES.LEADERBOARD, component: Leaderboard },
];

export const App = withStartup(() => (
  <Router>
    <Switch>
      {componentMap.map((props) => {
        const { path, component, isPrivate, ...restRouteProps } = props;
        const RouteComponent = isPrivate ? PrivateRoute : Route;

        return (
          <RouteComponent
            key={path}
            path={path}
            component={withErrorBoundary(component)}
            {...restRouteProps}
          />
        );
      })}
      <Redirect to={ROUTES.NOT_FOUND} />
    </Switch>
  </Router>
));
