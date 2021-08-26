import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import Styles from './Styles';

let liked = 0;
export const Data = [
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
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: '  Banu',
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
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: '  Banu',
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
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: '  Banu',
    hidden: true,
    color: null,
  },
];
const PostChild = ({uri, username, color}) => {
  function onPress() {
    liked += 1;
    console.log(liked);
  }
  return (
    <View style={Styles.mainView}>
      <View style={Styles.postInfoView}>
        <TouchableHighlight style={Styles.profileImgContainer}>
          <LinearGradient
            colors={
              color === null
                ? ['#bc2a8d', '#e95950', '#fccc63']
                : ['#000', '#000', '#000']
            }
            style={Styles.postInfoStory}>
            <Image
              source={{uri: uri}}
              style={[Styles.postUserImage, {borderColor: color}]}
            />
          </LinearGradient>
        </TouchableHighlight>
        <Text
          style={{
            alignSelf: 'center',
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {username}
        </Text>
      </View>
      <Image source={{uri: uri}} style={Styles.postImage} />
      <TouchableOpacity onpress={onPress()}>
        <Entypo
          name={liked % 2 === 1 ? 'heart-outlined' : 'heart'}
          size={35}
          style={liked % 2 === 1 ? {color: '#fff'} : {color: 'red'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export const Post = () => {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({item, index}) => (
          <PostChild
            key={index}
            uri={item.uri}
            username={item.username}
            color={item.color}
          />
        )}
      />
    </View>
  );
};

export default Post;
