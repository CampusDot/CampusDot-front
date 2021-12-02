import React from 'react';
import { View, TextInput } from 'react-native';
import { useSign } from 'providers/Sign';

const SignUpInput = () => {
  const { information, onChangeValue } = useSign();

  return (
    <View>
      {information.isSNS ? null : (
        <>
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
        </>
      )}
      <TextInput
        onChangeText={(text) => onChangeValue('name', text)}
        autoCorrect={false}
        placeholder="name"
      />
    </View>
  );
};

export default SignUpInput;
