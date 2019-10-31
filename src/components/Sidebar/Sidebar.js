import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native';

import{
  Container,
  Content,
  List,
  ListItem
} from 'native-base';

const routes = ['Home', 'Chat', 'Profile']

class Sidebar extends Component {
  constructor(props) {
    super(props)

  }

  render(){
    return(
        <Container>
          <Content>
            <ImageBackground
              source={require('NavigationApp/src/assets/img/bikalpa_cover.jpeg')}
              style={{
                height: 200,
                alignSelf: 'stretch',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
              }}
            >

              <Image
                style={{height: 80, width: 70, borderRadius: 50, marginLeft:  10, marginBottom:  10}}
                source={require('NavigationApp/src/assets/img/bikalpaPP.jpg')}
              />
            </ImageBackground>

            <List
              dataArray = {routes}
              renderRow = {
                data => {
                  return(
                    <ListItem
                      button
                      onPress= {() => this.props.navigation.navigate(data)}
                    >
                      <Text>{data}</Text>
                    </ListItem>
                  );
                }
              }
            />

          </Content>
        </Container>
    );
  }
};

export default Sidebar;
