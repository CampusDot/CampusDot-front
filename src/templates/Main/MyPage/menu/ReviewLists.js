import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { Context as UserContext } from 'context/User';

const ReviewLists = () => {
  const { getReviews } = useContext(UserContext);
  useEffect(() => {
    getReviews();
  }, []);
  return <Text>ReviewLists</Text>;
};

export default ReviewLists;
