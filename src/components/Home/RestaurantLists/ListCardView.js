import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { push } from 'lib/utils/navigation';
import Header from 'components/PostUserHeader';
import Footer from './Footer';

const ListCardView = ({ information }) => {
  const { PostUser, Title, Comment, _id } = information;
  const onClickListCard = () => {
    push('SelectedList', { id: _id });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onClickListCard}>
      <Header PostUser={PostUser} />
      <View style={styles.storeImg} />
      <Footer title={Title} comment={Comment} />
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

export default ListCardView;
