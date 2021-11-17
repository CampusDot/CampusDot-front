import React, { useContext } from 'react';
import { Button, View } from 'react-native';
import { Context as CollegeContext } from 'context/College';

const MyPage = () => {
  const { getStore, state, getStoreLists } = useContext(CollegeContext);

  return (
    <View style={{ marginTop: 100 }}>
      <Button title="get CollegeStore" onPress={() => getStore({ page: state.storePage })} />
      <Button
        title="get CollegeStoreLists"
        onPress={() => getStoreLists({ page: state.storeListsPage })}
      />
    </View>
  );
};

export default MyPage;
