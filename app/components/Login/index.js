import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import styles from './styles'

class Login extends Component {


  constructor(props) {
    super(props)

  }

  render(){

    return(
        <View style={styles.container}>
          <Text>Login</Text>
          <Button title='Login' onPress = {() => this.props.navigation.navigate('home')} />
        </View>
    );
  }
};

export default Login;
