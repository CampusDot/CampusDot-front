import React, { useContext } from 'react';
import { FlatList, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { push } from 'lib/utils/navigation';
import timeConverter from 'lib/utils/time';
import ProfileImage from 'widgets/ProfileImage';
import { Context as UserContext } from 'context/User';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { MAIN_COLOR } from 'constants/colors';
import style from 'constants/styles';

const RatingDetail = () => {
  const data = ['taste', 'clean', 'kind'];
  const value = [1, 2, 3];
  return (
    <View style={{flex:1}} >
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={({ item, index }) => {
        return(
        <View>
            <Text>{item}</Text>
            <View style={style.flexRow}>
            {value.map((value, index)=>{return(
                <TouchableOpacity style={{width:40, height:40}} key={value} >
                    <Text>{value}</Text>
                </TouchableOpacity>
            )})}
            </View>
        </View>
        )
      }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 347 * SCALE_WIDTH,
    height: 44 * SCALE_HEIGHT,
    marginBottom: 11 * SCALE_HEIGHT,
  },
  profileImg: {
    width: 40 * SCALE_WIDTH,
    height: 40 * SCALE_WIDTH,
    backgroundColor: MAIN_COLOR,
    borderRadius: 40 * SCALE_HEIGHT,
  },
  content: {
    width: 286 * SCALE_WIDTH,
    marginLeft: 21 * SCALE_WIDTH,
  },
  textname: {
    fontSize: FS(13),
    fontWeight: 'bold',
  },
  textcontent: {
    fontSize: FS(13),
    fontWeight: 'normal',
  },
  texttime: {
    fontSize: FS(12),
    color: '#808080',
  },
  toppadding: {
    paddingTop: 16 * SCALE_HEIGHT,
  },
});

export default RatingDetail;
