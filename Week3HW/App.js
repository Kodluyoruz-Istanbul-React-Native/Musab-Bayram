import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Platform, View, Text, StyleSheet} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import Root from './src/Root';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

export default class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDD78x4zTovWsl3Y6uwMN0NCGtFn0t0Vtc',
      authDomain: 'kodluyoruz-1db18.firebaseapp.com',
      databaseURL: 'https://kodluyoruz-1db18-default-rtdb.firebaseio.com',
      projectId: 'kodluyoruz-1db18',
      storageBucket: 'kodluyoruz-1db18.appspot.com',
      messagingSenderId: '841440159624',
      appId: '1:841440159624:web:ee2d4b2ae218fcb5147c3d',
      measurementId: 'G-SDH5QNKGN7',
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider style={styles.container} store={store}>
        <Root />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
