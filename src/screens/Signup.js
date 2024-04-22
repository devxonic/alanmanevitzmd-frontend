import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Link from '../components/common/Link';
import Heading from '../components/common/Heading';
import ButtonDisabled from '../components/common/ButtonDisabled';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [selectedRole, setSelectedRole] = useState('patient');
  const handleRoleSelection = role => {
    setSelectedRole(role);
  };
  const handlePress = () => {
    navigation.navigate('signin');
  };

  const handleBackPress = () => {
    navigation.navigate('signin');
  };

  const renderRoleButton = (role, text) => (
    <TouchableOpacity
      style={[
        styles.button,
        selectedRole === role && {borderWidth: 1, borderColor: '#000'},
      ]}
      onPress={() => handleRoleSelection(role)}>
      <Text
        style={[
          styles.buttonText,
          selectedRole === role && {color: '#160846'},
        ]}>
        {text}
      </Text>
      {selectedRole === role && (
        <Image source={require('../images/tick.png')} style={styles.tickMark} />
      )}
    </TouchableOpacity>
  );
  return (
    <View style={styles.parent}>
      <View style={styles.firstChild}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('../images/back.png')} />
        </TouchableOpacity>
        <Link text="Sign In" onPress={handlePress} />
      </View>
      <View style={styles.secondChild}>
        <Heading text="Create Your" />
        <Heading text="Account" />
      </View>
      <View>
        <View style={styles.buttonCon}>
          {renderRoleButton('patient', 'Patient')}
          {renderRoleButton('doctor', 'Doctor')}
          {renderRoleButton('nurse', 'Nurse')}
        </View>
        <View>
          {selectedRole === 'patient' && (
            <>
              <Input placeholder="Enter Patient Name" />
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
            </>
          )}
          {selectedRole === 'doctor' && (
            <>
              <Input placeholder="Enter Doctor Name" />
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
            </>
          )}
          {selectedRole === 'nurse' && (
            <>
              <Input placeholder="Enter Nurse Name " />
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
            </>
          )}
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
  tickMark: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});

export default SignUp;
