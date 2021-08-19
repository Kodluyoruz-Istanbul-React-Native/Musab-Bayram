import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';
import {Story} from '../components/Story';
import {Flux} from '../components/Flux';
import {ScrollView} from 'react-native-gesture-handler';

class Home extends Component {
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

export default Home;
