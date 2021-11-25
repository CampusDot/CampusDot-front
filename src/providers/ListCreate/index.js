import React, { createContext, useContext, useState, useRef } from 'react';

const ListCreateContext = createContext(null);
export const useListCreate = () => useContext(ListCreateContext);

const ListCreateProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [commenting, setCommenting] = useState(false);
  const [currentStore, setCurrentStore] = useState(null);
  const [currentComment, setCurrentComment] = useState(null);
  const [stores, setStores] = useState([]);
  const [edit, setEdit] = useState(false);

  const informationRef = useRef({
    title: '',
    content: '',
  });
  const onAddStore = () => {
    setStores([...stores, { store: currentStore, comment: currentComment }]);
  };
  const onEditStore = () => {
    // dont know how eo edit
    setEdit(false);
  };

  const onClickDeleteStore = (object) => {
    setStores(stores.filter((item) => item.store._id !== object.store._id));
  };

  const onClickEdit = (object) => {
    setCurrentStore(object.store);
    setCurrentComment(object.comment);
    setCommenting(true);
    setEdit(true);
  };

  const value = {
    informationRef,
    title,
    content,
    commenting,
    currentStore,
    currentComment,
    stores,
    edit,
    setEdit,
    setCommenting,
    setTitle,
    setContent,
    setCurrentStore,
    setCurrentComment,
    setStores,
    onAddStore,
    onEditStore,
    onClickDeleteStore,
    onClickEdit,
  };

  return <ListCreateContext.Provider value={value}>{children}</ListCreateContext.Provider>;
};

export default ListCreateProvider;
