import * as React from 'react';
import {View, Image, TouchableOpacity, FlatList} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Data} from './Post';
import Styles from './Styles';

let screenIndex;
let photoCount = 0;
const GalleryChild = ({uri}) => {
  photoCount++;
  return (
    <TouchableOpacity style={{marginBottom: 2}}>
      <Image source={{uri: uri}} style={Styles.galleryChild} />
    </TouchableOpacity>
  );
};

const Gallery = () => (
  <View style={Styles.scene}>
    <FlatList
      data={Data}
      numColumns={3}
      contentContainerStyle={{marginBottom: 77}}
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

const Reals = () => <View style={Styles.scene} />;
const Tagged = () => <View style={Styles.scene} />;

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
          Styles.iconImage,
          screenIndex === 1 ? {tintColor: '#fff'} : {tintColor: '#606060'},
        ]}
        source={require('../img/realsIcon.png')}></Image>
    );
  } else {
    return (
      <Image
        style={[
          Styles.iconImage,
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
        initialLayout={Styles.initialLayout}
        //backgroundColor={'#fff'}
        renderTabBar={props => (
          <TabBar
            {...props}
            //indicatorStyle={{}}
            renderIcon={props => getTabBarIcon(props)}
            tabStyle={Styles.tabStyle}
            labelStyle={{display: 'none'}}
          />
        )}
        tabBarPosition={'top'}
      />
    )
  );
};

export default TabViewProfile;
