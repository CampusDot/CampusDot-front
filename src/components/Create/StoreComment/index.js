import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { navigate } from 'lib/utils/navigation';
import Header from 'components/CardView/SelectedList/Header';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';

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
      backdropOpacity={0.62}
      onBackdropPress={onCloseModal}
      style={styles.modal}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <Header info={store.Information} />
          <View style={styles.photoBox}>
            <TouchableOpacity style={styles.photoPlus}>
              <Text style={styles.plus}>+사진 추가하기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <TextInput
              value={comment}
              onChangeText={(text) => onChangeComment(text)}
              placeholder="식당 설명을 입력해주세요."
              multiline
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={500}
              style={styles.input}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.completeBox} onPress={onClickComplete}>
          <Text style={styles.complete}>{comment.length === 0 ? '건너뛰기' : '완료'}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: 373 * SCALE_HEIGHT,
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    width: 335 * SCALE_WIDTH,
    borderRadius: 10 * SCALE_HEIGHT,
  },
  photoBox: {
    height: 164 * SCALE_HEIGHT,
    backgroundColor: 'rgba(123,181,127, 0.08)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: 87 * SCALE_HEIGHT,
  },
  photoPlus: {
    width: 117 * SCALE_WIDTH,
    height: 33 * SCALE_HEIGHT,
    backgroundColor: '#7BB57F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9 * SCALE_HEIGHT,
  },
  completeBox: {
    backgroundColor: '#7BB57F',
    marginTop: 32 * SCALE_HEIGHT,
    width: 345 * SCALE_WIDTH,
    height: 50 * SCALE_HEIGHT,
    borderRadius: 14 * SCALE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontSize: FS(14),
    color: '#fff',
  },
  complete: {
    fontSize: FS(18),
    color: '#fff',
  },
  input: {
    marginTop: 8 * SCALE_HEIGHT,
    paddingHorizontal: 10 * SCALE_WIDTH,
  },
});

export default StoreComment;
