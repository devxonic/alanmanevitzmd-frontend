import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {NotificationDetails} from '../../../Data';

const Notification = () => {
  return (
    <View style={styles.main}>
      <View>
        <ScrollView style={styles.scroll}>
          {NotificationDetails.map((item, index) => (
            <TouchableOpacity key={index}>
              <View style={styles.container}>
                <View style={styles.childOne}>
                  <Image source={item.image} />
                </View>
                <View style={styles.childTwo}>
                  <View style={styles.childTwoOne}>
                    <Text style={styles.heading}>{item.heading}</Text>
                  </View>
                  <View>
                    <Text style={styles.locdes}>{item.text}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
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
    height: 575,
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
  heading: {
    fontSize: 20,
    color: '#160846',
    fontWeight: '500',
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

  childTwoTwo: {
    display: 'flex',
    flexDirection: 'row',
  },
});
export default Notification;
