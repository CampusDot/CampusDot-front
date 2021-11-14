import React from 'react';
import SignIn from 'templates/Auth/SignIn';
import { Provider } from 'context/Auth';

export default () => {
  return (
    <Provider>
      <SignIn />
    </Provider>
  );
};
