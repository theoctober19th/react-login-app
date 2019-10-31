import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import{
  Header,
  Container,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right
} from 'native-base';

class NavbarAndDrawer extends Component {
  constructor(props) {
    super(props)

  }

  render(){

    const {
      onPressHandler,
      title,
      iconName
    } = this.props;

    return(
          <Header>
            <Left>
              <Button
                transparent ={true}
                onPress = {onPressHandler}
              >
                <Icon name={iconName}/>
              </Button>
            </Left>

            <Body>
              <Title>{title}</Title>
            </Body>
            <Right />
          </Header>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NavbarAndDrawer;
