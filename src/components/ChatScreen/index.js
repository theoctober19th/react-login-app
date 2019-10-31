import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import LucyChat from './LucyChat.js';
import JadeChat from './JadeChat.js';
import NineChat from './NineChat.js';

import{
  Button,
  Icon,
  Footer,
  FooterTab
} from 'native-base';

import {createBottomTabNavigator} from 'react-navigation-tabs'

const MainScreenNavigator = createBottomTabNavigator(
  {
    LucyChat: {screen: LucyChat},
    JadeChat: {screen: JadeChat},
    NineChat: {screen: NineChat},
  },
  {
    tabBarComponent: props => {
      return(
        <Footer>
          <FooterTab>
            <Button
              vertical
              active = {props.navigation.state.index === 0}
              onPress = {() => props.navigation.navigate('LucyChat')}
            >
              <Icon name= 'bowtie'/>
              <Text>Lucy</Text>
            </Button>
            <Button
              vertical
              active = {props.navigation.state.index === 1}
              onPress = {() => props.navigation.navigate('JadeChat')}
            >
              <Icon name= 'bowtie'/>
              <Text>Jade</Text>
            </Button>
            <Button
              vertical
              active = {props.navigation.state.index === 2}
              onPress = {() => props.navigation.navigate('NineChat')}
            >
              <Icon name='bowtie'/>
              <Text>Nine</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
);

export default MainScreenNavigator;
