import React from 'react';
import SignUp from 'templates/Auth/SignUp';
import { Provider } from 'context/Auth';

export default () => {
  return (
    <Provider>
      <SignUp />
    </Provider>
  );
};
