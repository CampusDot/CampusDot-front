import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { Context as UserContext } from 'context/User';

const ChallengeLists = () => {
  const { getChallengeLists } = useContext(UserContext);
  useEffect(() => {
    getChallengeLists();
  }, []);

  return <Text>challengeLists</Text>;
};

export default ChallengeLists;
