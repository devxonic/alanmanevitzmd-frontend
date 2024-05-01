import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {BlogDetails, LabDetails} from '../../../Data';

const Blogs = () => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.mainHeading}>Read Article</Text>
      </View>
      <View>
        <ScrollView style={styles.scroll}>
          {BlogDetails.map((item, index) => (
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
                  <TouchableOpacity style={styles.childThreeThree}>
                    <Text style={styles.childThreeThreeText}>Read More</Text>
                  </TouchableOpacity>
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
    height: 575,
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

  childThreeThree: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 2,
    backgroundColor: '#116754',
    marginTop: 5,
    width: 90,
  },
  childThreeThreeText: {
    color: 'white',
    fontSize: 10,
    marginLeft: 3,
  },
});
export default Blogs;
