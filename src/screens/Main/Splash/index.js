import React, { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { Context as UserContext } from 'context/User';

const Splash = ({ setIsSplash }) => {
  const { getInformation } = useContext(UserContext);
  const dataFetch = () => {
    getInformation();
  };
  useEffect(() => {
    dataFetch();
    const loading = setTimeout(() => setIsSplash(false), 1500);
    return () => clearTimeout(loading);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Campus dot</Text>
    </View>
  );
};

export default Splash;
