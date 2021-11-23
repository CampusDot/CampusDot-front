import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import style from 'constants/styles';
import { goBack } from 'lib/utils/navigation';

const SearchBar = ({ placeholder }) => {
  return (
    <View style={[style.flexRow]}>
      <TouchableOpacity onPress={goBack}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#999999"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 324,
    height: 40,
    backgroundColor: '#E5E5EC',
    borderRadius: 20,
    justifyContent: 'center',
  },
  textInput: {
    marginLeft: 20,
  },
});

export default SearchBar;
