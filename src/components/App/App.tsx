import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Signin } from "components/Signin";
import { Signup } from "components/Signup";
import { Settings } from "components/Settings";
import { Leaderboard } from "components/Leaderboard";

export const App: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/leaderboard" component={Leaderboard} />
    </Switch>
  </BrowserRouter>
);
