import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {useFocusEffect} from '@react-navigation/native';
import {Actions} from 'react-native-router-flux';
import {NavigationContainer} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Data} from './Post';
import Styles from './Styles';

let screenIndex;
let photoCount = 0;
const DmChild = ({uri, username, color}) => {
  photoCount++;
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        margin: 8,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <LinearGradient
          colors={
            color === null
              ? ['#bc2a8d', '#e95950', '#fccc63']
              : ['#000', '#000', '#000']
          }
          style={Styles.postInfoStory}>
          <Image
            source={{uri: uri}}
            style={{width: 50, height: 50, borderRadius: 25}}
          />
        </LinearGradient>
        <View style={{justifyContent: 'center', marginLeft: 5}}>
          <Text style={{color: '#fff'}}>{username}</Text>
          <Text style={{color: '#999'}}>Bir mesajını beğendi</Text>
        </View>
      </View>
      <Feather
        name="camera"
        size={26}
        style={{color: '#999', alignSelf: 'center', marginRight: 6}}
      />
    </TouchableOpacity>
  );
};

const DirectMessage = () => (
  <View style={Styles.scene}>
    <FlatList
      data={Data}
      //numColumns={3}
      contentContainerStyle={{marginBottom: 77}}
      renderItem={({item, index}) => (
        <DmChild
          key={index}
          uri={item.uri}
          username={item.username}
          color={item.color}
        />
      )}
    />
  </View>
);

const Rooms = () => <View style={Styles.scene} />;
const DmRequests = () => <View style={Styles.scene} />;

const renderScene = SceneMap({
  DirectMessage: DirectMessage,
  Rooms: Rooms,
  DmRequests: DmRequests,
});
const getTabBarIcon = props => {
  const {route} = props;
  //console.log('Data', Data);
  if (route.key === 'DirectMessage') {
    return <Text style={{color: '#fff'}}>Sohbetler</Text>;
  } else if (route.key === 'Rooms') {
    return <Text style={{color: '#fff'}}>Odalar</Text>;
  } else {
    return <Text style={{color: '#fff'}}>İstek</Text>;
  }
};
const TabViewProfile = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'DirectMessage', title: 'DirectMessage'},
    {key: 'Rooms', title: 'Rooms'},
    {key: 'DmRequests', title: 'DmRequests'},
  ]);
  return (
    (screenIndex = index),
    (
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={Styles.initialLayout}
        swipeEnabled={false}
        //backgroundColor={'#fff'}
        renderTabBar={props => (
          <TabBar
            {...props}
            //indicatorStyle={{}}
            renderIcon={props => getTabBarIcon(props)}
            tabStyle={Styles.tabStyle}
            labelStyle={{display: 'none'}}
          />
        )}
        tabBarPosition={'top'}
      />
    )
  );
};
export const Communication = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}>
      <TabViewProfile />
    </View>
  );
};

export default Communication;
