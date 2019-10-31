import React, {Component} from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';


import LoginPage from 'NavigationApp/src/screens/LoginPage';
import HomeScreen from 'NavigationApp/src/components/HomeScreen/HomeScreen.js'
import Sidebar from 'NavigationApp/src/components/Sidebar/Sidebar.js';
import ChatScreenNavigator from 'NavigationApp/src/components/ChatScreen/index.js';
import Profile from 'NavigationApp/src/components/ProfileScreen/index.js';
import AuthLoadingScreen from 'NavigationApp/src/screens/AuthLoadingScreen.js'


const SignedOutNav = createStackNavigator({
    login: {
      screen: LoginPage
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const SignedInNav = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreenNavigator},
    Profile: {screen: Profile}
  },
  {
    contentComponent : props => <Sidebar {...props}/>,
  }
);

export default createAppContainer(
  createSwitchNavigator({
    Loading: AuthLoadingScreen,
    App: SignedInNav,
    Auth: SignedOutNav,
  },
  {
    initialRouteName: 'Loading',
  })
);
