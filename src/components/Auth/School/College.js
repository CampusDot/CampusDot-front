import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSign } from 'providers/Sign';
import { DropdownList } from 'react-native-ultimate-modal-picker';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { Context as AuthContext } from 'context/Auth';

const College = () => {
  const { onChangeValue } = useSign();
  const { state } = useContext(AuthContext);
  return (
    <View style={styles.margintop}>
      <Text style={styles.text}>학교 검색</Text>
      <DropdownList
        title=""
        items={state.collegeLists}
        onChange={(Name) => onChangeValue('college', Name)}
        customStyleContainer={{
          containerLight: styles.picker,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  margintop: {
    marginTop: 28 * SCALE_HEIGHT,
  },
  textinput: {
    width: 335 * SCALE_WIDTH,
    height: 48 * SCALE_HEIGHT,
    borderRadius: 14 * SCALE_HEIGHT,
    borderWidth: 2 * SCALE_WIDTH,
    borderColor: '#73B979',
    marginLeft: 20 * SCALE_WIDTH,
    justifyContent: 'center',
    paddingLeft: 10 * SCALE_WIDTH,
    marginBottom: 18 * SCALE_HEIGHT,
  },
  text: {
    fontSize: FS(18),
    marginLeft: 30 * SCALE_WIDTH,
  },
  picker: {
    borderColor: '#73B979',
    borderBottomWidth: 2,
    width: 335 * SCALE_WIDTH,
  },
});

export default College;
