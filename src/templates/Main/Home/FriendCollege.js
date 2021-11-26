import React, { useContext, useEffect } from 'react';
import { Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import SearchBar from 'components/SearchBar';
import { Context as CollegeContext } from 'context/College';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';

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
          collegeLists.map((item) => {
            const { Name, _id } = item;
            return (
              <TouchableOpacity key={_id} style={styels.college}>
                <Text style={styels.name}>{Name}</Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </>
  );
};

const styels = StyleSheet.create({
  listConatiner: {
    marginTop: 24 * SCALE_HEIGHT,
    marginLeft: 37 * SCALE_WIDTH,
  },
  college: {
    marginBottom: 20 * SCALE_HEIGHT,
  },
  name: {
    fontSize: FS(16),
  },
});

export default FriendCollege;
