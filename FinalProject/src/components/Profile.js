import React, {useEffect, useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Story from './Story';
import {TabViewProfile} from './TabViewProfile';
import Styles from './Styles';

export const Profile = () => {
  return (
    <View>
      <View style={Styles.profileHeaderView}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Ionicons
            name="lock-closed-outline"
            size={16}
            color="#fff"
            style={Styles.profileHeaderLockIcon}
          />
          <Text style={Styles.profileHeaderName}>musabbahadir</Text>
          <EvilIcons
            style={{marginTop: 5}}
            name="chevron-down"
            size={26}
            color="#fff"
          />
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
            <SimpleLineIcons
              name="menu"
              size={24}
              color="#fff"
              style={Styles.profileHeaderMenu}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{
              uri: 'https://i.picsum.photos/id/669/4869/3456.jpg?hmac=g-4rQWsPdHoLi5g6ahHlvjKubSQzR-D9m7-WtblbmyM',
            }}
            style={Styles.profileImage}
          />
          <View style={Styles.profileMainTextView}>
            <TouchableOpacity style={Styles.profileTextView}>
              <Text style={Styles.profileText}>15</Text>
              <Text style={Styles.profileText}>Gönderi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.profileTextView}>
              <Text style={Styles.profileText}>1550</Text>
              <Text style={Styles.profileText}>Takipçi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.profileTextView}>
              <Text style={Styles.profileText}>152</Text>
              <Text style={Styles.profileText}>Takip</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={Styles.profileName}>Musab Bahadır</Text>
        <Text style={Styles.profileInfoText}>Paü-Bilgisayar / Bursa</Text>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
          }}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text style={Styles.profileEdit}>Profili Düzenle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <EvilIcons
              style={Styles.profileEditIcon}
              name="chevron-down"
              size={30}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <Story></Story>
        <View style={{flex: 1}}>
          <TabViewProfile></TabViewProfile>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
