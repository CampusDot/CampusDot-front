import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const Splash = ({ setIsSplash }) => {
  useEffect(() => {
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
