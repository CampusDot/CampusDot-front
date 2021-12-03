import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { useSign } from 'providers/Sign';

const Photo = () => {
  const { onChangeValue } = useSign();

  return (
    <View>
      <Text>학교</Text>
      <TextInput
        onChangeText={(text) => onChangeValue('password', text)}
        autoCorrect={false}
        placeholder="password"
      />
    </View>
  );
};

export default Photo;
