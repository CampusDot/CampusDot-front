import server from 'api/server';
import createDataContext from 'lib/createDataContext';
import AsyncStorage from '@react-native-community/async-storage';

const authReducer = (state, action) => {
  switch (action.type) {
    case ('signIn', 'signUp'):
      return { token: action.payload };
    case 'signOut':
      return { token: null };
    default:
      return state;
  }
};

const signIn =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await server.post(`/signIn`, { email, password });
      await AsyncStorage.setItem('token', response.data);
      dispatch({ type: 'signIn', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with signIn' });
    }
  };

const signUp =
  (dispatch) =>
  async ({ email, password, college, name }) => {
    try {
      const response = await server.post('/signUp', { email, password, college, name });
      await AsyncStorage.setItem('token', response.data);
      dispatch({ type: 'signUp', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with signUp' });
    }
  };

const signOut = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signOut' });
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with signOut' });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signIn,
    signUp,
    signOut,
  },
  { errMesage: '', token: null },
);
