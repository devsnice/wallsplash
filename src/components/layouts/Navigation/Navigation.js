import React, { Component } from "react";
import styled from "styled-components";
import { Box } from "grid-styled";

import { Link } from "react-router-dom";

const NavigationLink = styled(Link)`
  font-size: 18px;
  line-height: 24px;
`;

class Navigation extends Component {
  render() {
    return (
      <Box className="app-navigation">
        <NavigationLink to="/">Explore</NavigationLink>
      </Box>
    );
  }
}

export default Navigation;
