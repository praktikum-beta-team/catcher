import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { createStore } from "store";
import App from "components/App/App";

const state = (window as any).__PRELOADED_STATE__;
delete (window as any).__PRELOADED_STATE__;

const store = createStore(state);

hydrate(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
