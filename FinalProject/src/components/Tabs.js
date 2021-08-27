import * as React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {Story} from './Story';
import {Post} from './Post';
import {Profile} from './Profile';
import {Discover} from './Discover';
import Styles from './Styles';

const HomeScreen = () => {
  return (
    <View style={Styles.tabsHomeScreen}>
      <View style={Styles.profileHeaderView}>
        <TouchableOpacity>
          <Image
            style={Styles.headerInstagramText}
            source={require('../img/instagramText.png')}></Image>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Entypo
              name="plus"
              size={20}
              color="#fff"
              style={Styles.profileHeaderPlus}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign
              name={'hearto'}
              size={27}
              style={Styles.headerHeartIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={Styles.headerCommentIcon}
              source={require('../img/commentIcon.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={Styles.tabsHomeScreen}>
        <Story></Story>
        <Post></Post>
      </ScrollView>
    </View>
  );
};

const DiscoverScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <View style={{backgroundColor: '#000'}}>
        <Searchbar
          placeholder="Ara"
          //onChangeText={}
          //value={}
          inputStyle={{color: '#fff'}}
          style={{
            backgroundColor: '#222',
            borderRadius: 10,
            margin: 10,
            height: 40,
            paddingHorizontal: 0,
            paddingVertical: 0,
          }}
          placeholderTextColor="#555"
          iconColor="#fff"
        />
      </View>
      <Discover></Discover>
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
    <ImageBackground style={{backgroundColor: '#000'}}>
      <Profile></Profile>
    </ImageBackground>
  );
};

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      barStyle={Styles.barStyle}
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
        name="DiscoverScreen"
        component={DiscoverScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Fontisto name="search" color={color} size={26} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen
        name="ReelsScreen"
        component={ReelsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <Image
              style={[Styles.reelsIcon, {tintColor: color}]}
              source={require('../img/realsIcon.png')}></Image>
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
              style={[
                Styles.tabsProfileIcon,
                color === '#fff'
                  ? {borderColor: '#fff'}
                  : {borderColor: '#000'},
              ]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Tabs = () => {
  return <MyTabs />;
};

export default Tabs;
