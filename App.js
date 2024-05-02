import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import SignUp from './src/screens/Signup.js';
import SignIn from './src/screens/Signin.js';
import RecoverAccount from './src/screens/RecoverAccount.js';
import Validate from './src/screens/Validate.js';
import Onboard from './src/screens/Onboard.js';
import Dashboard from './src/screens/Dashboard.js';
import DoctorsCategory from './src/screens/DoctorCategory.js';
import DoctorsList from './src/screens/DoctorsList.js';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Footer from './src/components/layout/Footer.js';
import ConfirmBooking from './src/components/modules/ConfirmBooking.js';
import SelectSlot from './src/screens/SelectSlot.js';
import Diagnostics from './src/screens/Diagnostics.js';
import NotificationScreen from './src/screens/NotificationScreen.js';
import BlogScreen from './src/screens/BlogScreen.js';
import Header from './src/components/layout/Header.js';
import Profile from './src/screens/Profile.js';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: () => <Header />,
          }}>
          {/* <Stack.Screen
            name="notification"
            component={NotificationScreen}
            options={{headerShown: false}}
          /> */}
          {/* <Stack.Screen
            name="blog"
            component={BlogScreen}
            options={{headerShown: false}}
          /> */}
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
          <Stack.Screen
            name="dashboard"
            component={Dashboard}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="doctorscategory"
            component={DoctorsCategory}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="doctorslist"
            component={DoctorsList}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="selectslot"
            component={SelectSlot}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="booking"
            component={ConfirmBooking}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="diagnostics"
            component={Diagnostics}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
