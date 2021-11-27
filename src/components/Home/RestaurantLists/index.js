import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context as CollegeContext } from 'context/College';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import CardView from 'components/CardView';
import Header from 'components/PostUserHeader';
import Footer from 'components/CardView/RestaurantList/Footer';
import { Context as UserContext } from 'context/User';

const RestaurantLists = () => {
  const { state } = useContext(CollegeContext);
  const { state: user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>우리학교 맛집</Text>
      {state.storeLists.map((item) => {
        const { PostUser, Title, Comment, _id, StoreList, FinishedUser } = item;
        const photo = [];
        Object.values(StoreList).forEach((store) => photo.push(store.Information.photos));
        return (
          <View key={_id}>
            {!FinishedUser.includes(user.id) && (
              <View style={styles.marginBottom}>
                <CardView
                  header={<Header PostUser={PostUser} />}
                  footer={<Footer title={Title} comment={Comment} id={_id} />}
                  photo={photo}
                />
              </View>
            )}
          </View>
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
  marginBottom: {
    marginBottom: 14 * SCALE_WIDTH,
  },
});

export default RestaurantLists;
