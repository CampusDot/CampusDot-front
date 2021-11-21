import server from 'lib/api/server';
import createDataContext from 'lib/utils/createDataContext';

const createReducer = (state, action) => {
  switch (action.type) {
    case 'postStoreList':
      return { ...state };
    default:
      return state;
  }
};

const postStoreList =
  (dispatch) =>
  async ({ Stores, Title, Comment }) => {
    try {
      const response = await server.post(`/storelist/storelist/`, {
        Stores,
        Title,
        Comment,
      });
      dispatch({ type: 'postStoreList', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getStore' });
    }
  };

export const { Provider, Context } = createDataContext(
  createReducer,
  {
    postStoreList,
  },
  {
    storelist: [],
  },
);
