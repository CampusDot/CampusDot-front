import server from 'lib/api/server';
import createDataContext from 'lib/utils/createDataContext';

const userReducer = (state, action) => {
  switch (action.type) {
    case 'getInformation':
      return {
        ...state,
        id: action.payload.Id,
        name: action.payload.Name,
        profileImage: action.payload.ProfileImage,
        college: action.payload.College,
        usedStamp: action.payload.UsedStamp,
        approved: action.payload.Approved,
        challengeLists: action.payload.ChallengeLists,
        storeLists: action.payload.StoreLists,
        reviewLists: action.payload.Review,
        allStamp: action.payload.AllStamp,
        notices: action.payload.Notice,
        collegeName: action.payload.CollegeName,
      };
    case 'updateProfile':
      return { ...state, name: action.payload.Name, profileImage: action.payload.ProfileImage };
    case 'getChallengeLists':
      return { ...state, challengeLists: action.payload };
    case 'getStoreLists':
      return { ...state, storeLists: action.payload };
    case 'getReviews':
      return { ...state, reviewLists: action.payload };
    case 'getNotices':
      return { ...state, notices: action.payload };
    default:
      return state;
  }
};

const getInformation = (dispatch) => async () => {
  try {
    const response = await server.get('/user');
    dispatch({ type: 'getInformation', payload: response.data });
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with getInformation' });
  }
};

const updateProfile =
  (dispatch) =>
  async ({ name }) => {
    try {
      const response = await server.put('/user', { name });
      dispatch({ type: 'updateProfile', payload: response.data });
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with updateProfile' });
    }
  };

const updateCollege =
  (dispatch) =>
  async ({ fd }) => {
    try {
      if (fd._parts.length > 0) {
        await server.post('/user/updateCollege', fd, {
          header: { 'content-type': 'multipart/form-data' },
        });
      }
    } catch (err) {
      dispatch({ type: 'error', payload: 'Something went wrong with updateCollege' });
    }
  };

const getChallengeLists = (dispatch) => async () => {
  try {
    const response = await server.get('/user/challenge');
    dispatch({ type: 'getChallengeLists', payload: response.data });
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with getChallengeLists' });
  }
};

const getStoreLists = (dispatch) => async () => {
  try {
    const response = await server.get('/user/store');
    dispatch({ type: 'getStoreLists', payload: response.data });
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with getStoreLists' });
  }
};

const getReviews = (dispatch) => async () => {
  try {
    const response = await server.get('/user/review');
    dispatch({ type: 'getReviews', payload: response.data });
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with getReviews' });
  }
};

const getNotices = (dispatch) => async () => {
  try {
    const response = await server.get('/user/notice');
    dispatch({ type: 'getNotices', payload: response.data });
  } catch (err) {
    dispatch({ type: 'error', payload: 'Something went wrong with getNotices' });
  }
};

export const { Provider, Context } = createDataContext(
  userReducer,
  {
    getInformation,
    updateProfile,
    getChallengeLists,
    getStoreLists,
    getReviews,
    getNotices,
    updateCollege,
  },
  {
    id: null,
    name: null,
    profileImage: null,
    college: null,
    usedStamp: null,
    approved: null,
    storeLists: null,
    challengeLists: null,
    reviewLists: null,
    allStamp: null,
    notices: null,
    collegeName: null,
  },
);
