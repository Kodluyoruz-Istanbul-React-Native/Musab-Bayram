import React, {useEffect, useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Story from './Story';
import {TabViewProfile} from './TabViewProfile';
import Styles from './Styles';

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

const Child = ({uri, username, hidden, color}) => {
  return (
    <View style={Styles.mainView}>
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
            style={[
              Styles.StoryImage,
              color === null ? null : {borderColor: color, borderWidth: 2},
            ]}
          />
        </LinearGradient>
      </TouchableHighlight>

      {hidden ? null : (
        <Entypo
          style={Styles.plusIcon}
          name="circle-with-plus"
          size={30}
          color="#FFF"
        />
      )}
      <Text style={Styles.username}>{username}</Text>
    </View>
  );
};

export const Profile = () => {
  const getUsers = async () => {
    const response = await fetch(
      'https://randomuser.me/api/?seed=${seed}&page=${page}&results=20',
    );

    const json = await response.json();
    //console.log('fonksiyonun içindeki data : ', json.results);
    if (json.results.length > 0) {
      setData(json.results);
    }
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  //console.log('useState= ', data);
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://i.picsum.photos/id/669/4869/3456.jpg?hmac=g-4rQWsPdHoLi5g6ahHlvjKubSQzR-D9m7-WtblbmyM',
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginTop: 15,
            marginBottom: 10,
            marginLeft: 10,
          }}
        />
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            marginLeft: 10,
          }}>
          <View style={{margin: 20, alignItems: 'center'}}>
            <Text style={{fontSize: 17, color: '#fff'}}>15</Text>
            <Text style={{fontSize: 17, color: '#fff'}}>Gönderi</Text>
          </View>
          <View style={{margin: 20, alignItems: 'center'}}>
            <Text style={{fontSize: 17, color: '#fff'}}>1550</Text>
            <Text style={{fontSize: 17, color: '#fff'}}>Takipçi</Text>
          </View>
          <View style={{margin: 20, alignItems: 'center'}}>
            <Text style={{fontSize: 17, color: '#fff'}}>152</Text>
            <Text style={{fontSize: 17, color: '#fff'}}>Takip</Text>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 16,
          marginLeft: 10,
          fontWeight: 'bold',
          color: '#fff',
        }}>
        Musab Bahadır
      </Text>
      <Text style={{fontSize: 16, marginLeft: 10, color: '#fff'}}>
        Paü-Bilgisayar / Bursa
      </Text>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            borderWidth: 1,
            borderRadius: 4,
            borderColor: '#fff',
            width: '89%',
            height: '110%',
            textAlign: 'center',
            textAlignVertical: 'center',
            marginRight: 8,
            color: '#fff',
          }}>
          Profili Düzenle
        </Text>
        <EvilIcons
          style={{
            borderWidth: 1,
            borderRadius: 4,
            borderColor: '#fff',
            paddingLeft: 3,
            paddingRight: 1,
            paddingTop: 5,
            height: '110%',
          }}
          name="chevron-down"
          size={30}
          color="#fff"
        />
      </View>
      <Story></Story>
      <View style={{flex: 1, height: 500}}>
        <TabViewProfile></TabViewProfile>
      </View>
      {/* <FlatList
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
        />*/}
    </ScrollView>
  );
};

export default Profile;
