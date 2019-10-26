import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import colors from 'NavigationApp/src/assets/color';
import propTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

class RoundedButton extends Component {
  constructor(props) {
    super(props)

  }

  render(){
    const {text, background, textColor, icon} = this.props
    const backgroundColor = background || 'transparent'
    const color = textColor || colors.black

    return(
        <View style={styles.container}>
          <TouchableHighlight
            style={[{backgroundColor}, styles.buttonContainer]}
            onPress={this.props.onPress}
          >
            <View style={styles.buttonTextWrapper}>
              {icon}
              <Text style={[{color}, styles.buttonText]}>{text}</Text>
            </View>
          </TouchableHighlight>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer:{
    display: 'flex',
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: colors.white
  },
  buttonText:{
    fontSize: 16,
    width: '100%',
    textAlign: 'center'
  },buttonTextWrapper:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});

RoundedButton.propTypes = {
  text: propTypes.string.isRequired,
  textColor: propTypes.string,
  background: propTypes.string,
}

export default RoundedButton;
