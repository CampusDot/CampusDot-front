import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { useListCreate } from 'providers/ListCreate';
import Header from './Header';
import CommentInput from './CommentInput';

const ListComment = ({ setIsSearch }) => {
  const { commenting, setCommenting } = useListCreate();
  const onClose = () => {
    setCommenting(false);
  };
  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={commenting}
      backdropOpacity={0}
      onBackdropPress={onClose}
      style={{ margin: 0, alignItems: 'center', justifyContent: 'flex-end' }}
    >
      <View style={{ width: '100%', height: '40%', backgroundColor: 'white' }}>
        <Header setIsSearch={setIsSearch} />
        <CommentInput />
      </View>
    </Modal>
  );
};

export default ListComment;
