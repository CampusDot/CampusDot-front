import React, { useContext, useCallback, useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from 'components/PostUserHeader';
import Information from 'components/Home/SelectedList/Information';
import { Context as StoreListContext } from 'context/StoreList';
import LoadingIndicator from 'components/LoadingIndicator';
import timeConverter from 'lib/utils/time';
import style from 'constants/styles';
import FloatingButton from 'components/FloatingButton';
import TitleHeader from 'components/Header';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import CardView from 'components/CardView';
import { push } from 'lib/utils/navigation';
import CardHeader from 'components/CardView/SelectedList/Header';
import Footer from 'components/CardView/SelectedList/Footer';
import Icon from 'widgets/Icon';
import { useFocusEffect } from '@react-navigation/native';

const SelectedList = ({ id }) => {
  const { state, getSelectedStoreList } = useContext(StoreListContext);
  const [finishNum, setFinishNum] = useState(0);
  const onClickCard = (_id) => {
    push('SelectedStore', { id: _id, storeListId: id });
  };

  useFocusEffect(
    useCallback(() => {
      let finishCount = 0;
      getSelectedStoreList({ id });
      if (state.reviewClearList) {
        Object.values(state.reviewClearList).forEach((item) => {
          if (item) {
            finishCount += 1;
          }
        });
        setFinishNum(finishCount);
      }
    }, []),
  );

  useEffect(() => {
    let finishCount = 0;
    if (state.reviewClearList) {
      Object.values(state.reviewClearList).forEach((item) => {
        if (item) {
          finishCount += 1;
        }
      });
      setFinishNum(finishCount);
    }
  }, [state.reviewClearList]);

  return (
    <View style={styles.container}>
      {state.selectedStoreList ? (
        <>
          <TitleHeader
            title={`${state.selectedStoreList.PostUser[0].Name}님의 리스트`}
            back
            titleStyle={style.headertitle}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[style.flexRow, style.space_between, styles.header]}>
              <Header PostUser={state.selectedStoreList.PostUser[0]} />
              <Text style={styles.time}>{timeConverter(state.selectedStoreList.Time)}</Text>
            </View>
            <Information finish={finishNum === state.selectedStoreList.StoreList.length} />
            <View style={styles.cardContainer}>
              {state.selectedStoreList.StoreList.map((item) => {
                const { Information: info, _id } = item;
                const storePhoto = info.photos ? [info.photos[0].photo_reference] : [''];
                const photo =
                  state.selectedStoreList.StorePhoto[_id] !== undefined
                    ? state.selectedStoreList.StorePhoto[_id]
                    : storePhoto;
                return (
                  <TouchableOpacity
                    key={_id}
                    onPress={() => onClickCard(_id)}
                    style={styles.marginBottom}
                  >
                    <CardView
                      custom={state.selectedStoreList.StorePhoto[_id] !== undefined}
                      header={<CardHeader info={info} />}
                      footer={<Footer comment={state.selectedStoreList.StoreComment[_id]} />}
                      photo={photo}
                    />
                    {state.reviewClearList[_id] && (
                      <View style={styles.clearContainer}>
                        <Icon source={require('public/icons/clear.png')} style={styles.clearIcon} />
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <View style={styles.button}>
            <FloatingButton data={state.selectedStoreList} clear={state.reviewClearList} />
          </View>
        </>
      ) : (
        <LoadingIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 57 * SCALE_HEIGHT,
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1 * SCALE_HEIGHT,
  },
  time: {
    fontSize: FS(12),
    color: '#767676',
    marginRight: 12 * SCALE_WIDTH,
  },
  cardContainer: {
    paddingHorizontal: 14 * SCALE_WIDTH,
    marginTop: 18 * SCALE_HEIGHT,
  },
  button: {
    position: 'absolute',
    zIndex: 3,
    bottom: 100 * SCALE_HEIGHT,
    right: 90 * SCALE_WIDTH,
  },
  clearContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(17,17,17,0.59)',
    borderRadius: 10 * SCALE_HEIGHT,
  },
  clearIcon: {
    width: 139 * SCALE_WIDTH,
    height: 139 * SCALE_WIDTH,
  },
  marginBottom: {
    marginBottom: 14 * SCALE_WIDTH,
  },
});

export default SelectedList;
