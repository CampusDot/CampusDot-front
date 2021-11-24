import React from 'react';
import { View, Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { goBack, navigate } from 'lib/utils/navigation';

const CreateModal = () => {
  return (
    <View style={{ flex: 1 }}>
      <Pressable
        style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0, 0, 0, 0.3)' }]}
        onPress={() => {
          goBack();
        }}
      />
      <View
        style={{
          width: '100%',
          height: '30%',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'blue',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigate('CreateList');
          }}
        >
          <Text>리스트 만들기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            //navigate('CreateReview');
          }}
        >
          <Text>리뷰 작성하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateModal;
