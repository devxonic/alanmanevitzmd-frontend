import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Link from '../components/common/Link';
import Heading from '../components/common/Heading';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation();
  const handleCreateAccountPress = () => {
    navigation.navigate('signup');
  };

  const handleBackPress = () => {
    navigation.navigate('onboard');
  };

  const handleForgotPress = () => {
    navigation.navigate('recoveraccount');
  };
  return (
    <View style={styles.parent}>
      <View style={styles.firstChild}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../images/back.png')} />
        </TouchableOpacity>
        <Link text="Create Account" onPress={handleCreateAccountPress} />
      </View>
      <View style={styles.secondChild}>
        <Heading text="Sign In To Your" />
        <Heading text="Account" />
      </View>
      <View>
        <View>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
          />
          <Link
            text="Forgot Password?"
            style={styles.link}
            onPress={handleForgotPress}
          />
        </View>
        <View style={styles.bottomCon}>
          <Button text="Sign In" />
          <Text>Or Create With</Text>
          <TouchableOpacity>
            <Image source={require('../images/google.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  firstChild: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  bottomCon: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 150,
  },

  secondChild: {
    marginVertical: 40,
  },

  link: {
    alignSelf: 'flex-end',
  },
});

export default SignIn;
