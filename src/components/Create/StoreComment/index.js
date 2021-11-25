import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import style from 'constants/styles';
import { navigate } from 'lib/utils/navigation';

const StoreComment = ({ onCloseModal, store, currentComment }) => {
  const [comment, setComment] = useState(currentComment);

  const onChangeComment = (text) => {
    setComment(text);
  };

  const onClickComplete = () => {
    onCloseModal();
    navigate('CreateStoreList', { store: { info: store, comment } });
  };

  return (
    <Modal
      animationIn="fadeInUp"
      animationOut="fadeInDown"
      isVisible
      backdropOpacity={0}
      onBackdropPress={onCloseModal}
      style={{ margin: 0, alignItems: 'center', justifyContent: 'flex-end' }}
    >
      <View style={{ width: '100%', height: '40%', backgroundColor: 'white' }}>
        <View style={style.flexRow}>
          <View style={style.flexRow}>
            <Text>식당소개 </Text>
            <TouchableOpacity onPress={onClickComplete}>
              <Text>{comment.length === 0 ? '건너뛰기' : '완료'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TextInput
          value={comment}
          onChangeText={(text) => onChangeComment(text)}
          placeholder="설명을 해주세요."
          multiline
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
    </Modal>
  );
};

export default StoreComment;
