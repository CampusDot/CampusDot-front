import React from 'react';
import { View } from 'react-native';
import style from 'constants/styles';
import { getStamp, getNextStamp } from 'lib/utils/achivements';
import Level from './Level';
import ProgressBar from './ProgressBar';

const Achivement = () => {
  const stamp = 5;
  return (
    <View style={{ marginTop: 50 }}>
      <View style={[style.space_between, style.flexRow]}>
        <Level stamp={stamp} />
        <Level stamp={stamp} goal />
      </View>
      {getNextStamp(stamp) !== getStamp(stamp) && (
        <ProgressBar step={stamp - getStamp(stamp)} steps={getNextStamp(stamp) - getStamp(stamp)} />
      )}
    </View>
  );
};

export default Achivement;
