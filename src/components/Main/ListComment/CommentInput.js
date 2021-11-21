import React from 'react';
import { View, TextInput } from 'react-native';
import { useListCreate } from 'providers/ListCreate';

const CommentInput = () => {
  const { currentComment, setCurrentComment } = useListCreate();
  return (
    <View>
      <TextInput
        value={currentComment}
        onChangeText={(txt) => setCurrentComment(txt)}
        placeholder="설명을 해주세요."
        multiline
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default CommentInput;
