import React, {Component} from 'react';
import {View, ImageBackground, Text} from 'react-native';
import {Story} from '../components/Story';
import {Flux} from '../components/Flux';
import {Tabs} from '../components/Tabs';
import {ScrollView} from 'react-native-gesture-handler';

class Form extends Component {
  render() {
    return (
      <ImageBackground style={{backgroundColor: 'white', flex: 1}}>
        <View style={{flex: 1}}>
          <Tabs></Tabs>
        </View>
      </ImageBackground>
    );
  }
}

export default Form;
