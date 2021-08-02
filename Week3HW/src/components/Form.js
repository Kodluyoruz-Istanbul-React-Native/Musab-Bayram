import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Alert,
  TextInput,
  Dimensions,
} from 'react-native';
import { Story } from './Story';
import {Button, Card, CardSection, Spinner} from '../ortak';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import Styles from '../Style/Styles';

const {width, height} = Dimensions.get('window');

class Form extends Component {
  render() {
    return (
      <ImageBackground style={{ backgroundColor: 'white', flex: 1 }}>
          <View>
            <Story></Story>
          </View>        
      </ImageBackground>
    );
  }
}

export default Form;
