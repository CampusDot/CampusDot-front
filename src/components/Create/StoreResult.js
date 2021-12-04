import React, { useContext } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Context as SearchContext } from 'context/Search';
import style from 'constants/styles';
import LoadingIndicator from 'components/LoadingIndicator';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import Icon from 'widgets/Icon';
import StoreImage from 'widgets/StoreImage';
import { MAIN_COLOR } from 'constants/colors';
import { push } from 'lib/utils/navigation';

const StoreResult = () => {
  const { state } = useContext(SearchContext);

  const onClickPostReview = (id) => {
    push('CreateReview', { id });
  };

  return (
    <>
      {state.result ? (
        <FlatList
          data={state.result}
          keyExtractor={(_) => _._id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item }) => {
            const { Information, _id: id } = item;
            const { name, vicinity, photos } = Information;
            const uri = photos ? photos[0].photo_reference : '';
            return (
              <TouchableOpacity
                style={[style.flexRow, style.space_between, styles.box]}
                onPress={() => onClickPostReview(id)}
              >
                <View style={style.flexRow}>
                  <StoreImage image={uri} imageStyle={styles.image} />
                  <View style={styles.widthArea}>
                    <Text style={styles.title}>{name}</Text>
                    <View style={style.flexRow}>
                      <Icon
                        source={require('public/icons/location_gray.png')}
                        style={styles.location}
                      />
                      <Text style={styles.locationText} numberOfLines={1}>
                        {vicinity}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20 * SCALE_WIDTH,
    paddingVertical: 16 * SCALE_HEIGHT,
  },
  box: {
    marginBottom: 14 * SCALE_HEIGHT,
  },
  image: {
    width: 60 * SCALE_WIDTH,
    height: 60 * SCALE_WIDTH,
    borderRadius: 10 * SCALE_WIDTH,
    marginRight: 12 * SCALE_WIDTH,
    backgroundColor: MAIN_COLOR,
  },
  title: {
    fontSize: FS(18),
    color: '#111111',
  },
  location: {
    width: 15 * SCALE_WIDTH,
    height: 15 * SCALE_WIDTH,
  },
  locationText: {
    fontSize: FS(14),
    color: '#767676',
    marginTop: 6 * SCALE_HEIGHT,
  },
  widthArea: {
    width: 180 * SCALE_WIDTH,
  },
  plusBox: {
    width: 56 * SCALE_WIDTH,
    height: 24 * SCALE_HEIGHT,
    borderRadius: 13 * SCALE_HEIGHT,
    backgroundColor: '#7BB57F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    fontSize: FS(14),
    color: '#fff',
  },
});

export default StoreResult;
