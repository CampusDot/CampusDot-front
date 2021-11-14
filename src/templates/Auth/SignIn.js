import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { Context } from 'context/Auth';
import { navigate } from 'lib/utils/navigation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPasswrod] = useState('');
  const { signIn } = useContext(Context);

  const onClickSignIn = async () => {
    await signIn({ email, password });
  };

  return (
    <View style={{ marginTop: 100 }}>
      <TextInput onChangeText={(text) => setEmail(text)} autoCorrect={false} placeholder="email" />
      <TextInput
        onChangeText={(text) => setPasswrod(text)}
        autoCorrect={false}
        placeholder="password"
      />
      <Button title="sign in" onPress={onClickSignIn} />
      <Button title="go to sign up" onPress={() => navigate('SignUp')} />
    </View>
  );
};

export default SignIn;
