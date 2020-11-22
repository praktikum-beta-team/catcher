import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { createStore } from "app/store";
import { App } from "app/components/App";

const state = (window as any).__PRELOADED_STATE__;
delete (window as any).__PRELOADED_STATE__;

const store = createStore(state);

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
