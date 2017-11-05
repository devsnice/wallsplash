import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import { Link } from 'react-router-dom';

const NavigationLink = styled(Link)`
  font-size: 18px;
  line-height: 24px;
  margin-right: 30px;
`;

class Navigation extends Component {
  render() {
    return (
      <Flex m="40px 0" className="app-navigation">
        <NavigationLink to="/">Explore</NavigationLink>
        <NavigationLink to="/favorites">Favorites</NavigationLink>
      </Flex>
    );
  }
}

export default Navigation;
