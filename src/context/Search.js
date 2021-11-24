import server from 'lib/api/server';
import createDataContext from 'lib/utils/createDataContext';

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'getHint':
      return { ...state, hint: action.payload };
    case 'getStores':
      return { ...state, stores: action.payload };
    default:
      return state;
  }
};

const getCollegeHint =
  (dispatch) =>
  async ({ term }) => {
    try {
      const response = await server.get(`/search/college/${term}`);
      dispatch({ type: 'getHint', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getCollegeHint' });
    }
  };

const getStoreHint =
  (dispatch) =>
  async ({ term }) => {
    try {
      const response = await server.get(`/search/store/${term}`);
      dispatch({ type: 'getHint', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getStoreHint' });
    }
  };

const getStores =
  (dispatch) =>
  async ({ term }) => {
    try {
      const response = await server.get(`/search/stores/${term}`);
      dispatch({ type: 'getStores', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getStoreHint' });
    }
  };
export const { Provider, Context } = createDataContext(
  searchReducer,
  {
    getCollegeHint,
    getStoreHint,
    getStores,
  },
  { hint: null, stores: null },
);
