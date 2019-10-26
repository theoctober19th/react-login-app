import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import colors from 'NavigationApp/src/assets/color'

class InputField extends Component {
  constructor(props) {
    super(props)

    this.state = {
      secureInput: (props.inputType === 'password')
    }

    this.toggleShowPassword = this.toggleShowPassword.bind(this)
  }

  render(){
    const {
      labelText,
      labelTextSize,
      labelTextColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle,
      placeholder,
      textChangeHandler
    }  = this.props;

    const color = labelTextColor || colors.white;
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || colors.white;
    const borderBottom = borderBottomColor || 'transparent'
    const secureInput = this.state.secureInput

    return(
        <View style={[customStyle, styles.container]}>
          <Text style={[styles.labelText, color, fontSize]}>{labelText}</Text>

          {inputType == 'password' ? (
            <TouchableOpacity
              style={styles.showButton}
              onPress={this.toggleShowPassword}
            >
              <Text style={styles.showHideText}>
                {secureInput ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          ) : null}

          <TextInput
            style={[
              {color: inputColor, borderBottomColor: borderBottom,},
              styles.inputFieldTextInput
            ]}
            secureTextEntry = {secureInput}
            keyboardType = {inputType === 'email-address' ? 'email-address' : ''}
            placeholder = {placeholder}
            onChangeText = {textChangeHandler}
          />
        </View>
    );
  }

  toggleShowPassword(){
    this.setState({
      secureInput: !this.state.secureInput
    })
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelText:{
    fontWeight: '600',
    marginBottom: 10,
    color: colors.white
  },
  inputFieldTextInput:{
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  showButton:{
    position: 'absolute',
    right: 0
  },
  showHideText:{
    color: colors.white,
    fontWeight: '700'
  }
});

export default InputField;
