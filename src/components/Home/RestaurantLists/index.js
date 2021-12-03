import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as CollegeContext } from 'context/College';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import CardView from 'components/CardView';
import Header from 'components/PostUserHeader';
import Footer from 'components/CardView/RestaurantList/Footer';
import { Context as UserContext } from 'context/User';
import style from 'constants/styles';
import { SUB_COLOR } from 'constants/colors';

const sortLists = {
  0: '최신순',
  1: '인기순',
};

const sortParams = {
  0: 'recent',
  1: 'popular',
};

const RestaurantLists = ({ sort, setSort }) => {
  const { state, getStoreLists } = useContext(CollegeContext);
  const { state: user } = useContext(UserContext);

  const onClickSort = (idx) => {
    setSort(idx);
  };

  useEffect(() => {
    getStoreLists({ sort: sortParams[sort], page: 0 });
  }, [sort]);

  return (
    <View style={styles.container}>
      <View style={[style.flexRow, style.space_between]}>
        <Text style={styles.title}>우리학교 맛집</Text>
        <View style={[style.flexRow, styles.sortContainer]}>
          {[...Array(2)].map((_, index) => (
            <TouchableOpacity key={Math.random()} onPress={() => onClickSort(index)}>
              <Text style={[styles.sort, index === sort ? styles.active : styles.inactive]}>
                {sortLists[index]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.cardContainer}>
        {state.storeLists.map((item) => {
          const { PostUser, Title, Comment, _id, StoreList, FinishedUser, StorePhoto, SavedUser } =
            item;
          const photo = [];
          Object.values(StoreList).forEach((store) => {
            if (StorePhoto[store._id] !== undefined) {
              photo.push(StorePhoto[store._id]);
            } else {
              photo.push(
                store.Information.photos ? store.Information.photos[0].photo_reference : '',
              );
            }
          });
          return (
            <View key={_id}>
              {!FinishedUser.includes(user.id) && !SavedUser.includes(user.id) && (
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 13 * SCALE_HEIGHT,
  },
  cardContainer: {
    backgroundColor: '#FFFEFA',
    paddingTop: 6 * SCALE_HEIGHT,
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: FS(16),
    fontWeight: 'bold',
    marginBottom: 4 * SCALE_HEIGHT,
    paddingHorizontal: 14 * SCALE_WIDTH,
  },
  marginBottom: {
    marginBottom: 14 * SCALE_WIDTH,
  },
  sortContainer: {
    marginRight: 12 * SCALE_WIDTH,
  },
  sort: {
    fontSize: FS(14),
    marginRight: 2 * SCALE_WIDTH,
  },
  active: {
    color: SUB_COLOR,
  },
  inactive: {
    color: '#a1a1a1',
  },
});

export default RestaurantLists;
