import React, { useContext, useEffect } from 'react';
import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import SearchBar from 'components/SearchBar';
import { Context as CollegeContext } from 'context/College';

const FriendCollege = () => {
  const { getCollege, state } = useContext(CollegeContext);
  const { collegeLists } = state;
  useEffect(() => {
    getCollege();
  }, []);
  return (
    <>
      <SearchBar placeholder="학교 이름을 검색해주세요" />
      <ScrollView contentContainerStyle={styels.listConatiner}>
        {collegeLists &&
          collegeLists.map(({ Name, _id }) => {
            return (
              <TouchableOpacity key={_id} style={styels.text}>
                <Text>{Name}</Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </>
  );
};

const styels = StyleSheet.create({
  listConatiner: {
    marginTop: 24,
    marginLeft: 34,
  },
  text: {
    marginBottom: 18,
  },
});

export default FriendCollege;
