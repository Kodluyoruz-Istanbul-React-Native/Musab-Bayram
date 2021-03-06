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
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Styles from './Styles';

const Child = ({uri, username, hidden, color}) => {
  return (
    <View style={Styles.mainView}>
      <TouchableHighlight style={Styles.profileImgContainer}>
        <LinearGradient
          colors={
            color === null
              ? ['#bc2a8d', '#e95950', '#fccc63']
              : ['#000', '#000', '#000']
          }
          style={{padding: 2, borderRadius: 50, marginLeft: 5, marginRight: 5}}>
          <Image
            source={{
              uri:
                hidden !== 0
                  ? uri
                  : 'https://i.picsum.photos/id/669/4869/3456.jpg?hmac=g-4rQWsPdHoLi5g6ahHlvjKubSQzR-D9m7-WtblbmyM',
            }}
            style={[
              Styles.StoryImage,
              color === null ? null : {borderColor: color, borderWidth: 2},
            ]}
          />
        </LinearGradient>
      </TouchableHighlight>

      {hidden !== 0 ? null : (
        <Entypo
          style={Styles.plusIcon}
          name="circle-with-plus"
          size={30}
          color="#000"
        />
      )}
      <Text style={Styles.username}>{hidden !== 0 ? username : 'Musab'}</Text>
    </View>
  );
};

export const Story = () => {
  const getUsers = async () => {
    const response = await fetch(
      'https://randomuser.me/api/?seed=${seed}&page=${page}&results=10',
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

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View>
        <FlatList
          data={data}
          contentContainerStyle={{flexDirection: 'row'}}
          renderItem={({item, index}) => (
            <Child
              key={index}
              uri={item.picture.large}
              username={item.name.first}
              hidden={index}
              color={null}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Story;
