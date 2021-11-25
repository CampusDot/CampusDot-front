import React, { createContext, useContext, useState } from 'react';

const StoreListCreateContext = createContext(null);

export const useStoreListCreate = () => useContext(StoreListCreateContext);

const StoreListCreateProvider = ({ children }) => {
  const [stores, setStores] = useState([]);
  const [information, setInformation] = useState({
    title: '',
    content: '',
  });

  const onChangeValue = (type, value) => {
    if (type === 'title') {
      setInformation({
        ...information,
        title: value,
      });
    } else if (type === 'content') {
      setInformation({
        ...information,
        content: value,
      });
    }
  };

  const onAddStore = (store) => {
    const newStore = [];
    let tok = true;
    Object.values(stores).forEach((item) => {
      if (item.info._id !== store.info._id) {
        newStore.push(item);
      } else {
        tok = false;
        newStore.push(store);
      }
    });
    if (tok) {
      newStore.push(store);
    }
    setStores(newStore);
  };

  const onClickDeleteStore = (id) => {
    setStores(stores.filter((store) => store.info._id !== id));
  };

  const value = {
    information,
    stores,
    onChangeValue,
    onAddStore,
    onClickDeleteStore,
  };

  return (
    <StoreListCreateContext.Provider value={value}>{children}</StoreListCreateContext.Provider>
  );
};

export default StoreListCreateProvider;
