import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  Alert,
  TextInput,
  Dimensions,
} from 'react-native';
import {connect} from 'react-redux';
import {Button, Card, CardSection, Spinner} from '../ortak';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import Styles from '../Style/Styles';

const {width, height} = Dimensions.get('window');

class Login extends Component {
  state = {email: '', password: '', loading: false};

  clickLogin() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderButton() {
    if (!this.props.loading) {
      return <Button onPress={this.clickLogin.bind(this)}> Log in </Button>;
    }
    return <Spinner size="small" />;
  }

  render() {
    return (
      <ImageBackground style={Styles.imgBgStyle}>
        <Image
          style={{width, height: height / 4, marginTop: height / 20}}
          source={require('../img/instagramLogo.png')}></Image>
        <Card>
          <CardSection>
            <TextInput
              placeholder="Phone, number, username, or email"
              keyboardType="email-address"
              style={Styles.inputStyle}
              value={this.props.email}
              onChangeText={email => this.props.emailChanged(email)}
            />
          </CardSection>
        </Card>
        <Card>
          <CardSection>
            <TextInput
              secureTextEntry
              placeholder="Password"
              style={Styles.inputStyle}
              value={this.props.password}
              onChangeText={password => this.props.passwordChanged(password)}
            />
          </CardSection>
        </Card>
        <View style={Styles.buttonViewStyle}>
          <CardSection>{this.renderButton()}</CardSection>
        </View>
        <View>
          <Text style={Styles.forgotPassStyle}>forgot password?</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={Styles.lineStyle1}>                                            </Text>
          <Text style={{textAlign: 'center', fontSize: 16}}> or </Text>
          <Text style={Styles.lineStyle2}>                                            </Text>
        </View>
        <View style={Styles.buttonViewStyle}>
          <CardSection>
            <Button onPress={this.clickLogin.bind(this)}>
              Log in with facebook
            </Button>
          </CardSection>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = ({kimlikdogrulamaResponse}) => {
  const {email, password, loading} = kimlikdogrulamaResponse;
  return {
    email: 'msb@asd.com',
    password: '123123',
    loading,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(Login);
