import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { useListCreate } from 'providers/ListCreate';
import style from '../../../constants/styles';

const Restaurants = [
  Object({
    _id: 'dadad',
    Information: {
      name: 'Yunseoul',
      photos: {
        photo_reference:
          'Aap_uEB_IA-CYUn04r5hvpHog9zkBbB58L_juVV8987on6gkXSjtBVssqf0vpJpqLPx-m-ZO-nhSaO4tEvP5d3TqVNLPUCygJta8lcPHOHnd4xW04_kjyVijYqOpReH7P4khwYChyCaNHilKayg3rE_wOJyTMRC1woT20QIGqyaGB_AOIrcD',
      },
    },
    vicinity: '346-50 Seogyo-dong, Mapo-gu',
  }),
  Object({
    _id: 'dadadddd',
    Information: {
      name: 'ONDAL',
      photos: {
        photo_reference:
          'Aap_uECGsWDZ-jOJ2Ars_WyAWGNHm59OcB12y_7S8yFJxmfcJCHyngMHrGIr3gK5fI6cyKGTE0H8WqgavGTWA4yWNCLSIvlcWkkypQXxgQvww-_KcUyssJoKDkf750IX45znQsc2nxgt2TAZj7hq5AzKwfwds2eqGzEty3MwIDycS0yULMB_',
      },
    },
    vicinity: '177 Walkerhill-ro, Gwangjang-dong, Gwangjin-gu',
  }),
];

const CreateListSearchResult = () => {
  const { setCommenting, setCurrentStore } = useListCreate();
  const onClick = ({ object }) => {
    setCurrentStore(object);
    setCommenting(true);
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Restaurants}
        keyExtractor={(_) => _._id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.padding}
        renderItem={({ item }) => {
          return (
            <View style={style.flexRow}>
              <View style={styles.image} />
              <View>
                <Text>{item.Information.name}</Text>
                <Text>{item.vicinity}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    onClick({ object: item });
                  }}
                >
                  <Text>추가하기</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    backgroundColor: 'yellow',
  },
  click: {
    backgroundColor: 'yellow',
  },
  notclick: {
    backgroundColor: 'white',
  },
});

export default CreateListSearchResult;
