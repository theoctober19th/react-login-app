import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Right,
  Title,
  Content,
  Card,
  CardItem,
  Text
} from 'native-base';

import NavbarAndDrawer from 'NavigationApp/src/screens/NavbarAndDrawer'

class HomeScreen extends Component {
  constructor(props) {
    super(props)

  }

  render(){
    return(
        <Container>
          <NavbarAndDrawer
            onPressHandler = {this.props.navigation.openDrawer}
            title = {'Home'}
            iconName = {'menu'}
          />
          <Content padder>
            <Card>
              <CardItem>
                <Body>
                  <Text>Welcome to my app! This app does nothing. :P</Text>
                </Body>
              </CardItem>
            </Card>

            <Button full rounded dark
              style={{marginTop: 10}}
              onPress = {() => this.props.navigation.navigate('Chat')}
            >
              <Text>Chat with People</Text>
            </Button>

            <Button full rounded primary
              style={{marginTop: 10}}
              onPress = {() => this.props.navigation.navigate('Profile')}
            >
              <Text>Go To Profile</Text>
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

export default HomeScreen;
