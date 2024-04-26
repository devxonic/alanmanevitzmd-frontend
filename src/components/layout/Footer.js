import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Dashboard from '../../screens/Dashboard';

const Footer = () => {
  const [selectedTab, setSelectedIndex] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? <Dashboard /> : 'page not found'}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.buttonTab}
          onPress={() => {
            setSelectedIndex(0);
          }}>
          <Image
            source={require('../../images/home.png')}
            style={styles.buttonTabIcon}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.buttonTab}
          onPress={() => {
            setSelectedIndex(1);
          }}>
          <Image
            source={
              selectedTab == 1
                ? require('../../images/home.png')
                : require('../../images/home.png')
            }
            style={styles.buttonTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTab}
          onPress={() => {
            setSelectedIndex(2);
          }}>
          <Image
            source={
              selectedTab == 2
                ? require('../../images/home.png')
                : require('../../images/home.png')
            }
            style={styles.buttonTabIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTab}
          onPress={() => {
            setSelectedIndex(3);
          }}>
          <Image
            source={
              selectedTab == 3
                ? require('../../images/home.png')
                : require('../../images/home.png')
            }
            style={styles.buttonTabIcon}
          />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomView: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  buttonTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonTabIcon: {
    width: 24,
    height: 24,
  },
});
