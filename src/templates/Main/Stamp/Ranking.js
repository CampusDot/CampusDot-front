import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Header from 'components/Header';
import MyCollegeRanking from 'components/Stamp/MyCollegeRanking';
import OtherCollegeRanking from 'components/Stamp/OtherCollegeRanking';

const schoolType = {
  true: '우리 학교 랭킹',
  false: '학교 랭킹',
};

const rankingComponent = {
  true: <MyCollegeRanking />,
  false: <OtherCollegeRanking />,
};

const RankingHedaer = ({ type, setType }) => {
  const menu = !type;

  const onClickMenu = () => {
    setType(menu);
  };

  return (
    <TouchableOpacity onPress={onClickMenu}>
      <Text>{schoolType[menu]}</Text>
    </TouchableOpacity>
  );
};

const Ranking = () => {
  const [type, setType] = useState(true);

  return (
    <View>
      <Header
        title={schoolType[type]}
        back
        actions={[<RankingHedaer type={type} setType={setType} />]}
      />
      {rankingComponent[type]}
    </View>
  );
};

export default Ranking;
