import server from 'lib/api/server';
import createDataContext from 'lib/utils/createDataContext';

const reviewReducer = (state, action) => {
  switch (action.type) {
    case 'postReview':
      return { ...state };
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

export const { Provider, Context } = createDataContext(
  reviewReducer,
  {
    postReview,
  },
  {
    storelist: [],
  },
);
