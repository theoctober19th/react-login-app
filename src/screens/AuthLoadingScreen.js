import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  AsyncStorage,
  ActivityIndicator

} from 'react-native';

import colors from 'NavigationApp/src/assets/color';
import NextArrowButton from 'NavigationApp/src/components/buttons/NextArrowButton'
import InputField from 'NavigationApp/src/components/form/InputField'

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);

    this._boostrapAsync = this._boostrapAsync.bind(this)
  }

  componentDidMount(){
    this._boostrapAsync();
  }

  _boostrapAsync = async () => {
    const signedIn = await AsyncStorage.getItem('signedIn');

    this.props.navigation.navigate(signedIn ? 'App': 'Auth');
  }

  render(){
    return(
        <KeyboardAvoidingView style={[styles.container, styles.avoidView]} keyboardVerticalOffset={-500} behavior='padding'>
          <View style={styles.scrollViewWrapper}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.spinnerContainer}>
                <ActivityIndicator style={styles.spinner} size='large' color='#e8eb42'/>
                <Text style={styles.loginText}>Loading</Text>

              </View>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green01,
    justifyContent: 'center'
  },
  scrollViewWrapper:{
    marginTop: 300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avoidView:{
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center'
  },
  loginText:{
    fontSize: 28,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
    marginTop: 30
  },
  spinnerContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  spinner:{
    margin: 20,
  }

});

export default AuthLoadingScreen;
