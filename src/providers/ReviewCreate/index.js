import React, { createContext, useContext, useState } from 'react';
import { Context as ReviewContext } from 'context/Review';
import { navigate } from 'lib/utils/navigation';

const ReviewCreateContext = createContext(null);

export const useReviewCreate = () => useContext(ReviewCreateContext);

const ReviewCreateProvider = ({ children }) => {
  const { postReview } = useContext(ReviewContext);
  const [images, setImages] = useState([]);
  const [information, setInformation] = useState({
    review: '',
    rating: '0',
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

  const onClickPostReview = async (id) => {
    // eslint-disable-next-line no-undef
    const fd = new FormData();
    if (images.length > 0) {
      images.forEach(({ name, type, uri }) => {
        fd.append('img', {
          name,
          type,
          uri,
        });
      });
    }
    navigate('Home');
    await postReview({
      Content: information.review,
      Rating: Number(information.rating),
      Store: id,
      fd,
    });
  };

  const value = {
    information,
    images,
    setImages,
    setInformation,
    onChangeValue,
    onClickPostReview,
  };

  return <ReviewCreateContext.Provider value={value}>{children}</ReviewCreateContext.Provider>;
};

export default ReviewCreateProvider;
