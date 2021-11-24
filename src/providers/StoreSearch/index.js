import React, { createContext, useContext, useState } from 'react';

const StoreSearchContext = createContext(null);
export const useStoreSearch = () => useContext(StoreSearchContext);

const StoreSearchProvider = ({ children }) => {
  const [searchtext, setSearchText] = useState('');
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    searchtext,
    setSearchText,
  };

  return <StoreSearchContext.Provider value={value}>{children}</StoreSearchContext.Provider>;
};

export default StoreSearchProvider;
