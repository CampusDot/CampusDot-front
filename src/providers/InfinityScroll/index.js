import React, { createContext, useContext, useState } from 'react';

const InfinityScrollContext = createContext(null);

export const useInfinityScroll = () => useContext(InfinityScrollContext);

const InfinityScrollProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height;
  };

  const value = {
    loading,
    setLoading,
    isCloseToBottom,
  };
  return <InfinityScrollContext.Provider value={value}>{children}</InfinityScrollContext.Provider>;
};

export default InfinityScrollProvider;
