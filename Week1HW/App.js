import React, { Component } from 'react';
import { View, ImageBackground, Image, Alert, TextInput } from 'react-native';
import { Button, Card, CardSection, Spinner } from './ortak';
import Styles from './Styles';

class Login extends Component {

  clickLogin() {
    Alert.alert(
      'Mesaj',
      'Hoş geldiniz',
      [
        { text: 'Tamam', onPress: () => null }
      ]
    );
  }
  

  renderButton() {
    if (!this.props.loading) {
      return (
        <Button onPress={this.clickLogin.bind(this)}> GİRİŞ </Button>
      );
    }
    return <Spinner size="small" />;
  }

  render() {
    return (
      <ImageBackground style={Styles.imgBgStyle}>

        <Card>
          <CardSection>
            <TextInput
              placeholder="E-mail"
              keyboardType="email-address"
              style={Styles.inputStyle}
            />
          </CardSection>

          <CardSection>
            <TextInput
              secureTextEntry
              placeholder="Şifre"
              style={Styles.inputStyle}
            />
          </CardSection>

          <CardSection>
            {this.renderButton()}
          </CardSection>
          <CardSection>
            <Button onPress={this.clickLogin.bind(this)}> KAYIT OL </Button>
          </CardSection>
        </Card>
      </ImageBackground>

    );
  }

}

export default Login;