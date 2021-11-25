import server from 'lib/api/server';
import createDataContext from 'lib/utils/createDataContext';

const reviewReducer = (state, action) => {
  switch (action.type) {
    case 'postReview':
      return { ...state };
    case 'getReviewStore':
      return { ...state, storeLists: action.payload };
    case 'getSelectedReview':
      return { ...state, reviewLists: action.payload };
    default:
      return state;
  }
};

const postReview =
  (dispatch) =>
  async ({ Content, Rating, Store }) => {
    try {
      const response = await server.post(`/review`, {
        Content,
        Rating,
        Store,
      });
      dispatch({ type: 'postReviewt', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with postReview' });
    }
  };

const getReviewStore = (dispatch) => async () => {
  try {
    const response = await server.get('/review/store');
    dispatch({ type: 'getReviewStore', payload: response.data });
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with getReviewStore' });
  }
};

const getSelectedReview =
  (dispatch) =>
  async ({ id }) => {
    try {
      const response = await server.get(`/review/${id}`);
      dispatch({ type: 'getSelectedReview', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getSelectedReview' });
    }
  };

export const { Provider, Context } = createDataContext(
  reviewReducer,
  {
    postReview,
    getReviewStore,
    getSelectedReview,
  },
  {
    storeLists: null,
    reviewLists: null,
  },
);
