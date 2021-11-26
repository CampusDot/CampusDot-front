import React, { useState, useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Header from 'components/Header';
import MyCollegeRanking from 'components/Stamp/MyCollegeRanking';
import OtherCollegeRanking from 'components/Stamp/OtherCollegeRanking';
import { Context as CollegeContext } from 'context/College';
import FS, { SCALE_WIDTH } from 'lib/utils/normalize';
import Icon from 'widgets/Icon';

const rankingComponent = {
  true: <MyCollegeRanking />,
  false: <OtherCollegeRanking />,
};

const RankingHedaer = ({ type, setType }) => {
  const onClickMenu = () => {
    setType(!type);
  };

  return (
    <TouchableOpacity onPress={onClickMenu}>
      <Icon
        source={
          type ? require('public/icons/ranking_school.png') : require('public/icons/ranking.png')
        }
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const Ranking = () => {
  const [type, setType] = useState(true);
  const { state } = useContext(CollegeContext);
  return (
    <View style={styles.container}>
      <Header
        title={type ? state.myCollege && state.myCollege.Name : '학교 랭킹'}
        back
        actions={[<RankingHedaer type={type} setType={setType} />]}
        titleStyle={styles.title}
      />
      {rankingComponent[type]}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: FS(18),
  },
  icon: {
    width: 40 * SCALE_WIDTH,
    height: 40 * SCALE_WIDTH,
  },
});
export default Ranking;
