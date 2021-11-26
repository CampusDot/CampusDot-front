import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { goBack } from 'lib/utils/navigation';
import style from 'constants/styles';

const Header = ({ title, titleStyle, back, landings, actions }) => {
  const onClickBack = () => {
    goBack();
  };

  return (
    <View style={[styles.container, style.flexRow, style.space_between]}>
      <View style={styles.landings}>
        {landings.map((landing) => landing) ||
          (back && (
            <TouchableOpacity onPress={onClickBack}>
              <Text>back</Text>
            </TouchableOpacity>
          ))}
      </View>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      <View style={styles.actions}>{actions.map((action) => action)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
  },
  title: {
    textAlign: 'center',
    width: '100%',
  },
  landings: {
    position: 'absolute',
    left: 15,
    zIndex: 99,
    flexDirection: 'row',
  },
  actions: {
    position: 'absolute',
    right: 15,
    zIndex: 99,
    flexDirection: 'row',
  },
});

export default Header;
