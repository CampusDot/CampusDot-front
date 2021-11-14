import server from 'lib/api/server';
import createDataContext from 'lib/utils/createDataContext';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from 'lib/utils/navigation';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signIn':
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
      const response = await server.post('/signIn', { email, password });
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

const localSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signIn', payload: token });
  } else {
    navigate('SignIn');
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signIn,
    signUp,
    signOut,
    localSignIn,
  },
  { errMesage: '', token: null },
);
