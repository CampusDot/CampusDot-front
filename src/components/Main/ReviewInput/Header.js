import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import style from 'constants/styles';
import { goBack } from 'lib/utils/navigation';

const Header = () => {
  // const { Name } = PostUser;
  return (
    <View style={[styles.container, style.flexRow]}>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}
      >
        <Text>뒤로가기</Text>
      </TouchableOpacity>
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

export default Header;
