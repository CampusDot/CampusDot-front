import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { push } from 'lib/utils/navigation';
import Header from './Header';
import Footer from './Footer';

const RestaurantCardView = ({ information }) => {
  const { Title, Content, address } = information;
  return (
    <TouchableOpacity style={styles.container} onPress={() => push('SelectedStore')}>
      <Header Title={Title} address={address} />
      <View style={styles.storeImg} />
      <Footer Content={Content} />
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
