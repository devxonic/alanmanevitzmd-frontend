import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import SearchBar from '../common/SearchBar';

const Header = () => {
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
          <Image source={require('../../images/map.png')} />
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
    fontSize: 10,
    color: '#116754',
    fontWeight: '600',
    marginLeft: 4,
  },

  topOneOneHead: {
    fontSize: 8,
    color: 'black',
    marginLeft: 4,
  },
});

export default Header;
