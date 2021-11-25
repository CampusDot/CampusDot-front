import React, { useState, useContext, useEffect } from 'react';
import { Context as SearchContext } from 'context/Search';
import { useSearch } from 'providers/Search';
import SearchBar from 'components/SearchBar';
import StoreListSearchResult from 'components/Create/StoreListSearchResult';
import StoreComment from 'components/Create/StoreComment';
import StoreSearchHint from 'components/Search/StoreSearchHint';

const SearchStoreList = () => {
  const { getStoreHint, getStoreResult, initHint } = useContext(SearchContext);
  const { text } = useSearch();
  const [commentModal, setCommentModal] = useState(false);
  const [store, setStore] = useState(null);
  const [searching, setSearching] = useState(false);

  const onClickStore = (info) => {
    setCommentModal(true);
    setStore(info);
  };

  const onCloseModal = () => {
    setCommentModal(false);
    setStore(null);
  };

  const onPressSearch = () => {
    getStoreResult({ term: text });
    setSearching(true);
  };

  useEffect(() => {
    if (text) {
      getStoreHint({ term: text });
    } else {
      initHint();
      setSearching(false);
    }
  }, [text]);

  return (
    <>
      <SearchBar placeholder="식당 이름을 검색해주세요" onSubmit={onPressSearch} />
      {searching ? (
        <>
          <StoreListSearchResult onClickStore={onClickStore} />
          {commentModal && (
            <StoreComment onCloseModal={onCloseModal} store={store} currentComment="" />
          )}
        </>
      ) : (
        <StoreSearchHint setSearching={setSearching} />
      )}
    </>
  );
};

export default SearchStoreList;
