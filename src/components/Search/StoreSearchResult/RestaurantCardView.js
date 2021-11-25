import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import StoreImage from 'widgets/StoreImage';
import Header from './Header';

const RestaurantCardView = ({ information }) => {
  const { name, photos, vicinity } = information;
  return (
    <TouchableOpacity style={styles.container}>
      <Header name={name} address={vicinity} />
      <StoreImage image={photos && photos[0].photo_reference} imageStyle={styles.storeImg} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 347,
    borderRadius: 10,
    marginBottom: 14,
  },
  storeImg: {
    width: 347,
    height: 163,
    borderWidth: 1,
  },
});

export default RestaurantCardView;
