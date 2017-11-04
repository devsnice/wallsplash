import React from "react";
import ReactDOM from "react-dom";
import { Box } from "grid-styled";
import { Provider } from "react-redux";

import Router from "./pages/router";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
