import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { MAIN_COLOR } from 'constants/colors';

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
    width: 347,
    height: 10,
    borderRadius: 5,
    backgroundColor: BACKGROUND_COLOR,
  },
  inner: {
    height: 10,
    borderRadius: 5,
    width: '100%',
    position: 'absolute',
    backgroundColor: MAIN_COLOR,
    left: 0,
    top: 0,
  },
});

export default ProgressBar;
