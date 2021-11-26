import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { push } from 'lib/utils/navigation';
import Header from 'components/PostUserHeader';
import { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import StoreImage from 'widgets/StoreImage';
import Footer from './Footer';

const ListCardView = ({ information }) => {
  const { PostUser, Title, Comment, _id, StoreList } = information;
  const photo = StoreList[0].Information.photos[0];

  const onClickListCard = () => {
    push('SelectedList', { id: _id });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onClickListCard}>
      <Header PostUser={PostUser} />
      <StoreImage image={photo && photo.photo_reference} imageStyle={styles.storeImg} />
      <Footer title={Title} comment={Comment} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 347 * SCALE_WIDTH,
    borderRadius: 10 * SCALE_HEIGHT,
    marginBottom: 14 * SCALE_HEIGHT,
    borderWidth: 1,
  },
  storeImg: {
    height: 163 * SCALE_HEIGHT,
  },
});

export default ListCardView;
