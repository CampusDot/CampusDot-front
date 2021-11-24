import React, { useEffect, useContext } from 'react';
import { ScrollView, View, Text } from 'react-native';
import Header from 'components/Main/RestaurantLists/Header';
import Information from 'components/Main/SelectedList/Information';
import RestaurantCardView from 'components/Main/SelectedList/RestaurantCardView';
import { Context as StoreListContext } from 'context/StoreList';
import LoadingIndicator from 'components/LoadingIndicator';
import timeConverter from 'lib/utils/time';
import style from 'constants/styles';

const SelectedList = ({ id }) => {
  const { state, getSelectedStoreList } = useContext(StoreListContext);

  useEffect(() => {
    getSelectedStoreList({ id });
  }, []);

  return (
    <ScrollView style={{ marginTop: 100 }}>
      {state.selectedStoreList ? (
        <>
          <View style={[style.flexRow, style.space_between]}>
            <Header PostUser={state.selectedStoreList.PostUser[0]} />
            <Text>{timeConverter(state.selectedStoreList.Time)}</Text>
          </View>
          <Information />
          {state.selectedStoreList.StoreList.map((item) => {
            const { Information: info } = item;
            return <RestaurantCardView information={info} key={info.name} />;
          })}
        </>
      ) : (
        <LoadingIndicator />
      )}
    </ScrollView>
  );
};

export default SelectedList;
