import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { MAIN_COLOR } from 'constants/colors';
import { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

const Ranking = ({ number }) => {
  const fixnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  // eslint-disable-next-line consistent-return
  const xgen = (index) => {
    // eslint-disable-next-line default-case
    switch (index % 6) {
      case 0:
        return 0;
      case 1:
        return 90;
      case 2:
        return 180;
      case 3:
        return 270;
      case 4:
        return 180;
      case 5:
        return 90;
    }
  };
  return (
    <View>
      {fixnumber.map((item, index) => {
        const color = index + 1 <= number ? MAIN_COLOR : '#FAFAFA';
        const styles = StyleSheet.create({
          stamp: {
            position: 'absolute',
            top: (50 + index * 40) * SCALE_HEIGHT,
            left: (20 + xgen(index)) * SCALE_WIDTH,
            height: 64 * SCALE_WIDTH,
            width: 64 * SCALE_WIDTH,
            borderRadius: 64 * SCALE_HEIGHT,
            backgroundColor: color,
            alignItems: 'center',
            justifyContent: 'center',
          },
          icon: {
            width: 64 * SCALE_WIDTH,
            height: 64 * SCALE_WIDTH,
            alignItems: 'center',
            justifyContent: 'center',
          },
        });
        return (
          <View style={styles.stamp}>
            <Text>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Ranking;
