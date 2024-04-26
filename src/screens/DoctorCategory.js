import {View} from 'react-native';
import React from 'react';
import Card from '../components/common/Card';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const DoctorsCategory = () => {
  return (
    <View style={{height: '100%'}}>
      <Header />
      <Card />
      <Footer />
    </View>
  );
};

export default DoctorsCategory;
