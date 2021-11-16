import server from 'lib/api/server';
import createDataContext from 'lib/utils/createDataContext';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from 'lib/utils/navigation';

const googlemapReducer = (state, action) => {
  switch (action.type) {
    case 'nearbySearch':
      return { token: action.payload };
    default:
      return state;
  }
};

const nearbySearch =
  (dispatch) =>
  async () => {
    try {
      const response = await server.post('/nearbySearch');
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with signIn' });
    }
  };



export const { Provider, Context } = createDataContext(
  googlemapReducer,
  {
    nearbySearch
  },
  { errMesage: '', token: null },
);
