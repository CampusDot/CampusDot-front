import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import storeImage from 'lib/utils/storeImage';
import Header from './Header';
import Footer from './Footer';

const RestaurantCardView = ({ information }) => {
  const { name, photos, vicinity } = information;
  return (
    <TouchableOpacity style={styles.container}>
      <Header name={name} address={vicinity} />
      <Image style={styles.storeImg} source={{ uri: storeImage(photos[0].photo_reference) }} />
      <Footer />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 347,
    height: 262,
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
