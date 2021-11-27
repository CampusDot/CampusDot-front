import React, { useState, useRef } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { push } from 'lib/utils/navigation';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';

const FloatingButton = ({ data }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [isopen, setIsopen] = useState(false);

  const toggleMenu = () => {
    const toValue = isopen ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    setIsopen(!isopen);
  };

  const onClickPostReview = (id) => {
    push('CreateReview', { id });
  };

  return (
    <View>
      {data.map((item, index) => {
        const pinStyle = {
          transform: [
            { scale: animation },
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -80 * (index + 1)],
              }),
            },
          ],
        };
        const { Information: info, _id } = item;
        return (
          <TouchableWithoutFeedback onPress={() => onClickPostReview(_id)} key={_id}>
            <Animated.View style={[styles.button, pinStyle]}>
              <Text style={styles.store} numberOfLines={2}>
                {info.name}
              </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={styles.button}>
          <Text style={styles.clear}>식당 Clear</Text>
          <Text style={styles.store}>하기</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70 * SCALE_WIDTH,
    height: 70 * SCALE_WIDTH,
    borderRadius: 70 * SCALE_WIDTH,
    backgroundColor: 'rgba(123,181,127,0.89)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  store: {
    fontSize: FS(12),
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  clear: {
    fontSize: FS(12),
    color: '#fff',
    marginVertical: 2 * SCALE_HEIGHT,
    fontWeight: 'bold',
  },
});
export default FloatingButton;
