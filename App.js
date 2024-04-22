import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import SignUp from './src/screens/Signup.js';
import SignIn from './src/screens/Signin.js';
import RecoverAccount from './src/screens/RecoverAccount.js';
import Validate from './src/screens/Validate.js';
import Onboard from './src/screens/Onboard.js';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="onboard"
          component={Onboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signin"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="recoveraccount"
          component={RecoverAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="validate"
          component={Validate}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
