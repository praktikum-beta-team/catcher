import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Signin } from "../Signin";
import { Signup } from "../Signup";
import { Settings } from "../Settings";
import { Leaderboard } from "../Leaderboard";

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
