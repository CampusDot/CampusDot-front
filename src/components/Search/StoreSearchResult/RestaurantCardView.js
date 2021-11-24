import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import storeImage from 'lib/utils/storeImage';
import StoreImage from 'widgets/StoreImage';
import Header from './Header';
import Footer from './Footer';

const RestaurantCardView = ({ information }) => {
  const { name, photos, vicinity, _id } = information;
  return (
    <TouchableOpacity style={styles.container}>
      <Header name={name} address={vicinity} />
      <StoreImage
        image={storeImage(photos && photos[0].photo_reference)}
        imageStyle={styles.storeImg}
      />
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
