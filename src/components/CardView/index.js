import React from 'react';
import { StyleSheet, View } from 'react-native';
import StoreImage from 'widgets/StoreImage';
import { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import StoreCarousel from 'components/StoreCarousel';

const CardView = ({ header, footer, photo }) => {
  return (
    <View style={styles.container}>
      {header}
      {photo.length > 1 ? (
        <StoreCarousel photo={photo} />
      ) : (
        <StoreImage image={photo[0] && photo[0].photo_reference} imageStyle={styles.storeImg} />
      )}
      {footer}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 347 * SCALE_WIDTH,
    borderRadius: 10 * SCALE_HEIGHT,
    backgroundColor: 'white',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      height: -3 * SCALE_HEIGHT,
      width: 0,
    },
    shadowRadius: 6 * SCALE_HEIGHT,
    shadowOpacity: 0.1,
    elevation: 3,
  },
  storeImg: {
    height: 163 * SCALE_HEIGHT,
  },
});
export default CardView;
