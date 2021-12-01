import React, { createContext, useContext, useState } from 'react';
import { Context } from 'context/Auth';
import { navigate } from 'lib/utils/navigation';

const SignContext = createContext(null);
export const useSign = () => useContext(SignContext);

const SignProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSNS, setIsSNS] = useState(false);
  const { signIn, signUp } = useContext(Context);

  const onClickSignIn = async () => {
    await signIn({ email, password });
  };

  const onClickSignUp = async () => {
    await signUp({ email, password, name, college: '연세대학교 신촌캠퍼스' });
    navigate('SignIn');
  };

  const value = {
    email,
    password,
    name,
    isSNS,
    setEmail,
    setPassword,
    setName,
    setIsSNS,
    onClickSignIn,
    onClickSignUp,
  };

  return <SignContext.Provider value={value}>{children}</SignContext.Provider>;
};

export default SignProvider;
