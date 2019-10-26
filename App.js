import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomePage from './src/screens/HomePage';
import LoginPage from './src/screens/LoginPage';

const AppNavigator = createStackNavigator({
    login: LoginPage,
    home: HomePage
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default createAppContainer(AppNavigator);
