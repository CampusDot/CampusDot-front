import React from 'react';
import { View } from 'react-native';
import FriendCollege from 'templates/Main/Home/FriendCollege';
import { Provider as CollegeProvider } from 'context/College';
import Invisible from 'templates/Main/Home/Invisible';

export default function () {
  const stamp = 3;
  return (
    <View>
      {stamp < 3 ? (
        <Invisible stamp={stamp} />
      ) : (
        <CollegeProvider>
          <FriendCollege />
        </CollegeProvider>
      )}
    </View>
  );
}
