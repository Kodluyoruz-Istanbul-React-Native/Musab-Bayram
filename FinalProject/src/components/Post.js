import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

let liked = 0;
export const Data = [
  {
    uri: 'https://i.picsum.photos/id/669/4869/3456.jpg?hmac=g-4rQWsPdHoLi5g6ahHlvjKubSQzR-D9m7-WtblbmyM',
    username: 'Musab',
    hidden: false,
    color: '#fff',
  },
  {
    uri: 'https://i.picsum.photos/id/602/2509/1673.jpg?hmac=wvxJs5BbpVV8SJIN-vmyhWXuWlIHloNPBUkgwKVSkP0',
    username: 'Engin',
    hidden: true,
    color: '#559922',
  },

  {
    uri: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
    username: 'Şule',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
    username: 'Taha',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: 'Banu',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
    username: 'Merve',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
    username: 'Taha',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: 'Banu',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
    username: 'Merve',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
    username: 'Taha',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: 'Banu',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: 'Banu',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: 'Banu',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: 'Banu',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: 'Banu',
    hidden: true,
    color: null,
  },
  {
    uri: 'https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM',
    username: 'Banu',
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
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onpress={onPress()}>
          <AntDesign
            name={liked % 2 === 1 ? 'hearto' : 'heart'}
            size={26}
            style={[
              liked % 2 === 1 ? {color: '#fff'} : {color: 'red'},
              {margin: 10},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity onpress={onPress()}>
          <Ionicons
            name="chatbubble-outline"
            size={26}
            style={{color: '#fff', margin: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity onpress={onPress()}>
          <Feather name="send" size={26} style={{color: '#fff', margin: 10}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Post = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
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
      <Button title="Show modal" onPress={() => setModalVisible(true)} />

      <Modal
        style={{justifyContent: 'flex-end', marginTop: 100}}
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        slideInUp="down"
        animationIn="slideInUp"
        animationOut="slideInDown"
        animationInTiming={1000}
        backdropOpacity={1}
        backdropColor="#252525"
        swipeDirection={['up', 'left', 'right', 'down']}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight / 2}>
        <View style={{flex: 1}}>
          <Text style={{color: 'white'}}>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
};

export default Post;
