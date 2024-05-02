import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {LabDetails} from '../../../Data';
import Footer from '../layout/Footer';

const LabsNearBy = () => {
  return (
    <View>
      <View style={styles.main}>
        <View>
          <Text style={styles.mainHeading}>Confirm Booking</Text>
        </View>
        <View>
          <ScrollView style={styles.scroll}>
            {LabDetails.map((item, index) => (
              <TouchableOpacity key={index}>
                <View style={styles.container}>
                  <View style={styles.childOne}>
                    <Image source={item.image} />
                  </View>
                  <View style={styles.childTwo}>
                    <View style={styles.childTwoOne}>
                      <Text style={styles.heading}>{item.name}</Text>
                      <Text style={styles.badge}>AVAILABLE</Text>
                    </View>
                    <View style={styles.childTwoTwo}>
                      <Text style={styles.light}>{item.test}</Text>
                      <Text style={[styles.light, styles.lightTwo]}>
                        {item.time}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.loc}>Location:</Text>
                      <Text style={styles.locdes}>{item.location}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },

  loc: {
    color: 'silver',
    fontSize: 12,
    fontWeight: '700',
  },

  locdes: {
    fontSize: 12,
  },
  mainHeading: {
    fontSize: 25,
    color: '#160846',
    marginVertical: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  scroll: {
    height: 520,
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
    fontSize: 10,
    marginVertical: 5,
  },
  lightTwo: {
    marginLeft: 5,
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
export default LabsNearBy;
