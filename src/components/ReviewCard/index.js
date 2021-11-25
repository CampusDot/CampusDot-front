import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import Header from 'components/PostUserHeader';
import Footer from './Footer';

const ReviewCard = ({ information }) => {
  const { content, photo, postUser } = information;
  return (
    <View style={styles.container}>
      <Header PostUser={postUser} />
      {photo.length > 0 && (
        <FlatList
          data={photo}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          snapToInterval={347}
          decelerationRate={0}
          scrollEventThrottle={16}
          renderItem={({ item }) => {
            return <Image source={{ uri: item }} style={styles.reviewImage} />;
          }}
        />
      )}
      <Footer content={content} rating={3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 347,
    borderWidth: 1,
  },
  reviewImage: {
    width: 347,
    height: 163,
  },
});
export default ReviewCard;
