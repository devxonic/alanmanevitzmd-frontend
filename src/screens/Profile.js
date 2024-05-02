import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={{flex: 1, borderWidth: 1, margin: 2}}>
      <View>
        <Image source={require('../images/doctorsFour.png')} />
      </View>
      <View>
        <Text>Patient Name Here</Text>
        <Text>Living Healthy, Living Happy!</Text>
      </View>
      <View>
        <View>
          <Text>285</Text>
          <Text>Appointments</Text>
        </View>
        <View>
          <Text>285</Text>
          <Text>Completed</Text>
        </View>
        <View>
          <Text>285</Text>
          <Text>Pending</Text>
        </View>
        <TouchableOpacity>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
