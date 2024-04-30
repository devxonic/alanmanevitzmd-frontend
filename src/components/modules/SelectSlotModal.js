import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../layout/Header';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';

const CustomButton = ({title, date, onPress, isSelected}) => {
  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.selectedButton]}
      onPress={onPress}>
      <Text
        style={[styles.buttonText, isSelected && styles.selectedButtonText]}>
        {title}
      </Text>
      <Text
        style={[styles.buttonDate, isSelected && styles.selectedButtonDate]}>
        {date}
      </Text>
    </TouchableOpacity>
  );
};

const TimeSlotsModal = ({modalVisible, selectedDate, setModalVisible}) => {
  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity style={styles.timeSlotButton}>
        <Text style={styles.timeSlotButtonText}>6:00 PM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.timeSlotButton}>
        <Text style={styles.timeSlotButtonText}>7:00 PM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.timeSlotButton}>
        <Text style={styles.timeSlotButtonText}>8:00 PM</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.timeSlotButton}>
        <Text style={styles.timeSlotButtonText}>9:00 PM</Text>
      </TouchableOpacity>
    </View>
  );
};

const SelectSlotModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedDate, setSelectedDate] = useState('27');

  const handleDatePress = date => {
    setSelectedDate(date);
    setModalVisible(true);
  };

  const navigation = useNavigation();
  const navigateBooking = () => {
    navigation.navigate('booking');
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.mainHeading}>Select a Time Slot</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.childOne}>
          <Image source={require('../../images/doctorsFour.png')} />
        </View>
        <View style={styles.childTwo}>
          <View style={styles.childTwoOne}>
            <Text style={styles.heading}>Doctors Name Here</Text>
            <Text style={styles.badge}>Online</Text>
          </View>
          <View style={styles.childTwoTwo}>
            <Text style={styles.light}>MD, MBBS, MDS</Text>
            <Text style={styles.light}>10+ Years Expeirence</Text>
          </View>
          <View style={styles.childThree}>
            <TouchableOpacity style={styles.childThreeThree}>
              <Image source={require('../../images/homeOne.png')} />
              <Text style={styles.childThreeThreeText}>Book Appointment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.childThreeThree}>
              <Image source={require('../../images/homeOne.png')} />
              <Text style={styles.childThreeThreeText}>Consult Online</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.heading}>Available Days</Text>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal>
          {/* Date buttons */}
          <CustomButton
            title="Tomorrow"
            date="27"
            onPress={() => handleDatePress('27')}
            isSelected={selectedDate === '27'}
          />
          <CustomButton
            title="Tomorrow"
            date="28"
            onPress={() => handleDatePress('28')}
            isSelected={selectedDate === '28'}
          />
          <CustomButton
            title="Tomorrow"
            date="29"
            onPress={() => handleDatePress('29')}
            isSelected={selectedDate === '29'}
          />
          <CustomButton
            title="Tomorrow"
            date="30"
            onPress={() => handleDatePress('30')}
            isSelected={selectedDate === '30'}
          />
          <CustomButton
            title="Tomorrow"
            date="31"
            onPress={() => handleDatePress('31')}
            isSelected={selectedDate === '31'}
          />
        </ScrollView>
      </View>
      <View>
        <Text>Available Timings</Text>
        <TimeSlotsModal
          modalVisible={modalVisible}
          selectedDate={selectedDate}
          setModalVisible={setModalVisible}
        />
      </View>
      <View>
        <Button text="Next" onPress={navigateBooking} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 25,
    color: '#160846',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
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
  mainContainer: {
    margin: 15,
    height: 500,
    display: 'flex',
    justifyContent: 'space-between',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  timeSlotButton: {
    backgroundColor: '#E1E1E1',
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginRight: 10,
  },
  timeSlotButtonText: {
    color: 'green',
    fontWeight: '500',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#E1E1E1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    color: 'green',
    textAlign: 'center',
  },
  buttonDate: {
    margin: 8,
    color: 'green',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
  },
  selectedButton: {
    backgroundColor: 'silver',
    borderWidth: 1,
    borderColor: 'green',
  },
  selectedButtonText: {
    color: 'darkgreen',
  },
  modalContainer: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  heading: {
    marginBottom: 15,
  },
});

export default SelectSlotModal;
