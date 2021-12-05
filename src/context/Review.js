import server from 'lib/api/server';
import createDataContext from 'lib/utils/createDataContext';

const reviewReducer = (state, action) => {
  switch (action.type) {
    case 'getReviewStore':
      return { ...state, storeLists: action.payload };
    case 'getSelectedReview':
      return { ...state, reviewLists: action.payload[0], currentStore: action.payload[1] };
    case 'getReview':
      return { ...state, reviews: action.payload };
    case 'getFilter':
      return { ...state, filterType: action.payload };
    case 'getRecommendStore':
      return { ...state, recommend: action.payload[0] };
    default:
      return state;
  }
};

const postReview =
  (dispatch) =>
  async ({ Content, Store, fd, Filters }) => {
    try {
      const response = await server.post(`/review`, {
        Content,
        Store,
        Filters,
      });
      if (fd._parts.length > 0) {
        fd.append('reviewId', response.data);
        await server.post('/review/imgUpload', fd, {
          header: { 'content-type': 'multipart/form-data' },
        });
      }
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with postReview' });
    }
  };

const getFilterType = (dispatch) => async () => {
  try {
    const response = await server.get('/review/filter');
    dispatch({ type: 'getFilter', payload: response.data });
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with getFilterType' });
  }
};

const getReviewStore = (dispatch) => async () => {
  try {
    const response = await server.get('/review/store');
    dispatch({ type: 'getReview', payload: response.data });
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with getReview' });
  }
};

const getReview = (dispatch) => async () => {
  try {
    const response = await server.get('/review/store');
    dispatch({ type: 'getReviewStore', payload: response.data });
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with getReviewStore' });
  }
};

const upReview =
  (dispatch) =>
  async ({ id }) => {
    try {
      const response = await server.post('/review/up', { id });
      dispatch({ type: 'getReview', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getReviewStore' });
    }
  };

const downReview =
  (dispatch) =>
  async ({ id }) => {
    try {
      const response = await server.post('/review/down', { id });
      dispatch({ type: 'getReview', payload: response.data });
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

const getRecommendStore =
  (dispatch) =>
  async ({ filters }) => {
    try {
      const response = await server.post('/review/recommend', { filters });
      dispatch({ type: 'getRecommendStore', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with getRecommendStore' });
    }
  };

export const { Provider, Context } = createDataContext(
  reviewReducer,
  {
    postReview,
    getReviewStore,
    getSelectedReview,
    getReview,
    getFilterType,
    upReview,
    downReview,
    getRecommendStore,
  },
  {
    reviews: null,
    storeLists: null,
    reviewLists: null,
    currentStore: null,
    filterType: null,
    recommend: null,
  },
);
