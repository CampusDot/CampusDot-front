import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { Context as UserContext } from 'context/User';

const MyStoreLists = () => {
  const { getStoreLists } = useContext(UserContext);
  useEffect(() => {
    getStoreLists();
  }, []);
  return <Text>MyStoreLists</Text>;
};

export default MyStoreLists;
