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
import {Data} from './Post';

const Child = ({uri, username, hidden, color}) => {
  return (
    <View style={Styles.mainView}>
      <TouchableHighlight style={Styles.profileImgContainer}>
        <LinearGradient
          colors={
            color === null ? ['#fff', '#fff', '#fff'] : ['#000', '#000', '#000']
          }
          style={{padding: 2, borderRadius: 50, marginLeft: 5, marginRight: 5}}>
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
          color="#000"
        />
      )}
      <Text style={Styles.username}>{username}</Text>
    </View>
  );
};

export const Story = () => {
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

export default Story;
