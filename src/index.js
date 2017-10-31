import React from "react";
import ReactDOM from "react-dom";
import { Box } from "grid-styled";

import Router from "./pages/router";

ReactDOM.render(
  <Box>
    <Router />
  </Box>,
  document.getElementById("root")
);
