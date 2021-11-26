import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { MAIN_COLOR } from 'constants/colors';
import { SCALE_HEIGHT } from 'lib/utils/normalize';

const BACKGROUND_COLOR = '#FFF5D1';

const ProgressBar = ({ step, steps }) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <View
      style={styles.bar}
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth);
      }}
    >
      <Animated.View
        style={[
          styles.inner,
          {
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    height: 10 * SCALE_HEIGHT,
    borderRadius: 5 * SCALE_HEIGHT,
    backgroundColor: BACKGROUND_COLOR,
    marginTop: 8 * SCALE_HEIGHT,
    overflow: 'hidden',
  },
  inner: {
    height: 10 * SCALE_HEIGHT,
    borderRadius: 5 * SCALE_HEIGHT,
    width: '100%',
    position: 'absolute',
    backgroundColor: MAIN_COLOR,
    left: 0,
    top: 0,
  },
});

export default ProgressBar;
