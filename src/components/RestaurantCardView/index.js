import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import storeImage from 'lib/utils/storeImage';
import { push } from 'lib/utils/navigation';
import { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import Header from './Header';
import Footer from './Footer';

const RestaurantCardView = ({ information, id, rating, review }) => {
  const { name, photos, vicinity } = information;

  const onClickCard = () => {
    push('SelectedStore', { id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onClickCard}>
      <Header rating={rating} review={review} />
      <Image style={styles.storeImg} source={{ uri: storeImage(photos[0].photo_reference) }} />
      <Footer name={name} address={vicinity} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 347 * SCALE_WIDTH,
    height: 262 * SCALE_HEIGHT,
    borderRadius: 10 * SCALE_HEIGHT,
    marginBottom: 14 * SCALE_HEIGHT,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      height: 3 * SCALE_HEIGHT,
      width: 0,
    },
    shadowRadius: 6 * SCALE_HEIGHT,
    shadowOpacity: 0.15,
    elevation: 2,
  },
  storeImg: {
    width: 347 * SCALE_WIDTH,
    height: 163 * SCALE_HEIGHT,
  },
});

export default RestaurantCardView;
