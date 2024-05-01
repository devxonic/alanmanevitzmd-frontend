import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const ConfirmBooking = () => {
  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedBtn, setSelectedBtn] = useState('cash');
  const [modalVisible, setModalVisible] = useState(false);

  const handleGenderSelect = gender => {
    setSelectedGender(gender);
  };

  const handleBtnSelect = money => {
    setSelectedBtn(money);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.mainHeading}>Confirm Booking</Text>
      </View>
      <View style={styles.childTwo}>
        <Text style={styles.commonTopHead}>Personel Details</Text>
        <Text>We share this information with the doctor</Text>
        <Input placeholder="Patient's Name" />
        <Input placeholder="Mobile Number" />
        <Text style={styles.gender}>Gender</Text>
        <View style={styles.childTwoLast}>
          <TouchableOpacity
            style={[
              styles.genderMale,
              selectedGender === 'male' && styles.selectedGender,
            ]}
            onPress={() => handleGenderSelect('male')}>
            <Text
              style={[
                styles.genderMaleText,
                selectedGender === 'male' && styles.selectedGenderText,
              ]}>
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderFemale,
              selectedGender === 'female' && styles.selectedGender,
            ]}
            onPress={() => handleGenderSelect('female')}>
            <Text
              style={[
                styles.genderFemaleText,
                selectedGender === 'female' && styles.selectedGenderText,
              ]}>
              Female
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.childThree}>
        <Text style={styles.commonTopHead}>Payment Details</Text>
        <Text>How will you pay for the appointment</Text>
        <TouchableOpacity
          style={[
            styles.bottomBtn,
            selectedBtn === 'cash' && styles.selectedBtmBtn,
          ]}
          onPress={() => {
            handleBtnSelect('cash');
          }}>
          <View style={styles.iconCon}>
            <Image
              source={require('../../images/checked.png')}
              style={styles.icon}
            />
            <Text
              style={[
                styles.bottomBtnText,
                selectedBtn === 'cash' && styles.selectedBtmBtnText,
              ]}>
              Pay Cash at Clinic
            </Text>
          </View>
          <Text
            style={[
              styles.bottomBtnText,
              selectedBtn === 'cash' && styles.selectedBtmBtnText,
            ]}>
            Rs 3000
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.bottomBtn,
            selectedBtn === 'online' && styles.selectedBtmBtn,
          ]}
          onPress={() => {
            handleBtnSelect('online');
          }}>
          <View style={styles.iconCon}>
            <Image
              source={require('../../images/checked.png')}
              style={styles.icon}
            />
            <Text
              style={[
                styles.bottomBtnText,
                selectedBtn === 'online' && styles.selectedBtmBtnText,
              ]}>
              Online Payment
            </Text>
          </View>
          <Text
            style={[
              styles.bottomBtnText,
              selectedBtn === 'online' && styles.selectedBtmBtnText,
            ]}>
            Rs 3000
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button text="Confirm Booking" onPress={openModal} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={require('../../images/checkedTwo.png')}
              style={styles.checkIcon}
            />
            <Text style={styles.modalHead}>Confirmed!</Text>
            <Text style={styles.modalText}>
              Your appointment has been confirmed. We Encourage you to be on
              time in order to mitigate the wastage of time. Thank You!
            </Text>
            <TouchableOpacity style={styles.okButton} onPress={closeModal}>
              <Text style={styles.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  checkIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
    tintColor: 'white',
  },
  modalHead: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  modalText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },

  okButton: {
    backgroundColor: '#116754',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    width: 200,
  },
  okButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  iconCon: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: 'gray',
    marginRight: 10,
  },
  bottomBtnText: {
    color: 'gray',
  },
  selectedBtmBtnText: {
    color: 'darkgreen',
  },
  mainContainer: {
    margin: 15,
    height: '85%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  mainHeading: {
    fontSize: 25,
    color: '#160846',
    textAlign: 'center',
  },
  childTwo: {
    backgroundColor: 'white',
    padding: 15,
    height: 300,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
  childThree: {
    backgroundColor: 'white',
    padding: 15,
    height: 180,
    borderRadius: 10,
    display: 'flex',
  },
  commonTopHead: {
    color: 'darkgreen',
    fontSize: 16,
    fontWeight: '600',
  },
  gender: {
    color: 'darkgreen',
    fontWeight: '500',
  },
  genderFemale: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 5,
    marginLeft: 10,
    backgroundColor: '#E7F0EE',
  },
  genderMale: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 5,
    backgroundColor: '#E7F0EE',
  },
  genderFemaleText: {
    color: 'pink',
    fontWeight: '600',
  },
  genderMaleText: {
    color: 'pink',
    fontWeight: '600',
  },
  selectedGender: {
    backgroundColor: 'silver',
    borderColor: 'darkgreen',
  },
  selectedGenderText: {
    color: 'darkgreen',
  },
  childTwoLast: {
    display: 'flex',
    flexDirection: 'row',
  },
  bottomBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgreen',
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#E7F0EE',
  },
  selectedBtmBtn: {
    borderColor: 'darkgreen',
    borderWidth: 1,
    backgroundColor: 'silver',
  },
});

export default ConfirmBooking;
