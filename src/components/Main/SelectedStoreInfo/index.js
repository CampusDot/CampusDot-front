import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import style from 'constants/styles';

const SelectedStoreInfo = ({ Name, Address, Rating }) => {
  return (
    <View>
      <View style={style.flexRow}>
        <Text>{Name}</Text>
        <Text> 별점{Rating}</Text>
      </View>
      <View>
        <Text>{Address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
  },
  profileImg: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
});

export default SelectedStoreInfo;
