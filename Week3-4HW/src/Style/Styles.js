import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    flex: 1,
  },
  imgBgStyle: {
    width,
    height,
    backgroundColor: 'white',
  },
  buttonViewStyle: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  lineStyle1: {
    textDecorationLine: 'line-through',
    textAlign: 'center',
    fontSize: 16,
    marginLeft: width / 15,
  },
  lineStyle2: {
    textDecorationLine: 'line-through',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  forgotPassStyle: {
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontSize: 16,
    margin: 10,
  },
});
