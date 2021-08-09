import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const Data = [
  {
    uri: 'https://i.picsum.photos/id/669/4869/3456.jpg?hmac=g-4rQWsPdHoLi5g6ahHlvjKubSQzR-D9m7-WtblbmyM',
    username: '  Musab',
    hidden: false,
    color: '#AAAAAA',
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
    color: '#FD500D',
  },
  {
    uri: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
    username: '  Taha',
    hidden: true,
    color: '#FD500D',
  },
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: '  Banu',
    hidden: true,
    color: '#FD500D',
  },
];
const Child = ({uri, username, hidden, color}) => {
  return (
    <View style={{marginLeft: 5, marginBottom: 5}}>
      <TouchableHighlight style={styles.profileImgContainer}>
        <Image
          source={{uri: uri}}
          style={[styles.StoryImage, {borderColor: color, borderWidth: 2}]}
        />
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

export const Story = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        contentContainerStyle={{flexDirection:'row'}}
        scrollEventThrottle={16}
        snapToInterval={120}
        renderItem={({item, index}) =>
            <Child
              key={index}
              uri={item.uri}
              username={item.username}
              hidden={item.hidden}
              color={item.color}
            />
          
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 5,
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
    fontWeight: '200',
    marginHorizontal: 10,
  },
});

export default Story;
