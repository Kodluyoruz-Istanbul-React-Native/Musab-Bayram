import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import {Data} from './Post';
import Styles from './Styles';

let screenIndex;
let photoCount = 0;
const GalleryChild = ({uri, username, color}) => {
  photoCount++;
  return (
    <View style={{marginBottom: 4}}>
      <Image
        source={{uri: uri}}
        style={{width: 135, height: 135, marginLeft: 2}}
      />
    </View>
  );
};

const Gallery = () => (
  <View style={[styles.scene, {backgroundColor: '#000'}]}>
    <FlatList
      data={Data}
      contentContainerStyle={{flexDirection: 'row'}}
      renderItem={({item, index}) => (
        <GalleryChild
          key={index}
          uri={item.uri}
          username={item.username}
          color={item.color}
        />
      )}
    />
  </View>
);

const Reals = () => <View style={[styles.scene, {backgroundColor: '#000'}]} />;
const Tagged = () => <View style={[styles.scene, {backgroundColor: '#000'}]} />;

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  Gallery: Gallery,
  Reals: Reals,
  Tagged: Tagged,
});
const getTabBarIcon = props => {
  const {route} = props;
  //console.log('Data', Data);
  if (route.key === 'Gallery') {
    return (
      <MaterialIcons
        name={'grid-on'}
        size={35}
        style={screenIndex === 0 ? {color: '#fff'} : {color: '#606060'}}
      />
    );
  } else if (route.key === 'Reals') {
    return (
      <Image
        style={[
          {
            width: 35,
            height: 38,
          },
          screenIndex === 1 ? {tintColor: '#fff'} : {tintColor: '#606060'},
        ]}
        source={require('../img/realsIcon.png')}></Image>
    );
  } else {
    return (
      <Image
        style={[
          {
            width: 35,
            height: 38,
          },
          screenIndex === 2 ? {tintColor: '#fff'} : {tintColor: '#606060'},
        ]}
        source={require('../img/userTagIcon.png')}></Image>
    );
  }
};
export const TabViewProfile = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Gallery', title: 'Gallery'},
    {key: 'Reals', title: 'Reals'},
    {key: 'Tagged', title: 'Tagged'},
  ]);
  return (
    (screenIndex = index),
    (
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        backgroundColor={'#fff'}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{
              backgroundColor: '#fff',
              paddingBottom: 2,
            }}
            renderIcon={props => getTabBarIcon(props)}
            tabStyle={styles.bubble}
            labelStyle={styles.noLabel}
          />
        )}
        tabBarPosition={'top'}
      />
    )
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  noLabel: {
    display: 'none',
    height: 25,
  },
  bubble: {
    backgroundColor: '#000',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default TabViewProfile;
