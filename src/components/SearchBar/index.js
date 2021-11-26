import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import style from 'constants/styles';
import { goBack } from 'lib/utils/navigation';
import { useSearch } from 'providers/Search';
import Icon from 'widgets/Icon';

const SearchBar = ({ placeholder, onSubmit }) => {
  const { text, setText } = useSearch();
  return (
    <View style={[style.flexRow]}>
      <TouchableOpacity onPress={goBack}>
        <Icon source={require('public/icons/back.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#999999"
          autoCorrect={false}
          autoCapitalize="none"
          value={text}
          onChangeText={(input) => setText(input)}
          style={styles.textInput}
          onSubmitEditing={onSubmit}
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
  backIcon: {
    width: 40,
    height: 40,
  },
});

export default SearchBar;
