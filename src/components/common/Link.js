import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Link = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.link} onPress={onPress}>
      <Text style={styles.linkText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {},
  linkText: {
    color: '#116754',
    fontWeight: '600',
  },
});

export default Link;
