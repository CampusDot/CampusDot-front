import React from 'react';
import Icon from 'widgets/Icon';

const SignLogo = ({ logoStyle }) => {
  return <Icon source={require('public/icons/sign_logo.png')} style={logoStyle} />;
};

export default SignLogo;
