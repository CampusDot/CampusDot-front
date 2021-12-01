import React from 'react';
import { View, TextInput } from 'react-native';
import { useSign } from 'providers/Sign';

const SignInInput = () => {
  const { setEmail, setPassword } = useSign();

  return (
    <View>
      <TextInput onChangeText={(text) => setEmail(text)} autoCorrect={false} placeholder="email" />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        autoCorrect={false}
        placeholder="password"
      />
    </View>
  );
};

export default SignInInput;
