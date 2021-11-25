import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context as CollegeContext } from 'context/College';
import LoadingIndicator from 'components/LoadingIndicator';
import getAchivement from 'lib/utils/achivements';
import ProfileImage from 'widgets/ProfileImage';
import style from 'constants/styles';

const MyCollegeRanking = () => {
  const { state, getMyCollegeRanking } = useContext(CollegeContext);
  useEffect(() => {
    if (!state.myRanking) getMyCollegeRanking();
  }, []);
  return (
    <>
      {state.myRanking ? (
        state.myRanking.map((item, index) => {
          const { Name, ProfileImage: profileImg, AllStamp } = item;
          return (
            <View style={style.flexRow} key={Name}>
              <ProfileImage image={profileImg} imageStyle={styles.profileImg} />
              <Text>
                {index + 1}
                {Name}
                {getAchivement(AllStamp)}
                {AllStamp}개
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

const styles = StyleSheet.create({
  profileImg: {
    width: 33,
    height: 33,
    borderWidth: 1,
    borderRadius: 33,
  },
});

export default MyCollegeRanking;
