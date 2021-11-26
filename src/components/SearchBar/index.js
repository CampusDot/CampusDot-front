import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import style from 'constants/styles';
import { goBack } from 'lib/utils/navigation';
import { useSearch } from 'providers/Search';
import Icon from 'widgets/Icon';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';

const SearchBar = ({ placeholder, onSubmit }) => {
  const { text, setText } = useSearch();
  return (
    <View style={style.flexRow}>
      <TouchableOpacity onPress={goBack}>
        <Icon source={require('public/icons/back.png')} style={style.icons} />
      </TouchableOpacity>
      <View style={[styles.container, style.flexRow]}>
        <Icon source={require('public/icons/reading_glass.png')} style={styles.glass} />
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
    width: 324 * SCALE_WIDTH,
    height: 40 * SCALE_HEIGHT,
    backgroundColor: '#E5E5EC',
    borderRadius: 20 * SCALE_HEIGHT,
    marginTop: 10 * SCALE_HEIGHT,
  },
  textInput: {
    marginLeft: 2 * SCALE_WIDTH,
    fontSize: FS(16),
  },
  glass: {
    width: 24 * SCALE_WIDTH,
    height: 24 * SCALE_WIDTH,
    marginLeft: 10 * SCALE_WIDTH,
  },
});

export default SearchBar;
