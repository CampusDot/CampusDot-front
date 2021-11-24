import React, { createContext, useContext, useState } from 'react';
import { Context as ReviewContext } from 'context/Review';
import { navigate } from 'lib/utils/navigation';

const ReviewCreateContext = createContext(null);

export const useReviewCreate = () => useContext(ReviewCreateContext);

const ReviewCreateProvider = ({ children }) => {
  const { postReview } = useContext(ReviewContext);
  const [image, setImage] = useState([]);
  const [information, setInformation] = useState({
    review: '',
    rating: 0,
    image: [],
    storeId: null,
  });

  const onChangeValue = (type, value) => {
    if (type === 'rating') {
      setInformation({
        ...information,
        rating: value,
      });
    } else if (type === 'review') {
      setInformation({
        ...information,
        review: value,
      });
    } else if (type === 'store') {
      setInformation({
        ...information,
        storeId: value,
      });
    }
  };

  const onClickPostReview = async () => {
    navigate('Home');
    await postReview({
      Content: information.review,
      Rating: information.rating,
      Store: information.storeId,
    });
  };

  const value = {
    information,
    image,
    setImage,
    setInformation,
    onChangeValue,
    onClickPostReview,
  };

  return <ReviewCreateContext.Provider value={value}>{children}</ReviewCreateContext.Provider>;
};

export default ReviewCreateProvider;
