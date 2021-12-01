import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { MAIN_COLOR } from 'constants/colors';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import Icon from 'widgets/Icon';
import LevelText from './LevelText';
import LevelBadge from './LevelBadge';

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
      <Icon source={require('public/icons/stamp_ballon.png')} style={styles.ballonicon} />
      <LevelText style={styles.textlocation1} number={4} />
      <LevelText style={styles.textlocation2} number={7} />
      <LevelText style={styles.textlocation3} number={10} />
      <LevelText style={styles.textlocation4} number={13} />
      <LevelBadge number={number} style={styles.badge} />
      <Icon source={require('public/icons/stamp_dot.png')} style={styles.dot} />
      {fixnumber.map((item, index) => {
        const stamped = index + 1 <= number;
        const stylesin = StyleSheet.create({
          stamp: {
            position: 'absolute',
            top: (50 + index * 40) * SCALE_HEIGHT,
            left: (20 + xgen(index)) * SCALE_WIDTH,
            height: 64 * SCALE_WIDTH,
            width: 64 * SCALE_WIDTH,
            borderRadius: 64 * SCALE_HEIGHT,
            backgroundColor: stamped ? MAIN_COLOR : '#656565',
            alignItems: 'center',
            justifyContent: 'center',
          },
          stampicon: {
            position: 'absolute',
            top: (50 + index * 40) * SCALE_HEIGHT,
            left: (20 + xgen(index)) * SCALE_WIDTH,
            height: 75 * SCALE_WIDTH,
            width: 75 * SCALE_WIDTH,
          },
        });
        return !stamped ? (
          <View style={stylesin.stamp}>
            <ImageBackground source={require('public/icons/stamp_circle.png')} style={styles.icon}>
              <Text style={styles.numbers}>{item}</Text>
            </ImageBackground>
          </View>
        ) : (
          <Icon source={require('public/icons/stamp_filled.png')} style={stylesin.stampicon} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FS(20),
    fontWeight: 'bold',
  },
  backblack: {
    flex: 1,
    backgroundColor: '#292828',
  },
  ballonicon: {
    width: 130 * SCALE_WIDTH,
    height: 80 * SCALE_HEIGHT,
    position: 'absolute',
    top: 50 * SCALE_HEIGHT,
    left: 180 * SCALE_WIDTH,
  },
  icon: {
    width: 64 * SCALE_WIDTH,
    height: 64 * SCALE_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textlocation1: {
    position: 'absolute',
    right: 15 * SCALE_WIDTH,
    top: 130 * SCALE_HEIGHT,
  },
  textlocation2: {
    position: 'absolute',
    left: 15 * SCALE_WIDTH,
    top: 250 * SCALE_HEIGHT,
  },
  textlocation3: {
    position: 'absolute',
    right: 15 * SCALE_WIDTH,
    top: 370 * SCALE_HEIGHT,
  },
  textlocation4: {
    position: 'absolute',
    left: 15 * SCALE_WIDTH,
    top: 490 * SCALE_HEIGHT,
  },
  badge: {
    position: 'absolute',
    right: 20 * SCALE_WIDTH,
    top: 550 * SCALE_HEIGHT,
  },
  numbers: {
    fontSize: FS(20),
    fontWeight: 'bold',
    color: '#898989',
  },
  dot: {
    width: 69 * SCALE_WIDTH,
    height: 9 * SCALE_HEIGHT,
    position: 'absolute',
    top: 600 * SCALE_HEIGHT,
    left: 155 * SCALE_WIDTH,
  },
});

export default Ranking;