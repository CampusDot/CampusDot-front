import React from 'react';
import { View } from 'react-native';
import TextTicker from 'react-native-text-ticker';

const MoveText = ({ container, text, textStyles }) => {
  return (
    <View style={container}>
      <TextTicker duration={7000} bounce={false} marqueeDelay={1000} style={textStyles}>
        {text}
      </TextTicker>
    </View>
  );
};

export default MoveText;
