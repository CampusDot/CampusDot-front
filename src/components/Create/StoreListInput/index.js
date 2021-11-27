import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { useStoreListCreate } from 'providers/StoreListCreate';
import FS, { SCALE_HEIGHT, SCALE_WIDTH } from 'lib/utils/normalize';
import style from 'constants/styles';

const StoreListInput = () => {
  const { onChangeValue, information } = useStoreListCreate();

  const onChangeTitle = (text) => {
    onChangeValue('title', text);
  };

  const onChangeContent = (text) => {
    onChangeValue('content', text);
  };

  return (
    <View style={styles.container}>
      <View style={[style.flexRow, style.space_between, styles.header]}>
        <View style={style.flexRow}>
          <Text style={styles.title}>제목</Text>
          <Text style={styles.example}>(ex. 고기에 환장하는 사람들에게 주는 선물)</Text>
        </View>
        <Text style={styles.limit}>{information.title.length} / 30</Text>
      </View>
      <TextInput
        value={information.title}
        onChangeText={(text) => onChangeTitle(text)}
        placeholder="제목을 입력해주세요"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={30}
        style={styles.input}
      />
      <View style={[style.flexRow, style.space_between, styles.header]}>
        <View style={style.flexRow}>
          <Text style={styles.title}>설명</Text>
          <Text style={styles.example}>(ex. 신촌 4년차 고기 킬러가 만든 리스트랍니다)</Text>
        </View>
        <Text style={styles.limit}>{information.content.length} / 500</Text>
      </View>
      <TextInput
        value={information.content}
        onChangeText={(text) => onChangeContent(text)}
        placeholder="리스트 설명을 입력해주세요"
        multiline
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={500}
        style={styles.commentInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20 * SCALE_WIDTH,
  },
  header: {
    marginTop: 25 * SCALE_HEIGHT,
    marginBottom: 17 * SCALE_HEIGHT,
  },
  title: {
    fontSize: FS(16),
    color: '#191919',
  },
  example: {
    fontSize: FS(12),
    color: '#191919',
    marginLeft: 8 * SCALE_WIDTH,
  },
  limit: {
    fontSize: FS(14),
    color: '#b4b4b4',
  },
  input: {
    borderBottomWidth: 1 * SCALE_HEIGHT,
    borderBottomColor: 'rgba(153,153,153,0.5)',
    paddingBottom: 10 * SCALE_HEIGHT,
  },
  commentInput: {
    borderBottomWidth: 1 * SCALE_HEIGHT,
    borderBottomColor: 'rgba(153,153,153,0.5)',
    paddingBottom: 10 * SCALE_HEIGHT,
    height: 48 * SCALE_HEIGHT,
  },
});

export default StoreListInput;
