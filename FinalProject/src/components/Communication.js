import React, {useEffect, useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {Actions} from 'react-native-router-flux';
import {NavigationContainer} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Styles from './Styles';

export const Communication = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#fff', alignSelf: 'center'}}>Communication</Text>
    </View>
  );
};

export default Communication;
