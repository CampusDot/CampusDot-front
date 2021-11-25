import React, { useEffect, useContext } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Header from 'components/PostUserHeader';
import Information from 'components/Home/SelectedList/Information';
import RestaurantCardView from 'components//RestaurantCardView';
import { Context as StoreListContext } from 'context/StoreList';
import LoadingIndicator from 'components/LoadingIndicator';
import timeConverter from 'lib/utils/time';
import style from 'constants/styles';
import FloatingButton from 'components/FloatingButton';

const SelectedList = ({ id }) => {
  const { state, getSelectedStoreList } = useContext(StoreListContext);

  useEffect(() => {
    getSelectedStoreList({ id });
  }, []);

  return (
    <View style={{ marginTop: 100 }}>
      {state.selectedStoreList ? (
        <>
          <View style={[style.flexRow, style.space_between]}>
            <Header PostUser={state.selectedStoreList.PostUser[0]} />
            <Text>{timeConverter(state.selectedStoreList.Time)}</Text>
          </View>
          <Information />
          <ScrollView>
            {state.selectedStoreList.StoreList.map((item) => {
              const { Information: info, _id } = item;
              return <RestaurantCardView information={info} id={_id} key={info.name} />;
            })}
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
    borderWidth: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#707070',
  },
  button: {
    position: 'absolute',
    zIndex: 3,
    bottom: 200,
    right: 100,
  },
});

export default SelectedList;
