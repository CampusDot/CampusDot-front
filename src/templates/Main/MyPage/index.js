import React, { useContext, useState } from 'react';
import { Button, View } from 'react-native';
import { Context as CollegeContext } from 'context/College';

const MyPage = () => {
  const [category, setCategory] = useState('All');
  const { getStore, state, getStoreLists, initStore, getOtherCollegeRanking, getMyCollegeRanking } =
    useContext(CollegeContext);

  const onClickCategory = (option) => {
    initStore();
    setCategory(option);
    getStore({ category: option, page: 0 });
  };

  const nextCategory = () => {
    getStore({ category, page: state.storePage });
  };

  return (
    <View style={{ marginTop: 100 }}>
      <Button title="전체" onPress={() => onClickCategory('All')} />
      <Button title="한식" onPress={() => onClickCategory('Korean')} />
      <Button title="중식" onPress={() => onClickCategory('Chinese')} />
      <Button title="일식" onPress={() => onClickCategory('Japanese')} />
      <Button title="양식" onPress={() => onClickCategory('Western')} />
      <Button
        title="get CollegeStore"
        onPress={() => getStore({ category, page: state.storePage })}
      />
      <Button
        title="get CollegeStoreLists"
        onPress={() => getStoreLists({ page: state.storeListsPage })}
      />
      <Button title="우리학교 랭킹" onPress={getMyCollegeRanking} />
      <Button title="다른학교 랭킹" onPress={getOtherCollegeRanking} />
    </View>
  );
};

export default MyPage;
