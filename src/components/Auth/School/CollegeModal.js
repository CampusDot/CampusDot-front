import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { navigate } from 'lib/utils/navigation';
import Modal from 'react-native-modal';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import style from 'constants/styles';

const CollegeModal = ({ modal, setModal }) => {
  const onCloseModal = () => {
    setModal(false);
  };

  const onClickNextCertify = () => {
    navigate('Home');
  };

  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={modal}
      backdropOpacity={0.4}
      onBackdropPress={onCloseModal}
      style={{ margin: 0, alignItems: 'center' }}
    >
      <View style={styles.container}>
        <View style={styles.mentbox}>
          <Text style={styles.menttextbox}>
            학교를 인증하지 않으면 캠퍼스 닷 활동을 자유롭게 할 수 없어요!
          </Text>
        </View>
        <View style={style.flexRow}>
          <TouchableOpacity
            style={[styles.touchelmentbox, styles.borderRight]}
            onPress={onClickNextCertify}
          >
            <Text style={[styles.textsize, styles.lefttext]}>다음에 할게요</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchelmentbox} onPress={onCloseModal}>
            <Text style={[styles.textsize, styles.righttext]}>인증 할래요</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 335 * SCALE_WIDTH,
    height: 160 * SCALE_HEIGHT,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 14 * SCALE_HEIGHT,
  },
  mentbox: {
    width: 335 * SCALE_WIDTH,
    height: 106.5 * SCALE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1 * SCALE_WIDTH,
    borderColor: '#A1A1A1',
  },
  menttextbox: {
    width: 225 * SCALE_WIDTH,
    height: 55 * SCALE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: FS(16),
    color: 'black',
  },
  touchbox: {
    width: 335 * SCALE_WIDTH,
    height: 53.5 * SCALE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchelmentbox: {
    width: 167.5 * SCALE_WIDTH,
    height: 53.5 * SCALE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderRight: {
    borderRightWidth: 1 * SCALE_WIDTH,
    borderColor: '#A1A1A1',
  },
  textsize: {
    fontSize: FS(16),
  },
  lefttext: {
    color: '#767676',
  },
  righttext: {
    color: '#73B979',
  },
});

export default CollegeModal;
