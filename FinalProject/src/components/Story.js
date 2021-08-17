import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight,
  FlatList,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const { width, height } = Dimensions.get('window');
const Data = [
  {
    uri: 'https://i.picsum.photos/id/669/4869/3456.jpg?hmac=g-4rQWsPdHoLi5g6ahHlvjKubSQzR-D9m7-WtblbmyM',
    username: '  Musab',
    hidden: false,
    color: '#fff',
  },
  {
    uri: 'https://i.picsum.photos/id/602/2509/1673.jpg?hmac=wvxJs5BbpVV8SJIN-vmyhWXuWlIHloNPBUkgwKVSkP0',
    username: '  Engin',
    hidden: true,
    color: '#559922',
  },

  {
    uri: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
    username: '  Merve',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
    username: '  Taha',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: '  Banu',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
    username: '  Merve',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
    username: '  Taha',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: '  Banu',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
    username: '  Merve',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
    username: '  Taha',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: '  Banu',
    hidden: true,
    color: null,
  },
];

const getUsers = async () => {
  const response = await fetch(
    'https://randomuser.me/api/?seed=${seed}&page=${page}&results=20',
  );
  const json = await response.json();
  //console.log("json = ", json);
  return json.results;
};

const Child = ({uri, username, hidden, color}) => {
  return (
    <View style={styles.mainView}>
      <TouchableHighlight style={styles.profileImgContainer}>
        <LinearGradient
          colors={
            color === null
              ? ['#bc2a8d', '#e95950', '#fccc63']
              : ['#fff', '#fff', '#fff']
          }
          style={{padding: 2, borderRadius: 50}}>
          <Image
            source={{uri: uri}}
            style={[
              styles.StoryImage,
              color === null ? null : {borderColor: color, borderWidth: 2},
            ]}
          />
        </LinearGradient>
      </TouchableHighlight>

      {hidden ? null : (
        <Entypo
          style={styles.plusIcon}
          name="circle-with-plus"
          size={30}
          color="#FFF"
        />
      )}
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const FluxChild = ({uri, username, color}) => {
  return (
    <View style={styles.mainView}>
      <View style={{flexDirection: 'row', marginBottom: 4}}>
        <TouchableHighlight style={styles.profileImgContainer}>
          <LinearGradient
            colors={
              color === null
                ? ['#bc2a8d', '#e95950', '#fccc63']
                : ['#fff', '#fff', '#fff']
            }
            style={{padding: 2, borderRadius: 50}}>
            <Image
              source={{uri: uri}}
              style={[styles.fluxUserImage, {borderColor: color}]}
            />
          </LinearGradient>
        </TouchableHighlight>
        <Text style={{alignSelf: 'center'}}>{username}</Text>
      </View>
      <Image source={{uri: uri}} style={styles.fluxPostImage} />
    </View>
  );
};

export const Story = () => {
  const yeniData = getUsers();
  //console.log('log attım', yeniData);
  return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <FlatList
            data={Data}
            contentContainerStyle={{flexDirection: 'row'}}
            renderItem={({item, index}) => (
              <Child
                key={index}
                uri={item.uri}
                username={item.username}
                hidden={item.hidden}
                color={item.color}
              />
            )}
          />
        </View>
      </ScrollView>
  );
};
export const Flux = () => {
  return (
    <ScrollView>
      <View>
        <FlatList
          data={Data}
          renderItem={({item, index}) => (
            <FluxChild
              key={index}
              uri={item.uri}
              username={item.username}
              color={item.color}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileImgContainer:{
    marginHorizontal: 2
  },
  StoryImage: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
  },
  plusIcon: {
    position: 'absolute',
    right: 5,
    bottom: 10,
    color: '#0499f9',
    backgroundColor: 'white',
    borderRadius: 30 / 2,
  },
  username: {
    fontSize: 12,
    alignSelf:'center'
  },
  mainView: {
    marginBottom: 5,
    marginTop: 5,
  },
  fluxUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderRadius: 80 / 2,
    borderWidth: 2,
  },
  fluxPostImage: {
    width: width,
    height: width*1.2,
    borderRadius: 4,
  },
});

export default Story;
