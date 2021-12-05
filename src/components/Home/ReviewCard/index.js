import React, { useContext } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import { MAIN_COLOR } from 'constants/colors';
import style from 'constants/styles';
import Icon from 'widgets/Icon';
import Divider from 'widgets/Divider';
import { Context as ReviewContext } from 'context/Review';
import { Context as UserContext } from 'context/User';

const ReviewCard = ({ item }) => {
  const {
    PostUserName,
    ProfileImage,
    Content,
    Photo,
    StoreName,
    StorePalce,
    Filters,
    Up,
    Down,
    _id,
  } = item;
  const { upReview, upDown } = useContext(ReviewContext);
  const { state } = useContext(UserContext);
  const isUp = Down.includes(state.id);
  const isDown = Down.includes(state.id);
  const onUp = () => {
    upReview({ id: _id });
  };
  const onDown = () => {
    upDown({ id: _id });
  };
  return (
    <View>
      <View style={style.flexRow}>
        {ProfileImage ? (
          // eslint-disable-next-line react/jsx-no-undef
          <Image source={{ uri: ProfileImage }} style={styles.profileImage} />
        ) : (
          <View style={styles.profileImage} />
        )}

        <Text style={styles.name}>{PostUserName}</Text>
      </View>
      {Photo ? (
        <Image source={{ uri: Photo }} style={styles.photo} />
      ) : (
        <View style={styles.photo} />
      )}
      <View style={styles.paddinghoriztontal}>
        <View style={style.flexRow}>
          <Text style={styles.storename}>{StoreName}</Text>
          <Icon source={require('public/icons/location.png')} style={styles.locationicon} />
          <Text style={styles.placetext}>{StorePalce}</Text>
        </View>
        <View style={[style.flexRow, styles.filter]}>
          {Filters.map((el) => {
            return <Text style={styles.filterColor}>{`#${el}`}</Text>;
          })}
        </View>
        <View style={styles.content}>
          <Text>{Content}</Text>
        </View>
        <View style={[style.flexRow, styles.spacebetween, styles.marginbottomfoot]}>
          <View style={[styles.widthspace, style.flexRow]}>
            <TouchableOpacity onPress={onUp} style={style.flexRow}>
              {isUp ? (
                <Icon source={require('public/icons/upfill.png')} style={styles.updownicon} />
              ) : (
                <Icon source={require('public/icons/up.png')} style={styles.updownicon} />
              )}
              <Text style={{ marginRight: 4 * SCALE_WIDTH }}>{Up.length}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDown} style={style.flexRow}>
              {isDown ? (
                <Icon source={require('public/icons/downfill.png')} style={styles.updownicon} />
              ) : (
                <Icon source={require('public/icons/down.png')} style={styles.updownicon} />
              )}
              <Text>{Down.length}</Text>
            </TouchableOpacity>
          </View>
          <Icon source={require('public/icons/save.png')} style={styles.updownicon} />
        </View>
      </View>
      <Divider />
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

export default ReviewCard;
