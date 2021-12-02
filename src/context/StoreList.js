import server from 'lib/api/server';
import createDataContext from 'lib/utils/createDataContext';

const createReducer = (state, action) => {
  switch (action.type) {
    case 'getSelectedStoreList':
      return { ...state, selectedStoreList: action.payload[0], reviewClearList: action.payload[1] };
    case 'getChallengeLists':
      return { ...state, challengeStoreList: action.payload };
    default:
      return state;
  }
};

const postStoreList =
  (dispatch) =>
  async ({ Stores, Title, Comment, StoreComment, PhotoLists, fd }) => {
    try {
      const response = await server.post(`/storelist`, {
        Stores,
        Title,
        Comment,
        StoreComment,
        PhotoLists,
      });
      if (fd._parts.length > 0) {
        fd.append('storeListId', response.data);
        await server.post('/storelist/imgUpload', fd, {
          header: { 'content-type': 'multipart/form-data' },
        });
      }
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with postStoreList' });
    }
  };

const getSelectedStoreList =
  (dispatch) =>
  async ({ id }) => {
    try {
      const response = await server.get(`/storelist/${id}`);
      dispatch({ type: 'getSelectedStoreList', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getSelectedStoreList' });
    }
  };

const challengeStoreList =
  (dispatch) =>
  async ({ id }) => {
    try {
      await server.post('/storelist/challenge', { id });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with challengeStoreList' });
    }
  };

const getChallengeLists = (dispatch) => async () => {
  try {
    const response = await server.get('/storelist/challenge');
    dispatch({ type: 'getChallengeLists', payload: response.data });
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with getChallengeLists' });
  }
};

const completeStoreList =
  (dispatch) =>
  async ({ id }) => {
    try {
      await server.put('/storelist/challenge', { id });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with completeStoreList' });
    }
  };

export const { Provider, Context } = createDataContext(
  createReducer,
  {
    postStoreList,
    getSelectedStoreList,
    challengeStoreList,
    getChallengeLists,
    completeStoreList,
  },
  {
    selectedStoreList: null,
    challengeStoreList: null,
    reviewClearList: null,
  },
);
