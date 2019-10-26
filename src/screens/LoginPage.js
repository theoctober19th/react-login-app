import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Alert
} from 'react-native';

import NextArrowButton from 'NavigationApp/src/components/buttons/NextArrowButton'

import colors from 'NavigationApp/src/assets/color';
import InputField from 'NavigationApp/src/components/form/InputField'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.onNextButtonPressed = this.onNextButtonPressed.bind(this);
    this._onChangeEmail = this._onChangeEmail.bind(this);
    this._onChangePassword = this._onChangePassword.bind(this);

    this.setState({
      email: '',
      password: ''
    })
  }

  render(){

  //  const {homePageRef} = this.props

    return(
        <KeyboardAvoidingView style={[styles.container, styles.avoidView]} keyboardVerticalOffset={-500} behavior='padding'>
          <View style={styles.scrollViewWrapper}>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.loginText}>Login</Text>
              <InputField
                labelText='EMAIL'
                labelTextSize={14}
                labelTextColor={colors.white}
                textColor={colors.white}
                borderBottomColor={colors.white}
                inputType='email-address'
                customStyle = {{marginBottom:30}}
                textChangeHandler = {this._onChangeEmail}
              />
              <InputField
                labelText='PASSWORD'
                labelTextSize={14}
                labelTextColor={colors.white}
                textColor={colors.white}
                borderBottomColor={colors.white}
                inputType='password'
                customStyle = {{marginBottom:30}}
                textChangeHandler = {this._onChangePassword}
              />
            </ScrollView>
            <View style={styles.nextArrowWrapper}>
              <NextArrowButton
                style={styles.nextArrowButton}
                handleNextButton={this.onNextButtonPressed}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
    );
  }

  _onChangeEmail(email){
    this.setState({
      email: email
    })
  }

  _onChangePassword(password){
    this.setState({
      password: password
    })
  }

  onNextButtonPressed(){
    const email = this.state.email;
    const password = this.state.password;

    if(email === 'hello@example.com' && password==='helloworld'){
      this.props.navigation.navigate('home')
    }else{
      Alert.alert(
        'Sorry',
        'You provided incorrect email or password',
        [
          {text: 'Okay'}
        ],
        {cancelable: false}
      );
    }
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green01
  },
  scrollViewWrapper:{
    marginTop: 70,
    flex: 1,
  },
  avoidView:{
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  loginText:{
    fontSize: 28,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40
  },
  scrollView:{
    flex:1,
  },
  nextArrowButton:{
    flex: 1
  },
  nextArrowWrapper:{
    marginBottom: 50
  }
});



export default LoginPage;
