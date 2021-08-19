import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Login from './screens/Login';
import Form from './screens/Form';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Stack key="Root">
          <Scene key="Login" component={Login} hideNavBar initial />
          <Scene key="Form" component={Form} hideNavBar />
        </Stack>
      </Router>
    );
  }
}
