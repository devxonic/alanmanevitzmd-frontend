import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonDisabled = ({props, text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...props}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#E7F0EE',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'silver',
  },
});

export default ButtonDisabled;
