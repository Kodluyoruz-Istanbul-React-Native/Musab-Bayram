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
import Entypo from 'react-native-vector-icons/Entypo';
import Styles from './Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
            source={{uri: uri}}
            style={[
              Styles.StoryImage,
              color === null ? null : {borderColor: color, borderWidth: 2},
            ]}
          />
        </LinearGradient>
      </TouchableHighlight>
      <Text style={Styles.username}>{username}</Text>
    </View>
  );
};

export const PinnedStories = () => {
  const [count, setCount] = useState(3);
  const getUsers = async () => {
    const response = await fetch(
      'https://randomuser.me/api/?seed=${seed}&page=${page}&results=' + count,
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
  }, [count]);
  console.log(count);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: 'row'}}>
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
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          style={{
            marginTop: 7,
            marginLeft: 5,
            padding: 16,
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 40,
          }}>
          <Entypo name="plus" size={45} color="#fff" style={{}} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PinnedStories;
