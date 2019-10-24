import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import styles from './styles'

class Home extends Component {


  constructor(props) {
    super(props)

  }

  render(){

    return(
        <View style={styles.container}>
          <View style={styles.centralContainer}>
            <Text style={styles.infoText}>Welcome Home!</Text>
            <Button title='Log Out' onPress = {() => this.props.navigation.navigate('login')}/>
          </View>
        </View>
    );
  }
};

export default Home;
