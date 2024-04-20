import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Link from '../components/common/Link';
import Heading from '../components/common/Heading';
import ButtonDisabled from '../components/common/ButtonDisabled';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

const SignIn = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.firstChild}>
        <TouchableOpacity>
          <Image source={require('../images/back.png')} />
        </TouchableOpacity>
        <Link text="Sign In" />
      </View>
      <View style={styles.secondChild}>
        <Heading text="Create Your" />
        <Heading text="Account" />
      </View>
      <View>
        <View style={styles.buttonCon}>
          <ButtonDisabled text="Patient" style={styles.button} />
          <ButtonDisabled text="Doctor" style={styles.button} />
          <ButtonDisabled text="Nurse" style={styles.button} />
        </View>
        <View>
          <Input placeholder="Username" />
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
          <Input
            placeholder="Confirm Password"
            secureTextEntry={true}
            textContentType="password"
          />
        </View>
        <View style={styles.bottomCon}>
          <Button text="Create Account" />
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

  button: {},
  buttonCon: {
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
});

export default SignIn;
