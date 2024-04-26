import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {DashboardCarouselData} from '../../../Data';

const CarouselDashboard = () => {
  return (
    <Swiper paginationEnabled loop>
      {DashboardCarouselData.map((item, index) => (
        <View key={index} style={styles.slide}>
          <View style={styles.leftchild}>
            <View style={styles.leftchildOne}>
              <Text style={styles.heading}>{item.heading}</Text>
              <Image
                source={require('../../images/bulb.png')}
                style={styles.icon}
              />
            </View>
            <Text style={styles.text}>{item.text}</Text>
          </View>
          <View style={styles.rightchild}>
            <Image source={item.image} />
          </View>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  leftchild: {
    width: '80%',
  },
  leftchildOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#160846',
  },
  text: {
    fontSize: 7,
  },
});

export default CarouselDashboard;
