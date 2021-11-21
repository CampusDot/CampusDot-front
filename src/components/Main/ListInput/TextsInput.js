import React, { useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import { useListCreate } from 'providers/ListCreate';

const TextsInput = () => {
  const { informationRef, title, setTitle, content, setContent } = useListCreate();

  const onChangeTitle = (text) => {
    setTitle(text);
    informationRef.title = text;
  };

  const onChangeContent = (text) => {
    setContent(text);
    informationRef.content = text;
  };

  useEffect(() => {
    setTitle(informationRef.title);
    setContent(informationRef.content);
  }, []);

  return (
    <View>
      <Text>제목</Text>
      <TextInput
        value={title}
        onChangeText={(text) => onChangeTitle(text)}
        placeholder="데일리를 기록해 주세요."
        multiline
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>설명</Text>
      <TextInput
        value={content}
        onChangeText={(text) => onChangeContent(text)}
        placeholder="데일리를 기록해 주세요."
        multiline
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

/*
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
}); */

export default TextsInput;
