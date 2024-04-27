import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Carousel from '../components/common/Carousel';
import {useNavigation} from '@react-navigation/native';

const Onboard = () => {
  const navigation = useNavigation();
  const handleStartSubmit = () => {
    navigation.navigate('signin');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainCon}>
        <View style={styles.childOne}>
          <Image source={require('../images/logo.png')} />
        </View>
        <View style={styles.childTwo}>
          <Carousel />
        </View>
        <View style={styles.childThree}>
          <TouchableOpacity style={styles.buttonOne}>
            <Text style={styles.buttonOneText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTwo}
            onPress={handleStartSubmit}>
            <Text style={styles.buttonTwoText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lastChild}>
          <Text>Health Comes First, Join In!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboard;
const styles = StyleSheet.create({
  mainCon: {
    height: '100%',
    marginVertical: 50,
  },
  childOne: {
    alignSelf: 'center',
  },
  childTwo: {
    height: 400,
    marginVertical: 35,
  },
  childThree: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  lastChild: {
    alignSelf: 'center',
    marginTop: 15,
  },
  buttonOne: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#E7F0EE',
    width: '45%',
  },
  buttonOneText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'silver',
  },
  buttonTwo: {
    backgroundColor: '#116754',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    width: '45%',
  },
  buttonTwoText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});
