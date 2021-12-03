import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { useSign } from 'providers/Sign';
import {Picker} from '@react-native-picker/picker';

const College = () => {
  const { onChangeValue } = useSign();
  const [ value, setValue] = useState('Korea');

  return (
    <View>
      <Text>학교 검색</Text>
      <Picker
  selectedValue={value}
  onValueChange={(itemValue, itemIndex) =>
    setValue(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
    </View>
  );
};

export default College;
