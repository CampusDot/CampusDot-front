import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'context/GoogleMap';
import GoogleMap from 'templates/Main/GoogleMap';

const Main = () => {
  return (
    <Provider>
      <GoogleMap />
    </Provider>
  );
};

export default Main;
