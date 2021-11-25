import server from 'lib/api/server';
import createDataContext from 'lib/utils/createDataContext';

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'initHint':
      return { ...state, hint: null };
    case 'getHint':
      return { ...state, hint: action.payload };
    case 'getStoreResult':
      return { ...state, result: action.payload };
    default:
      return state;
  }
};

const initHint = (dispatch) => async () => {
  try {
    dispatch({ type: 'initHint' });
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with initHint' });
  }
};

const getCollegeHint =
  (dispatch) =>
  async ({ term }) => {
    try {
      const response = await server.get(`/search/collegeHint/${term}`);
      dispatch({ type: 'getHint', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getCollegeHint' });
    }
  };

const getStoreHint =
  (dispatch) =>
  async ({ term }) => {
    try {
      const response = await server.get(`/search/storeHint/${term}`);
      dispatch({ type: 'getHint', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getStoreHint' });
    }
  };

const getStoreResult =
  (dispatch) =>
  async ({ term }) => {
    try {
      const response = await server.get(`/search/store/${term}`);
      dispatch({ type: 'getStoreResult', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getStoreResult' });
    }
  };

export const { Provider, Context } = createDataContext(
  searchReducer,
  {
    initHint,
    getCollegeHint,
    getStoreHint,
    getStoreResult,
  },
  { hint: null, result: null },
);
