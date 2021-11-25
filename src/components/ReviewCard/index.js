import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
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
          renderItem={() => {
            return <Text>zz</Text>;
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
});
export default ReviewCard;
