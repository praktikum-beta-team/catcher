import React, { FC } from "react";
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
import { Startup } from "components/Startup";

export const App: FC = () => (
  <Startup>
    <Router>
      <Switch>
        <Route path={ROUTES.SIGNIN} exact>
          <ErrorBoundary>
            <Signin />
          </ErrorBoundary>
        </Route>
        <Route path={ROUTES.SIGNUP}>
          <ErrorBoundary>
            <Signup />
          </ErrorBoundary>
        </Route>
        <PrivateRoute path={ROUTES.SETTINGS}>
          <ErrorBoundary>
            <Settings />
          </ErrorBoundary>
        </PrivateRoute>
        <Route path={ROUTES.LEADERBOARD}>
          <ErrorBoundary>
            <Leaderboard />
          </ErrorBoundary>
        </Route>
        <Route path={ROUTES.LOGOUT}>
          <Logout />
        </Route>
        <Route path={ROUTES.NOT_FOUND}>
          <NotFound />
        </Route>
        <Redirect to={ROUTES.NOT_FOUND} />
      </Switch>
    </Router>
  </Startup>
);
