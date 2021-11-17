import server from 'lib/api/server';
import createDataContext from 'lib/utils/createDataContext';

const collegeReducer = (state, action) => {
  switch (action.type) {
    case 'getStore':
      return {
        ...state,
        store: state.store.concat(action.payload),
        storePage: state.storePage + 1,
      };
    case 'notNextStore':
      return { ...state, notNextStore: true };
    case 'getStoreLists':
      return {
        ...state,
        storeLists: state.storeLists.concat(action.payload),
        storeListsPage: state.storeListsPage + 1,
      };
    case 'notNextStoreLists':
      return { ...state, notNextStoreLists: true };
    default:
      return state;
  }
};

const getStore =
  (dispatch) =>
  async ({ page }) => {
    try {
      const response = await server.get(`/college/store/${page}`);
      if (response.data.length !== 0) {
        dispatch({ type: 'getStore', payload: response.data });
      } else {
        dispatch({ type: 'notNextStore' });
      }
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getStore' });
    }
  };

const getStoreLists =
  (dispatch) =>
  async ({ page }) => {
    try {
      const response = await server.get(`/college/storeLists/${page}`);
      if (response.data.length !== 0) {
        dispatch({ type: 'getStoreLists', payload: response.data });
      } else {
        dispatch({ type: 'notNextStoreLists' });
      }
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getStore' });
    }
  };

export const { Provider, Context } = createDataContext(
  collegeReducer,
  {
    getStore,
    getStoreLists,
  },
  {
    store: [],
    storePage: 0,
    notNextStore: false,
    storeLists: [],
    storeListsPage: 0,
    notNextStoreLists: false,
  },
);
