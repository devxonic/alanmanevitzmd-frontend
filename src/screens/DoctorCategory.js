import {SafeAreaView, View} from 'react-native';
import React from 'react';
import Card from '../components/common/Card';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const DoctorsCategory = () => {
  return (
    <SafeAreaView>
      <View style={{height: '100%'}}>
        <Header />
        <Card />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

export default DoctorsCategory;
