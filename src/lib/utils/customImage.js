const isCustomImage = (uri) => {
  return uri.indexOf('https') === 0;
};

export default isCustomImage;
