import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {CardData} from '../../../Data';
import {useNavigation} from '@react-navigation/native';
import {getCategories} from '../../api/auth';

const Card = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleDoctorList = () => {
    navigation.navigate('doctorslist');
  };
  return (
    <>
      <View style={styles.main}>
        {categories.map((category, index) => (
          <TouchableOpacity onPress={handleDoctorList} key={index}>
            <View style={styles.card}>
              <Image
                source={require('../../images/eyeTwo.png')}
                style={styles.image}
              />
              <Text style={styles.text}>{category.name}</Text>
            </View>
          </TouchableOpacity>
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
    margin: 10,
  },
  card: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    padding: 10,
    height: 100,
    width: 100,
  },

  image: {
    height: 60,
    width: 60,
  },

  text: {
    fontSize: 12,
  },
});

export default Card;
