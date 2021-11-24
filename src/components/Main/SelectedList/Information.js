import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Context as UserContext } from 'context/User';
import { Context as StoreListContext } from 'context/StoreList';
import style from 'constants/styles';

const Information = () => {
  const { state: user } = useContext(UserContext);
  const { state: storeList, challengeStoreList } = useContext(StoreListContext);
  const [isChallenge, setIsChallenge] = useState(
    storeList.selectedStoreList.SavedUser.includes(user.id),
  );
  const { Title: title, Content: content, _id: storeListId } = storeList.selectedStoreList;

  const onClickChallenge = () => {
    challengeStoreList({ id: storeListId });
    setIsChallenge(!isChallenge);
  };

  return (
    <>
      <View style={[style.flexRow, style.space_between]}>
        <Text>{title}</Text>
        {isChallenge ? (
          <View style={styles.icon}>
            <Text>도전중</Text>
          </View>
        ) : (
          <TouchableOpacity style={styles.icon} onPress={onClickChallenge}>
            <Text>도전하기</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text>{content}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 76,
    height: 27,
    borderWidth: 1,
  },
});

export default Information;
