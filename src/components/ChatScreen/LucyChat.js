import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import {
  Label,
  Container,
  Content,
  Item,
  Input,
  Button,
  Text
} from 'native-base';

import NavbarAndDrawer from 'NavigationApp/src/screens/NavbarAndDrawer'

class LucyChat extends Component {
  constructor(props) {
    super(props)

  }

  render(){
    return(
        <Container>
          <NavbarAndDrawer
            iconName = 'menu'
            title = 'Lucy Chat'
            onPressHandler = {this.props.navigation.openDrawer}
          />

          <Content padder>
            <Item
              floatingLabel
              style = {{marginTop: 20}}
            >
              <Label>Lucy Chat</Label>
              <Input />
            </Item>

            <Button
              rounded
              danger
              style={{alignSelf: 'center', marginTop: 20}}
              onPress = {() => this.props.navigation.navigate('Profile')}
            >
              <Text>Go To Lucy's Profile</Text>
            </Button>
          </Content>
        </Container>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LucyChat;
