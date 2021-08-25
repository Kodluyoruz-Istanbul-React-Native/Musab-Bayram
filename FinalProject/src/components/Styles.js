import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  profileImgContainer: {
    marginHorizontal: 2,
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
    alignSelf: 'center',
  },
  mainView: {
    marginBottom: 5,
    marginTop: 5,
  },
  postUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderRadius: 80 / 2,
    borderWidth: 2,
  },
  postImage: {
    width: width,
    height: width * 1.2,
    borderRadius: 4,
  },
  tabsProfileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
