import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import style from 'constants/styles';
import { useSearch } from 'providers/Search';
import Icon from 'widgets/Icon';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';

const SearchBar = ({ placeholder, onSubmit }) => {
  const { text, setText } = useSearch();
  return (
    <View style={style.flexRow}>
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
    width: 343 * SCALE_WIDTH,
    borderBottomWidth: 1 * SCALE_HEIGHT,
    paddingBottom: 5 * SCALE_HEIGHT,
    borderBottomColor: '#707070',
    marginHorizontal: 14 * SCALE_WIDTH,
    marginTop: 12 * SCALE_HEIGHT,
  },
  textInput: {
    marginLeft: 2 * SCALE_WIDTH,
    fontSize: FS(16),
  },
  glass: {
    width: 24 * SCALE_WIDTH,
    height: 24 * SCALE_WIDTH,
  },
});

export default SearchBar;
