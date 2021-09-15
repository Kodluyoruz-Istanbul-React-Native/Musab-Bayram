import * as React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Tabs} from '../components/Tabs';
import {Communication} from '../components/Communication';
import Styles from '../components/Styles';

const CameraScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Text style={{color: 'white'}}>Camera!</Text>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground style={{flex: 1}}>
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Communication', {
                screen: 'CommunicationScreen',
              })
            }>
            <Image
              style={Styles.headerCommentIcon}
              source={require('../img/commentIcon.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <Tabs></Tabs>
    </ImageBackground>
  );
};
const CommunicationScreen = ({navigation: {goBack}}) => {
  return (
    <View style={Styles.tabsHomeScreen}>
      <View style={Styles.homeHeaderView}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => goBack()}>
            <AntDesign
              style={{margin: 5}}
              name="arrowleft"
              size={30}
              color="#fff"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 30,
            }}>
            <Text style={Styles.profileHeaderName}>musabbahadir</Text>
            <EvilIcons name="chevron-down" size={27} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity>
            <Image
              style={Styles.videoCameraIcon}
              source={require('../img/videoCamera.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={Styles.editIcon}
              source={require('../img/editIcon.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <Communication></Communication>
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
