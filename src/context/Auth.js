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
    case 'error':
      return { ...state, errMessage: action.payload };
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
      navigate('SignIn');
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

const signDelete =
  (dispatch) =>
  async ({ id }) => {
    try {
      await server.get(`/signDelete/${id}`);
      await AsyncStorage.removeItem('token');
      dispatch({ type: 'signOut' });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with signOut' });
    }
  };

const getGoogleInfo =
  (dispatch) =>
  async ({ email, id }) => {
    try {
      const response = await server.get(`/social/google/${email}/${id}`);
      if (response.data[0] === false) {
        navigate('SignUp', { email: response.data[1], password: response.data[2], isSNS: true });
      } else {
        const res = await server.post('/signIn', {
          email: response.data[1],
          password: response.data[2],
        });
        await AsyncStorage.setItem('token', res.data);
        dispatch({ type: 'signIn', payload: res.data });
      }
    } catch (err) {
      dispatch({ type: 'error', payload: '이메일과 비밀번호가 틀립니다' });
    }
  };

const getNaverInfo =
  (dispatch) =>
  async ({ token }) => {
    try {
      const response = await server.get(`/social/naver/${token}`);
      if (response.data[0] === false) {
        navigate('SignUp', { email: response.data[1], password: response.data[2], isSNS: true });
      } else {
        const res = await server.post('/signIn', {
          email: response.data[1],
          password: response.data[2],
        });
        await AsyncStorage.setItem('token', res.data);
        dispatch({ type: 'signIn', payload: res.data });
        // navigate('Main');
      }
    } catch (err) {
      dispatch({ type: 'error', payload: '이메일과 비밀번호가 틀립니다' });
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
    signDelete,
    localSignIn,
    getGoogleInfo,
    getNaverInfo,
  },
  { errMesage: '', token: null },
);
