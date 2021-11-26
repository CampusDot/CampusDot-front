import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import Header from 'components/Header';
import StoreListInput from 'components/Create/StoreListInput';
import AddStoreButton from 'components/Create/AddStoreButton';
import AddedStoreLists from 'components/Create/AddedStoreLists';
import CreateListButton from 'components/Header/Create/CreateListButton';
import { useStoreListCreate } from 'providers/StoreListCreate';

const CreateStoreList = ({ store }) => {
  const { onAddStore } = useStoreListCreate();
  useEffect(() => {
    if (store) {
      onAddStore(store);
    }
  }, [store]);
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <Header back actions={[<CreateListButton />]} />
      <StoreListInput />
      <AddStoreButton />
      <AddedStoreLists />
    </ScrollView>
  );
};

export default CreateStoreList;
