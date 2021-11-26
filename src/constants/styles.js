import { StyleSheet } from 'react-native';
import { SCALE_WIDTH } from 'lib/utils/Normalize';

const style = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  space_between: {
    justifyContent: 'space-between',
  },
  icons: {
    width: 40 * SCALE_WIDTH,
    height: 40 * SCALE_WIDTH,
  },
});

export default style;
