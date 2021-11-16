import React, { useState, useContext } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { Context } from 'context/GoogleMap';
import { navigate } from 'lib/utils/navigation';

const GoogleMap = () => {
  const { nearbySearch} = useContext(Context);

  return (
    <View style={{ marginTop: 100 }}>
        <TouchableOpacity onPress={()=>nearbySearch()}>
          <Text>googlemap</Text>
        </TouchableOpacity>
    </View>
  );
};

export default GoogleMap;
