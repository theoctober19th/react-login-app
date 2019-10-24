import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from './app/components/Home';
import Login from './app/components/Login';

const AppNavigator = createStackNavigator({
    login: Login,
    home: Home
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default createAppContainer(AppNavigator);
