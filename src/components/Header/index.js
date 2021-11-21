import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { goBack } from 'lib/utils/navigation';
import style from 'constants/styles';

const Header = ({ title, titleStyle, back, landings, actions }) => {
  const onClickBack = () => {
    goBack();
  };

  return (
    <View style={[styles.container, style.flexRow, style.space_between]}>
      <View style={styles.landings}>
        {landings ||
          (back && (
            <TouchableOpacity onPress={onClickBack}>
              <Text>back</Text>
            </TouchableOpacity>
          ))}
      </View>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      <View style={styles.landings}>{actions}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
  },
  title: {
    textAlign: 'center',
    width: '100%',
  },
  landings: {
    position: 'absolute',
    left: 15,
  },
  actions: {
    position: 'absolute',
    right: 15,
  },
});

export default Header;