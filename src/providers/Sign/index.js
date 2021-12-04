import React, { createContext, useContext, useState } from 'react';
import { Context as AuthContext } from 'context/Auth';
import { Context as UserContext } from 'context/User';

import { navigate } from 'lib/utils/navigation';

const SignContext = createContext(null);
export const useSign = () => useContext(SignContext);

const SignProvider = ({ children }) => {
  const [information, setInformation] = useState({
    email: '',
    password: '',
    name: '',
    college: '',
    type: '',
    isSNS: false,
  });
  const { signIn, signUp } = useContext(AuthContext);
  const { updateCollege } = useContext(UserContext);

  const [image, setImage] = useState(null);
  const initValue = (email, password, isSNS) => {
    setInformation({ ...information, email, password, isSNS });
  };

  const initCollegeCertify = (email, password, name, college, type) => {
    setInformation({ ...information, email, password, name, college, type });
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
    } else if (type === 'college') {
      setInformation({
        ...information,
        college: value,
      });
    }
  };

  const onClickSignIn = async () => {
    await signIn({ email: information.email, password: information.password });
  };

  const onClickSignUp = async () => {
    // eslint-disable-next-line no-undef
    await signUp({
      email: information.email,
      password: information.password,
      name: information.name,
      college: information.college,
    });
  };
  const onClickCertify = async () => {
    // eslint-disable-next-line no-undef
    const fd = new FormData();
    if (image != null) {
      fd.append('img', {
        name: image.name,
        type: image.type,
        uri: image.uri,
      });
    }
    await updateCollege({ fd });
    navigate('Home');
  };

  const value = {
    information,
    image,
    setImage,
    setInformation,
    initValue,
    onClickSignIn,
    onClickSignUp,
    onChangeValue,
    onClickCertify,
    initCollegeCertify,
  };

  return <SignContext.Provider value={value}>{children}</SignContext.Provider>;
};

export default SignProvider;
