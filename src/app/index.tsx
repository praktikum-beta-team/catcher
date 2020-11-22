import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "app/components/App";

import "./styles/main.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
