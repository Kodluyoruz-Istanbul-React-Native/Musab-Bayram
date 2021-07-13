import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const AnaSayfaRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ff0000'}]}/>
);

const MesajlarRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#00ff00'}]}/>
);
const ProfilRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#0000ff'}]}/>
);

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  AnaSayfa: AnaSayfaRoute,
  Mesajlar: MesajlarRoute,
  Profil: ProfilRoute,
});

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'AnaSayfa', title: 'AnaSayfa'},
    {key: 'Mesajlar', title: 'Mesajlar'},
    {key: 'Profil', title: 'Profil'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
