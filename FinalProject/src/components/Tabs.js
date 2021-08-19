import * as React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {Story} from './Story';
import {Flux} from './Flux';
import Styles from './Styles';

const Home = () => {
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
};

const Search = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search!</Text>
    </View>
  );
};

const Reels = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Reels!</Text>
    </View>
  );
};

const Shopping = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Shopping!</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
};

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'white'}}
      initialRouteName="Home"
      activeColor="#000"
      labelStyle={{fontSize: 12}}
      style={{
        backgroundColor: '#3b3b',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Fontisto name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Entypo name="folder-video" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="shopping" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Image
              source={{
                uri: 'https://i.picsum.photos/id/669/4869/3456.jpg?hmac=g-4rQWsPdHoLi5g6ahHlvjKubSQzR-D9m7-WtblbmyM',
              }}
              style={Styles.tabsProfileIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Tabs = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default Tabs;
