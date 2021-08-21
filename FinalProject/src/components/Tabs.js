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
import {Profile} from './Profile';
import Styles from './Styles';

const HomeScreen = () => {
  return (
    <ImageBackground style={{backgroundColor: '#000', flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Story></Story>
        <Flux></Flux>
      </ScrollView>
    </ImageBackground>
  );
};

const SearchScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search!</Text>
    </View>
  );
};

const ReelsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Reels!</Text>
    </View>
  );
};

const ShoppingScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Shopping!</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <ImageBackground style={{backgroundColor: '#000', flex: 1}}>
      <Profile></Profile>
    </ImageBackground>
  );
};

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: '#000',
        borderTopColor: '#111',
        borderWidth: 1,
      }}
      initialRouteName="HomeScreen"
      activeColor="#fff"
      labelStyle={{fontSize: 12}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Entypo name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Fontisto name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ReelsScreen"
        component={ReelsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Entypo name="folder-video" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingScreen"
        component={ShoppingScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="shopping" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
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
