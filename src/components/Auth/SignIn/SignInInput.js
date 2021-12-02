import React from 'react';
import { View, TextInput } from 'react-native';
import { useSign } from 'providers/Sign';

const SignInInput = () => {
  const { onChangeValue } = useSign();

  return (
    <View>
      <TextInput
        onChangeText={(text) => onChangeValue('email', text)}
        autoCorrect={false}
        placeholder="email"
      />
      <TextInput
        onChangeText={(text) => onChangeValue('password', text)}
        autoCorrect={false}
        placeholder="password"
      />
    </View>
  );
};

export default SignInInput;
