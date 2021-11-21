import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import style from 'constants/styles';

const CreateListSearchHeader = ({ setIsSearch }) => {
  const [text, setText] = useState();
  return (
    <View style={[styles.container, style.flexRow]}>
      <TouchableOpacity
        onPress={() => {
          setIsSearch(false);
        }}
      >
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <TextInput
        value={text}
        onChangeText={(txt) => setText(txt)}
        placeholder="가게를 검색해주세요."
        multiline
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
  },
  profileImg: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
});

export default CreateListSearchHeader;
