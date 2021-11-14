import axios from 'axios';
import * as env from 'constants/app';
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
  baseURL: env.SERVER_URL,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err),
);

export default instance;
