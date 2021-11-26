import { StyleSheet } from 'react-native';
import FS, { SCALE_WIDTH } from 'lib/utils/normalize';

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
  headertitle: {
    fontSize: FS(20),
  },
  backwhite: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default style;
