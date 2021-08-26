import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Login from './screens/Login';
import Home from './screens/Home';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Stack key="Root">
          <Scene key="Login" component={Login} hideNavBar />
          <Scene key="Home" component={Home} hideNavBar initial />
        </Stack>
      </Router>
    );
  }
}
