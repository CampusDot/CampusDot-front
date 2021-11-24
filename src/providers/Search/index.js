import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext(null);
export const useSearch = () => useContext(SearchContext);

const SearchProvider = ({ children }) => {
  const [text, setText] = useState('');

  const value = {
    text,
    setText,
  };

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export default SearchProvider;
