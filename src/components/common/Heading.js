import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Heading = ({text}) => {
  return <Text style={styles.heading}>{text}</Text>;
};
const styles = StyleSheet.create({
  heading: {
    color: '#160846',
    fontSize: 30,
    fontWeight: '600',
  },
});

export default Heading;
