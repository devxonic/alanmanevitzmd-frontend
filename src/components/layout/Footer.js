import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        height: 60,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
      <TouchableOpacity
        onPress={() => navigateToScreen('dashboard')}
        style={{display: 'flex', alignItems: 'center'}}>
        <Image source={require('../../images/home.png')} />
        <Text style={{fontSize: 10}}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen('doctorslist')}
        style={{display: 'flex', alignItems: 'center'}}>
        <Image source={require('../../images/doctorsThree.png')} />
        <Text style={{fontSize: 10}}>Doctors</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen('doctorscategory')}
        style={{display: 'flex', alignItems: 'center'}}>
        <Image source={require('../../images/history.png')} />
        <Text style={{fontSize: 10}}>Category</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
