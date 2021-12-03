import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { SUB_COLOR } from 'constants/colors';
import { SCALE_WIDTH } from 'lib/utils/normalize';

const EMPTY_COLOR = '#E1E1E1';

const State = ({ children, progress }) => {
  const animatedProgress = useRef(new Animated.Value(0)).current;

  const animateProgress = useRef((toValue) => {
    Animated.spring(animatedProgress, {
      toValue,
      useNativeDriver: true,
    }).start();
  }).current;

  const firstIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '180deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorVisibility = animatedProgress.interpolate({
    inputRange: [0, 49, 50, 100],
    outputRange: [0, 0, 1, 1],
    extrapolate: 'clamp',
  });
  useEffect(() => {
    animateProgress(progress);
  }, [animateProgress, progress]);

  return (
    <View style={[styles.circle, styles.empty]}>
      <Animated.View
        style={[styles.circle, styles.indicator, { transform: [{ rotate: firstIndicatorRotate }] }]}
      />
      <Animated.View style={[styles.circle, styles.coverIndicator]} />
      <Animated.View
        style={[
          styles.circle,
          styles.indicator,
          { transform: [{ rotate: secondIndicatorRotate }], opacity: secondIndicatorVisibility },
        ]}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 120 * SCALE_WIDTH,
    height: 120 * SCALE_WIDTH,
    borderRadius: 120 * SCALE_WIDTH,
    borderWidth: 6 * SCALE_WIDTH,
  },
  empty: {
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: EMPTY_COLOR,
    transform: [{ rotate: '-45deg' }],
  },
  indicator: {
    position: 'absolute',
    left: -6 * SCALE_WIDTH,
    borderLeftColor: SUB_COLOR,
    borderColor: 'transparent',
    borderTopColor: SUB_COLOR,
  },
  coverIndicator: {
    borderLeftColor: EMPTY_COLOR,
    borderColor: 'transparent',
    borderTopColor: EMPTY_COLOR,
    position: 'absolute',
    left: -6 * SCALE_WIDTH,
  },
});

export default State;
