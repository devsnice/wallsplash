import React, { Component } from "react";
import { Box } from "grid-styled";

import Navigation from "../../components/layouts/Navigation/Navigation";
import Layout from "../../components/layouts/Layout/Layout";

class MainPage extends Component {
  render() {
    return (
      <Layout>
        <Navigation />

        <Box>Main route of application</Box>
      </Layout>
    );
  }
}

export default MainPage;
