import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  AsyncStorage
} from 'react-native';

import {withNavigation} from 'react-navigation'

import Icon from 'react-native-vector-icons/FontAwesome'

import {
  Container,
  Content
} from 'native-base';

import NavbarAndDrawer from 'NavigationApp/src/screens/NavbarAndDrawer'
import colors from 'NavigationApp/src/assets/color'
import RoundedButton from 'NavigationApp/src/components/buttons/RoundedButton'

class ProfileScreen extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
        <Container>
          <NavbarAndDrawer
            title = 'Profile'
            iconName = 'menu'
            onPressHandler = {this.props.navigation.openDrawer}
          />


          <View style={styles.container}>
            <View style={styles.welcomeWrapper}>
              <Image
                style={styles.logo}
                source={require('NavigationApp/src/assets/img/boy.png')}
              />
              <Text style={styles.welcomeText}>Welcome, Home!</Text>
              <RoundedButton
                text='Log Out'
                background={colors.white}
                textColor= {colors.green01}
                icon= {<Icon name='sign-out' size={20} style={styles.facebookIcon}/>}
                onPress = {this.navigateToLoginPage}
              />
            </View>
          </View>
        </Container>
    );
  }

  navigateToLoginPage = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01
  },
  welcomeWrapper:{
    flex:1,
    display: 'flex',
    marginTop: 30,
    padding: 20,
  },
  logo:{
    width: 64,
    height: 64,
    marginTop: 50,
    marginBottom: 40
  },
  welcomeText:{
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  facebookIcon:{
    color: colors.green01,
    position: 'relative',
    left: 20,
    zIndex: 8
  }
});

export default withNavigation(ProfileScreen);
