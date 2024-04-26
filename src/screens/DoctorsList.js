import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import Header from '../components/layout/Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DoctorDetails} from '../../Data';

const DoctorsList = () => {
  return (
    <View style={styles.main}>
      <Header />
      <View>
        <ScrollView>
          {DoctorDetails.map((item, index) => (
            <View style={styles.container} key={index}>
              <View style={styles.childOne}>
                <Image source={item.image} />
              </View>
              <View style={styles.childTwo}>
                <View style={styles.childTwoOne}>
                  <Text style={styles.heading}>{item.doctorname}</Text>
                  <Text style={styles.badge}>Online</Text>
                </View>
                <View style={styles.childTwoTwo}>
                  <Text style={styles.light}>{item.degree}</Text>
                  <Text style={styles.light}>{item.experience}</Text>
                </View>
                <View style={styles.childThree}>
                  <TouchableOpacity style={styles.childThreeThree}>
                    <Image source={require('../images/homeOne.png')} />
                    <Text style={styles.childThreeThreeText}>
                      Book Appointment
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.childThreeThree}>
                    <Image source={require('../images/homeOne.png')} />
                    <Text style={styles.childThreeThreeText}>
                      Consult Online
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
  heading: {
    fontSize: 16,
    color: '#116754',
    fontWeight: '600',
  },
  main: {
    margin: 10,
    backgroundColor: '#E5EEEC',
  },
  childOne: {
    width: '25%',
  },
  childTwo: {
    width: '70%',
  },
  childTwoOne: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  badge: {
    borderRadius: 5,
    padding: 3,
    color: 'white',
    fontSize: 7,
    backgroundColor: '#116754',
  },
  light: {
    backgroundColor: '#E7F0EE',
    color: '#116754',
    padding: 5,
    borderRadius: 2,
    margin: 5,
    fontSize: 10,
  },
  childTwoTwo: {
    display: 'flex',
    flexDirection: 'row',
  },
  childThree: {
    display: 'flex',
    flexDirection: 'row',
  },
  childThreeThree: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 2,
    backgroundColor: '#116754',
    margin: 5,
  },
  childThreeThreeText: {
    color: 'white',
    fontSize: 10,
    marginLeft: 3,
  },
});

export default DoctorsList;
