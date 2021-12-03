import React, { createContext, useContext, useState } from 'react';
import { Context as AuthContext } from 'context/Auth';
import { navigate } from 'lib/utils/navigation';
const SignContext = createContext(null);
export const useSign = () => useContext(SignContext);

const SignProvider = ({ children }) => {
  const [information, setInformation] = useState({
    email: '',
    password: '',
    name: '',
    isSNS: false,
  });
  const { signIn, signUp } = useContext(AuthContext);

  const initValue = (email, password, isSNS) => {
    setInformation({ ...information, email, password, isSNS });
  };

  const onChangeValue = (type, value) => {
    if (type === 'email') {
      setInformation({
        ...information,
        email: value,
      });
    } else if (type === 'password') {
      setInformation({
        ...information,
        password: value,
      });
    } else if (type === 'name') {
      setInformation({
        ...information,
        name: value,
      });
    } else if (type === 'isSNS') {
      setInformation({
        ...information,
        isSNS: value,
      });
    }
  };

  const onClickSignIn = async () => {
    await signIn({ email: information.email, password: information.password });
  };

  const onClickSignUp = async () => {
    navigate('School', {
      email: information.email,
      password: information.password,
      name: information.name,
    });
  };

  const value = {
    information,
    setInformation,
    initValue,
    onClickSignIn,
    onClickSignUp,
    onChangeValue,
  };

  return <SignContext.Provider value={value}>{children}</SignContext.Provider>;
};

export default SignProvider;
