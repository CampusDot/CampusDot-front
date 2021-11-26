import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as UserContext } from 'context/User';
import { Context as StoreListContext } from 'context/StoreList';
import style from 'constants/styles';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import { SUB_COLOR } from 'constants/colors';

const Information = () => {
  const { state: user } = useContext(UserContext);
  const { state: storeList, challengeStoreList } = useContext(StoreListContext);
  const [isChallenge, setIsChallenge] = useState(
    storeList.selectedStoreList.SavedUser.includes(user.id),
  );
  const { Title: title, Comment: comment, _id: storeListId } = storeList.selectedStoreList;

  const onClickChallenge = () => {
    challengeStoreList({ id: storeListId });
    setIsChallenge(!isChallenge);
  };

  return (
    <View style={styles.container}>
      <View style={[style.flexRow, style.space_between]}>
        <Text style={styles.title}>{title}</Text>
        {isChallenge ? (
          <View style={styles.icon}>
            <Text style={styles.challenge}>도전중</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.icon} onPress={onClickChallenge}>
            <Text style={styles.challenge}>+ 먹어볼래!</Text>
          </TouchableOpacity>
        )}
      </View>
      {comment && <Text style={styles.comment}>{comment}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14 * SCALE_WIDTH,
    paddingTop: 16 * SCALE_HEIGHT,
  },
  icon: {
    width: 80 * SCALE_WIDTH,
    height: 30 * SCALE_HEIGHT,
    borderWidth: 1 * SCALE_HEIGHT,
    borderColor: SUB_COLOR,
    borderRadius: 4 * SCALE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FS(18),
    fontWeight: 'bold',
  },
  challenge: {
    fontSize: FS(14),
    color: SUB_COLOR,
  },
  comment: {
    marginTop: 22 * SCALE_HEIGHT,
    fontSize: FS(14),
  },
});

export default Information;
