import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Context } from 'context/Auth';
import { goBack } from 'lib/utils/navigation';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPasswrod] = useState('');
  const [name, setName] = useState('');
  const { signUp } = useContext(Context);

  const onClickSignIn = async () => {
    await signUp({ email, password, name, college: '연세대학교 신촌캠퍼스' });
  };

  return (
    <View style={{ marginTop: 100 }}>
      <TextInput onChangeText={(text) => setEmail(text)} autoCorrect={false} placeholder="email" />
      <TextInput
        onChangeText={(text) => setPasswrod(text)}
        autoCorrect={false}
        placeholder="password"
      />
      <TextInput onChangeText={(text) => setName(text)} autoCorrect={false} placeholder="name" />
      <Button title="Signup" onPress={onClickSignIn} />
      <Button title="back" onPress={goBack} />
    </View>
  );
};

export default SignUp;
