import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CarouselDashboard from '../components/common/CarouselDashboard';
import Header from '../components/layout/Header';
import {useNavigation} from '@react-navigation/native';
import Footer from '../components/layout/Footer';

const Dashboard = () => {
  const navigation = useNavigation();
  const handleDoctorCategory = () => {
    navigation.navigate('doctorscategory');
  };

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.carousel}>
          <CarouselDashboard />
        </View>
        <TouchableOpacity onPress={handleDoctorCategory}>
          <View style={styles.thirdchild}>
            <View style={styles.thirdchildOne}>
              <Image source={require('../images/doctor.png')} />
              <Text style={styles.heading}>Consult Doctors</Text>
              <Text style={styles.text}>
                Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
              </Text>
            </View>
            <View>
              <Image source={require('../images/doctors.png')} />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.fourthChild}>
          <View style={styles.fourthChildOne}>
            <View>
              <Text style={styles.heading}>Diagnostics</Text>
              <Text style={styles.text}>
                Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
              </Text>
            </View>
            <View style={styles.fourthChildOneTwo}>
              <Image source={require('../images/testube.png')} />
              <Image source={require('../images/hand.png')} />
            </View>
          </View>
          <View style={styles.fourthChildTwo}>
            <View>
              <Text style={styles.headingRight}>Hire Nurses</Text>
              <Text style={styles.textRight}>
                Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
              </Text>
            </View>
            <View style={styles.fourthChildOneTwo}>
              <Image source={require('../images/doctorsTwo.png')} />
              <Image source={require('../images/symbol.png')} />
            </View>
          </View>
        </View>
        <View style={styles.fifthChild}>
          <View>
            <Image source={require('../images/report.png')} />
          </View>
          <View>
            <Text style={styles.heading}>Diagnostics</Text>
            <Text style={styles.text}>
              Lorem Ipsum Dolor Sit Amet, Lorem Ipsum Dolor Sit Amet
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Upload Report</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  carousel: {
    height: 100,
  },
  main: {
    backgroundColor: '#E7F0EE',
    height: '100%',
  },

  top: {
    display: 'flex',
    flexDirection: 'column',
    margin: 5,
    padding: 5,
  },

  topOne: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  topOneOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  topOneOneText: {
    fontSize: 10,
    color: '#116754',
    fontWeight: '600',
    marginLeft: 4,
  },

  topOneOneHead: {
    fontSize: 8,
    color: 'black',
    marginLeft: 4,
  },

  thirdchild: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#5B8F6B',
    display: 'flex',
    flexDirection: 'row',
  },
  thirdchildOne: {
    width: '50%',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#160846',
  },
  text: {
    fontSize: 7,
    color: 'white',
  },
  headingRight: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#160846',
    textAlign: 'right',
  },
  textRight: {
    fontSize: 7,
    color: 'white',
    textAlign: 'right',
  },
  fourthChild: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  fourthChildOne: {
    backgroundColor: '#D06161',
    padding: 10,
    borderRadius: 5,
    width: '47%',
  },
  fourthChildOneTwo: {
    marginTop: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fourthChildTwo: {
    backgroundColor: '#69AEE0',
    padding: 10,
    borderRadius: 5,
    width: '47%',
  },
  fifthChild: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#8A69B5',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    height: 20,
    justifyContent: 'center',
    padding: 3,
  },
  buttonText: {
    color: '#8A69B5',
    fontSize: 8,
    fontWeight: '600',
  },
});
export default Dashboard;
