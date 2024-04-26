import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
const SearchBar = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="search for doctors"
        onChangeText={setSearch}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E7F0EE',
    flexDirection: 'row',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  searchIcon: {
    alignSelf: 'center',
    height: 20,
    width: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;
