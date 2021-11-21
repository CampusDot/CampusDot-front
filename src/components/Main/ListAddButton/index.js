import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListAddButton = ({ setIsSearch }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setIsSearch(true);
        }}
        style={styles.button}
      >
        <Text>식당 추가하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'yellow',
  },
});

export default ListAddButton;
