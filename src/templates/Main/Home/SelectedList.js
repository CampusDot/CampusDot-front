import React, { useEffect, useContext } from 'react';
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

const SelectedList = ({ id }) => {
  const { state, getSelectedStoreList } = useContext(StoreListContext);

  const onClickCard = (_id) => {
    push('SelectedStore', { id: _id });
  };

  useEffect(() => {
    getSelectedStoreList({ id });
  }, []);
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
            <Information />
            <View style={styles.cardContainer}>
              {state.selectedStoreList.StoreList.map((item) => {
                const { Information: info, _id } = item;
                return (
                  <TouchableOpacity key={_id} onPress={() => onClickCard(_id)}>
                    <CardView
                      header={<CardHeader info={info} />}
                      footer={<Footer comment={state.selectedStoreList.StoreComment[_id]} />}
                      photo={info.photos && info.photos[0]}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
          <View style={styles.button}>
            <FloatingButton data={state.selectedStoreList.StoreList} />
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
    bottom: 140 * SCALE_HEIGHT,
    right: 110 * SCALE_WIDTH,
  },
});

export default SelectedList;
