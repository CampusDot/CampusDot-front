import React, { useContext, useCallback, useState, useEffect } from 'react';
import { ScrollView, FlatList, StyleSheet, View ,Text, TouchableOpacity} from 'react-native';
import Header from 'components/Header';
import { Context as UserContext } from 'context/User';
import { Context as ReviewContext } from 'context/Review';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import { useFocusEffect } from '@react-navigation/native';
import { MAIN_COLOR } from 'constants/colors';
import style from 'constants/styles';
import Icon from 'widgets/Icon';
import Divider from 'widgets/Divider';
import ReviewCard from 'components/Home/ReviewCard';

const sortParams = [
{
  _id : 'aasdasdada',
  PostUserName: 'SS',
  ProfileImage :null,
  Content: "여기는 진짜 회의 끝판왕, 다른 반찬 없이 회만 나오는데 그양이 엄청많음",
  Time: Date(),
  Photo: null,
  StoreName: '공복',
  StorePalce: '서울시 서대문구 연희동 131',
  Filters: ['회', '소주', '매운탕'],
  Up: ['a','b','q','e','a','z','c','s','g'],
  Down: ['c','d','t','b','h','y','x','b'],
},
{
  _id : 'asdsada',
  PostUserName: 'qwdqwd',
  ProfileImage :null,
  Content: "갈비찜은 잘 안사먹는다. 하지만 여기 갈비찜은 다르다. 고기의 두께가 엄청나다",
  Time: Date(),
  Photo: null,
  StoreName: '쾌걸침착맨',
  StorePalce: '서울시 서대문구 연희동 10-7',
  Filters: ['갈비찜', '찜'],
  Up: ['a','b','q','e','a','z','c','s','g'],
  Down: ['c','d','t','b','h','y','x','b'],
}
];

const Home = () => {
  const { state: user, getInformation } = useContext(UserContext);
  const { state, getReview } = useContext(ReviewContext);

  useEffect(() => {
    getInformation();
    getReview();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header headerStyle={styles.header} title={user.collegeName} titleStyle={styles.title} />
      </View>
      <FlatList
        data={sortParams}
        keyExtractor={(item) => item.Content}
        renderItem={({ item, index }) => {
          return <ReviewCard item={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  spacebetween: {
    justifyContent: 'space-between',
  },
  widthspace: {
    width: '80%'
  },
  title: {
    fontSize: FS(20),
    fontWeight: 'bold',
    color: '#000',
  },
  headerContainer: {
    backgroundColor: MAIN_COLOR,
    borderBottomLeftRadius: 14 * SCALE_HEIGHT,
    borderBottomRightRadius: 14 * SCALE_HEIGHT,
  },
  header: {
    backgroundColor: MAIN_COLOR,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      height: 0 * SCALE_HEIGHT,
      width: 0,
    },
    shadowRadius: 0 * SCALE_HEIGHT,
    shadowOpacity: 0,
    elevation: 0,
  },
  filter: {
    marginTop: 8 * SCALE_HEIGHT,
  },
  filterColor: {
    color: '#CE476B',
    marginRight: 3 * SCALE_WIDTH
  },
  name: {
    marginLeft:6 * SCALE_WIDTH, 
    fontSize:FS(12)
  },
  marginbottomfoot: {
    marginBottom: 8 * SCALE_HEIGHT,
  },
  profileImage: {
    marginTop: 8 * SCALE_HEIGHT,
    marginLeft: 14 * SCALE_WIDTH,
    width: 24 * SCALE_WIDTH,
    height: 24 * SCALE_HEIGHT,
    borderRadius: 24 * SCALE_HEIGHT,
    borderWidth: 1,
  },
  photo: {
    marginTop: 7 * SCALE_HEIGHT,
    width: 375 * SCALE_WIDTH,
    height: 334 * SCALE_HEIGHT,
    borderWidth: 1,
  },
  paddinghoriztontal: {
    paddingHorizontal: 14 * SCALE_WIDTH,
    marginTop: 11 * SCALE_HEIGHT,
  },
  locationicon: { marginLeft: 4 * SCALE_WIDTH, width: 10 * SCALE_WIDTH, height: 13 * SCALE_HEIGHT },
  placetext: { marginLeft: 5.8 * SCALE_WIDTH, color: '#767676' },
  cotent: { marginTop: 7 * SCALE_HEIGHT, marginBottom: 7 * SCALE_HEIGHT },
  storename: { fontSize: FS(14), fontWeight: 'bold' },
  updownicon: { width: 26 * SCALE_WIDTH, height: 26 * SCALE_HEIGHT },
});

export default Home;
