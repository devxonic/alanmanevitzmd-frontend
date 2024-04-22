import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {carouselData} from '../../../Data';

const ImageTextCarousel = () => {
  return (
    <Swiper style={styles.container} paginationEnabled loop>
      {carouselData.map((item, index) => (
        <View key={index} style={styles.slide}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 340,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

export default ImageTextCarousel;
