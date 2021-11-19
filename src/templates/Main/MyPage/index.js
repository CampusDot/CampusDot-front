import React, { useContext } from 'react';
import { Text, Button, View } from 'react-native';
import { Context as UserContext } from 'context/User';

const MyPage = () => {
  const { getInformation, updateProfile, getChallengeLists, getStoreLists, getReviews } =
    useContext(UserContext);

  return (
    <View style={{ marginTop: 100 }}>
      <Text>Mypage here</Text>
      <Button title="get my Information" onPress={getInformation} />
      <Button title="update Profile" onPress={() => updateProfile({ name: 'zzz' })} />
      <Button title="get ChallengeLists" onPress={getChallengeLists} />
      <Button title="get storeLists" onPress={getStoreLists} />
      <Button title="get Reviews" onPress={getReviews} />
    </View>
  );
};

export default MyPage;
