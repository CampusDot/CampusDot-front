import React, { useState, useRef } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { push } from 'lib/utils/navigation';
import { MAIN_COLOR } from 'constants/colors';

const SelectedListButton = ({ data }) => {
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
                outputRange: [0, -110 * (index + 1)],
              }),
            },
          ],
        };
        const { Information: info, _id } = item;
        return (
          <TouchableWithoutFeedback onPress={() => onClickPostReview(_id)}>
            <Animated.View style={[styles.button, pinStyle]}>
              <Text>{info.name}</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        );
      })}
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={styles.button}>
          <Text>리뷰쓰기</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: MAIN_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3,
  },
});
export default SelectedListButton;
