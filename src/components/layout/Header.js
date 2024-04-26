import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('onboard');
  };
  return (
    <View style={styles.top}>
      <View style={styles.topOne}>
        <View style={styles.topOneOne}>
          <View>
            <Image source={require('../../images/map.png')} />
          </View>
          <View>
            <Text style={styles.topOneOneHead}>Current Location</Text>
            <Text style={styles.topOneOneText}>Pakistan</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
    padding: 5,
  },

  topOne: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topOneOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  topOneOneText: {
    fontSize: 15,
    color: '#116754',
    fontWeight: '600',
    marginLeft: 4,
  },

  topOneOneHead: {
    fontSize: 12,
    color: 'black',
    marginLeft: 4,
  },

  button: {
    backgroundColor: '#116754',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default Header;
