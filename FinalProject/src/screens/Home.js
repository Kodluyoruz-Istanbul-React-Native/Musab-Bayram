import * as React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import {Tabs} from '../components/Tabs';

const CameraScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Camera!</Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <ImageBackground style={{backgroundColor: 'white', flex: 1}}>
      <View style={{flex: 1}}>
        <Tabs></Tabs>
      </View>
    </ImageBackground>
  );
};
const CommunicationScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Communication!</Text>
    </View>
  );
};
const Tab = createMaterialTopTabNavigator();

export default function ContainerPage() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={() => <View />} initialRouteName="Home">
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={
            {
              //tabBarIcon: () => <Entypo name="home" color={'black'} size={26} />,
            }
          }
        />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Communication" component={CommunicationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
