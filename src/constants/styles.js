import { StyleSheet } from 'react-native';
import FS, { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/Normalize';

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
  headershadow: {
    backgroundColor: 'white',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      height: -1 * SCALE_HEIGHT,
      width: 0,
    },
    shadowRadius: 1 * SCALE_HEIGHT,
    shadowOpacity: 0.1,
    elevation: 3,
  },
  backwhite: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default style;
