import React, { createContext, useContext, useState } from 'react';

const ReviewCreateContext = createContext(null);
export const useReviewCreate = () => useContext(ReviewCreateContext);

const ReviewCreateProvider = ({ children }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('0');
  const [image, setImage] = useState([]);
  const [store, setStore] = useState(null);
  const [edit, setEdit] = useState(false);

  const value = {
    review,
    rating,
    store,
    edit,
    image,
    setReview,
    setRating,
    setStore,
    setEdit,
    setImage,
  };

  return <ReviewCreateContext.Provider value={value}>{children}</ReviewCreateContext.Provider>;
};

export default ReviewCreateProvider;
