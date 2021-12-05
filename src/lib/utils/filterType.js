const filterType = (filters, id) => {
  let result;
  Object.values(filters).forEach((filter) => {
    if (filter._id === id) {
      result = filter.Type;
    }
  });
  return result;
};
export default filterType;
