import React, {useState} from 'react';
import {TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';

// const [isPassword, setIsPassword] = useState('');
const SharedTextInput = ({
  placeholder,
  secureTextEntry,
  length,
  value,
  onChangeText,
  onBlur,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="rgba(255, 255, 255, 0.5)"
      style={[styles.inputText]}
      maxLength={length}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
};

const SharedButton = ({
  color,
  backgroundColor,
  title,
  onPress,
  hasBorder,
  fontSize,
  padding,
}) => {
  const [borderStyle, setBorderStyle] = useState(
    hasBorder ? styles.buttonWithBorder : null,
  );

  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        {backgroundColor: backgroundColor, padding: padding},
        borderStyle,
      ]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputText: {
    minWidth: '80%',
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
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 8,
  },

  buttonWithBorder: {
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export {SharedTextInput, SharedButton};
