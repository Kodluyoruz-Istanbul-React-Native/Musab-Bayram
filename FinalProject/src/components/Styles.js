import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  //-----------------------------Story.js Styles----------------------------------//
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
    color: '#fff',
  },
  //----------------------------------------Post.js Styles----------------------------------------------//
  mainView: {
    marginBottom: 5,
    marginTop: 5,
  },
  profileImgContainer: {
    marginHorizontal: 2,
  },
  postImage: {
    width: width,
    height: width * 1.2,
    borderRadius: 4,
  },
  postUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderRadius: 80 / 2,
    borderWidth: 2,
  },
  postInfoView: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  postInfoStory: {
    padding: 2,
    borderRadius: 50,
  },
  //-----------------------------Profile.js Styles----------------------------------//
  profileHeaderView: {
    flexDirection: 'row',
    marginTop: 4,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#252525',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  profileHeaderLockIcon: {
    alignSelf: 'center',
    margin: 6,
  },
  profileHeaderName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileHeaderPlus: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 2,
  },
  profileHeaderMenu: {
    marginLeft: 24,
    marginTop: 2,
    marginRight: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 10,
  },
  profileName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileInfoText: {
    marginLeft: 10,
    fontSize: 17,
    color: '#fff',
  },
  profileMainTextView: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  profileTextView: {
    fontSize: 17,
    marginLeft: 35,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },
  profileText: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
  },
  profileEdit: {
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#555',
    width: '98%',
    height: '110%',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: -28,
    color: '#fff',
  },
  profileEditIcon: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#555',
    paddingLeft: 3,
    paddingRight: 1,
    paddingTop: 5,
    height: '110%',
  },
  //-------------------------------------TabViewProfile.js Styles-----------------------------------//
  scene: {
    flex: 1,
    backgroundColor: '#000',
  },
  tabStyle: {
    backgroundColor: '#000',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  galleryChild: {
    width: 135,
    height: 135,
    marginLeft: 2,
  },
  iconImage: {
    width: 35,
    height: 38,
  },
  initialLayout: {
    width,
  },

  //----------------------------------------Tabs.js Styles----------------------------------------------//
  headerInstagramText: {
    width: 115,
    height: 35,
    tintColor: '#fff',
    marginLeft: 10,
  },
  headerHeartIcon: {
    color: '#fff',
    marginRight: 20,
    marginLeft: 20,
  },
  headerCommentIcon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  tabsProfileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
  },
  tabsHomeScreen: {
    backgroundColor: '#000',
    flex: 1,
  },
  barStyle: {
    backgroundColor: '#000',
    borderTopColor: '#111',
    borderWidth: 1,
  },
  reelsIcon: {
    width: 35,
    height: 35,
    marginTop: -5,
  },
  //----------------------------------------Home.js Styles----------------------------------------------//
  homeHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  videoCameraIcon: {
    width: 32,
    height: 32,
    tintColor: '#fff',
  },
  editIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
    marginRight: 14,
    marginLeft: 24,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopLeftRadius: 4,
  },
});
