import React, { useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { useSign } from 'providers/Sign';

const SignUpInput = ({ email, password, isSNS }) => {
  const { setEmail, setPassword, setName, setIsSNS } = useSign();
  useEffect(() => {
    setEmail(email);
    setPassword(password);
    setIsSNS(isSNS);
  }, []);
  return (
    <View>
      {isSNS ? null : (
        <View>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            autoCorrect={false}
            placeholder="email"
          />
          <TextInput
            onChangeText={(text) => setPassword(text)}
            autoCorrect={false}
            placeholder="password"
          />
        </View>
      )}
      <TextInput onChangeText={(text) => setName(text)} autoCorrect={false} placeholder="name" />
    </View>
  );
};

export default SignUpInput;
