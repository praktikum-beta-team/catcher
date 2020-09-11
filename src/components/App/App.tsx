import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Signin } from "components/Signin";
import { Signup } from "components/Signup";
import { Settings } from "components/Settings";
import { Leaderboard } from "components/Leaderboard";
import { ErrorBoundary } from "components/ErrorBoundary";

export const App: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <ErrorBoundary>
          <Signin />
        </ErrorBoundary>
      </Route>
      <Route exact path="/signup">
        <ErrorBoundary>
          <Signup />
        </ErrorBoundary>
      </Route>
      <Route exact path="/settings">
        <ErrorBoundary>
          <Settings />
        </ErrorBoundary>
      </Route>
      <Route exact path="/leaderboard">
        <ErrorBoundary>
          <Leaderboard />
        </ErrorBoundary>
      </Route>
    </Switch>
  </BrowserRouter>
);
