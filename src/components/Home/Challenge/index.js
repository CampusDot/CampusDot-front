import React, { useContext } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { Context as StoreListContext } from 'context/StoreList';
import LoadingIndicator from 'components/LoadingIndicator';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import style from 'constants/styles';
import { SUB_COLOR } from 'constants/colors';
import Restaurant from './Restaurant';

const Challenge = () => {
  const { state } = useContext(StoreListContext);

  return (
    <View style={styles.container}>
      <View style={[style.flexRow, style.space_between]}>
        <Text style={styles.title}>도전 중</Text>
        {state.challengeStoreList && (
          <View style={styles.lengthBox}>
            <Text style={styles.length}>{state.challengeStoreList.length}개</Text>
          </View>
        )}
      </View>
      {state.challengeStoreList ? (
        <FlatList
          horizontal
          data={state.challengeStoreList}
          keyExtractor={(store) => store.storeInfo._id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatContainer}
          renderItem={({ item }) => {
            return <Restaurant information={item} />;
          }}
        />
      ) : (
        <LoadingIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 13 * SCALE_HEIGHT,
  },
  title: {
    fontSize: FS(16),
    fontWeight: 'bold',
    marginLeft: 14 * SCALE_WIDTH,
  },
  lengthBox: {
    borderRadius: 20 * SCALE_HEIGHT,
    backgroundColor: 'rgba(115, 185, 121, 0.27)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14 * SCALE_WIDTH,
  },
  length: {
    fontSize: FS(12),
    color: SUB_COLOR,
    fontWeight: 'bold',
    paddingHorizontal: 9 * SCALE_WIDTH,
    paddingVertical: 2 * SCALE_HEIGHT,
  },
  flatContainer: {
    paddingLeft: 14 * SCALE_WIDTH,
    paddingBottom: 20 * SCALE_HEIGHT,
  },
});

export default Challenge;
