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
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';

let liked = 0;
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
const FluxChild = ({uri, username, color}) => {
  function onPress() {
    liked += 1;
    console.log(liked);
  }
  return (
    <View style={Styles.mainView}>
      <View style={{flexDirection: 'row', marginBottom: 4}}>
        <TouchableHighlight style={Styles.profileImgContainer}>
          <LinearGradient
            colors={
              color === null
                ? ['#bc2a8d', '#e95950', '#fccc63']
                : ['#fff', '#fff', '#fff']
            }
            style={{padding: 2, borderRadius: 50}}>
            <Image
              source={{uri: uri}}
              style={[Styles.fluxUserImage, {borderColor: color}]}
            />
          </LinearGradient>
        </TouchableHighlight>
        <Text style={{alignSelf: 'center'}}>{username}</Text>
      </View>
      <Image source={{uri: uri}} style={Styles.fluxPostImage} />
      <TouchableOpacity onpress={onPress()}>
        <Ionicons
          name={liked % 2 === 1 ? 'heart-outline' : 'heart-sharp'}
          size={35}
          style={liked % 2 === 1 ? {color: 'black'} : {color: 'red'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export const Flux = () => {
  return (
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
  );
};

export default Flux;
