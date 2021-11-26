import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as CollegeContext } from 'context/College';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import CardView from 'components/CardView';
import { push } from 'lib/utils/navigation';
import Header from 'components/PostUserHeader';
import Footer from 'components/CardView/RestaurantList/Footer';

const RestaurantLists = () => {
  const { state } = useContext(CollegeContext);

  const onClickListCard = (id) => {
    push('SelectedList', { id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>우리학교 맛집</Text>
      {state.storeLists.map((item) => {
        const { PostUser, Title, Comment, _id, StoreList } = item;
        const photo = StoreList[0].Information.photos;
        return (
          <TouchableOpacity key={_id} onPress={() => onClickListCard(_id)}>
            <CardView
              header={<Header PostUser={PostUser} />}
              footer={<Footer title={Title} comment={Comment} />}
              photo={photo && photo[0]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 13 * SCALE_HEIGHT,
    paddingHorizontal: 14 * SCALE_WIDTH,
  },
  title: {
    fontSize: FS(16),
    fontWeight: 'bold',
    marginBottom: 10 * SCALE_HEIGHT,
  },
});

export default RestaurantLists;
