import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from 'components/Header';
import StoreListInput from 'components/Create/StoreListInput';
import AddStoreButton from 'components/Create/AddStoreButton';
import AddedStoreLists from 'components/Create/AddedStoreLists';
import CreateListButton from 'components/Header/Create/CreateListButton';
import { useStoreListCreate } from 'providers/StoreListCreate';
import FS from 'lib/utils/normalize';

const CreateStoreList = ({ store }) => {
  const { onAddStore } = useStoreListCreate();
  useEffect(() => {
    if (store) {
      onAddStore(store);
    }
  }, [store]);
  return (
    <View style={styles.container}>
      <Header
        back
        actions={[<CreateListButton />]}
        title="리스트 만들기"
        titleStyle={styles.title}
      />
      <ScrollView>
        <StoreListInput />
        <AddStoreButton />
        <AddedStoreLists />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: FS(18),
  },
});

export default CreateStoreList;
