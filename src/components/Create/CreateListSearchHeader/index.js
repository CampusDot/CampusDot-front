import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import style from 'constants/styles';
import { useStoreSearch } from 'providers/StoreSearch';
import { Context as SearchContext } from 'context/Search';

const CreateListSearchHeader = ({ setIsSearch, setSearching }) => {
  const { searchtext, setSearchText } = useStoreSearch();
  const { getStoreHint, getStores } = useContext(SearchContext);
  const onClickBack = () => {
    setIsSearch(false);
    setSearchText('');
  };
  const onChangeText = (txt) => {
    setSearching(true);
    setSearchText(txt);
    if (txt) {
      getStoreHint({ term: txt });
    } else {
      setSearching(false);
    }
  };
  const onFocusInput = () => {
    setSearching(true);
  };
  const onPressSearch = () => {
    setSearchText(searchtext);
    getStores({ term: searchtext });
    setSearching(false);
  };

  return (
    <View style={[styles.container, style.flexRow]}>
      <TouchableOpacity onPress={onClickBack}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <TextInput
        value={searchtext}
        onChangeText={(txt) => onChangeText(txt)}
        placeholder="가게를 검색해주세요."
        onFocus={onFocusInput}
        onSubmit={onPressSearch}
        multiline={false}
        autoCapitalize="none"
        autoCorrect={false}
        style={{ width: 300 }}
      />
      <TouchableOpacity onPress={onPressSearch}>
        <Text>검색</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
  },
  profileImg: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 1,
  },
});

export default CreateListSearchHeader;
