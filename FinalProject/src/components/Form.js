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
import { Story, Flux } from './Story';
import {Button, Card, CardSection, Spinner} from '../ortak';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import Styles from '../Style/Styles';
import { ScrollView } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

class Form extends Component {
  render() {
    return (
      <ImageBackground style={{backgroundColor: 'white', flex: 1}}>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Story></Story>
            <Flux></Flux>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

export default Form;
