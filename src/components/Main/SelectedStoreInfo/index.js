import React from 'react';
import { Text, View } from 'react-native';
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

export default SelectedStoreInfo;
