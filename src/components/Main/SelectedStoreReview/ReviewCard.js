import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const ReviewCard = ({ information }) => {
  const { PostUser, Content, Rating } = information;
  return (
    <TouchableOpacity style={styles.container}>
      <Header name={PostUser.Name} img={PostUser.ProfileImage} />
      <View style={styles.storeImg} />
      <Footer Content={Content} Rating={Rating} />
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

export default ReviewCard;
