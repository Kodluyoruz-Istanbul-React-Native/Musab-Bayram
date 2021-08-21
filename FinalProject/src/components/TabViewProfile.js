import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Gallery = () => (
  <View style={[styles.scene, {backgroundColor: '#ff0000'}]}></View>
);

const Reals = () => (
  <View style={[styles.scene, {backgroundColor: '#00ff00'}]} />
);
const Tagged = () => (
  <View style={[styles.scene, {backgroundColor: '#0000ff'}]} />
);

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  Gallery: Gallery,
  Reals: Reals,
  Tagged: Tagged,
});
const getTabBarIcon = props => {
  const {route} = props;
  if (route.key === 'Gallery') {
    return (
      <MaterialIcons name={'grid-on'} size={35} style={{color: 'white'}} />
    );
  } else if (route.key === 'Reals') {
    return <Entypo name="folder-video" style={{color: 'white'}} size={26} />;
  } else {
    return <Entypo name="folder-video" style={{color: 'white'}} size={26} />;
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
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
      backgroundColor="#fff"
      borderColor="#fff"
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{backgroundColor: 'white'}}
          renderIcon={props => getTabBarIcon(props)}
          tabStyle={styles.bubble}
          labelStyle={styles.noLabel}
        />
      )}
      tabBarPosition={'top'}
    />
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
