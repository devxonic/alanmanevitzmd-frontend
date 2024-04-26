import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {CardData} from '../../../Data';

const Card = () => {
  return (
    <>
      <View style={styles.main}>
        {CardData.map((item, index) => (
          <View style={styles.card} key={index}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    padding: 10,
  },

  image: {
    height: 60,
    width: 60,
  },

  text: {
    fontSize: 16,
  },
});

export default Card;
