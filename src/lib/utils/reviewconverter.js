const reviewconverter = (rating, len) => {
  return len ? rating / len : 0;
};

export default reviewconverter;
