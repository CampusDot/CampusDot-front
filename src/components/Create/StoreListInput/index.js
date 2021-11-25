import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useStoreListCreate } from 'providers/StoreListCreate';

const StoreListInput = () => {
  const { onChangeValue, information } = useStoreListCreate();

  const onChangeTitle = (text) => {
    onChangeValue('title', text);
  };

  const onChangeContent = (text) => {
    onChangeValue('content', text);
  };

  return (
    <View>
      <Text>제목</Text>
      <TextInput
        value={information.title}
        onChangeText={(text) => onChangeTitle(text)}
        placeholder="제목을 적어주세요."
        multiline
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Text>설명</Text>
      <TextInput
        value={information.content}
        onChangeText={(text) => onChangeContent(text)}
        placeholder="설명을 적어주세요."
        multiline
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default StoreListInput;
