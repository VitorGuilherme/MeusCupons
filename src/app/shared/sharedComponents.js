import React, {useState} from 'react';
import {TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';

const SharedTextInput = ({placeholder, secureTextEntry}) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="rgba(255, 255, 255, 0.5)"
      style={styles.inputText}
    />
  );
};

const SharedButton = ({color, title, onPress, textColor, hasBorder}) => {
  const [borderStyle, setBorderStyle] = useState(
    hasBorder ? styles.buttonWithBorder : null,
  );

  return (
    <TouchableOpacity
      style={[styles.buttonStyle, {backgroundColor: color}, borderStyle]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputText: {
    minWidth: '85%',
    height: 50,
    fontSize: 20,
    alignItems: 'center',
    color: 'rgba(255, 255, 255, 1)',
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 35,
    padding: 5,
  },

  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    padding: 10,
    borderRadius: 8,
  },

  buttonWithBorder: {
    borderWidth: 1,
    borderColor: '#fff'
  }
});

export {SharedTextInput, SharedButton};
