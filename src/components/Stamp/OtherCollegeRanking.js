import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Context as CollegeContext } from 'context/College';
import LoadingIndicator from 'components/LoadingIndicator';
import style from 'constants/styles';

const OtherCollegeRanking = () => {
  const { state, getOtherCollegeRanking } = useContext(CollegeContext);
  useEffect(() => {
    if (!state.otherRanking) getOtherCollegeRanking();
  }, []);
  return (
    <>
      {state.otherRanking ? (
        state.otherRanking.map((item, index) => {
          const { Name, StampCount } = item;
          return (
            <View style={style.flexRow} key={Name}>
              <Text>
                {index + 1}
                {Name}
                {StampCount}개
              </Text>
            </View>
          );
        })
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

export default OtherCollegeRanking;
