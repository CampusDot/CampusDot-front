import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { goBack } from 'lib/utils/navigation';
import style from 'constants/styles';
import { Context as StoreListContext } from 'context/StoreList';
import { Context as ReviewContext } from 'context/Review';
import { useListCreate } from 'providers/ListCreate';
import { useReviewCreate } from 'providers/ReviewCreate';

const Header = ({ title, titleStyle, back, landings, actions }) => {
  const onClickBack = () => {
    goBack();
  };

  return (
    <View style={[styles.container, style.flexRow, style.space_between]}>
      <View style={styles.landings}>
        {landings ||
          (back && (
            <TouchableOpacity onPress={onClickBack}>
              <Text>back</Text>
            </TouchableOpacity>
          ))}
      </View>
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      <View style={styles.actions}>{actions}</View>
    </View>
  );
};

export const CreateListSearchHeader = ({ setIsSearch }) => {
  const [text, setText] = useState();
  const onClickBack = () => {
    setIsSearch(false);
  };
  return (
    <View style={[styles.CLSHcontainer, style.flexRow]}>
      <TouchableOpacity onPress={onClickBack}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <TextInput
        value={text}
        onChangeText={(txt) => setText(txt)}
        placeholder="가게를 검색해주세요."
        multiline={false}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export const ReviewWriteHeader = ({ setIsWrite }) => {
  const { setStore, store, setReview, review, setRating, rating } = useReviewCreate();
  const { postReview } = useContext(ReviewContext);

  const onClickBack = () => {
    setIsWrite(false);
  };

  const onClickComplete = async () => {
    await postReview({
      Content: review,
      Rating: rating,
      Store: store,
    });
    setStore(null);
    setReview('');
    setRating('0');
    setIsWrite(false);
  };

  return (
    <View style={[styles.CLSHcontainer, style.flexRow]}>
      <TouchableOpacity onPress={onClickBack}>
        <Text>뒤로가기       </Text>
      </TouchableOpacity>
      <Text>리뷰 작성        </Text>
      <TouchableOpacity onPress={onClickComplete}>
        <Text>완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderWidth: 1,
  },
  title: {
    textAlign: 'center',
    width: '100%',
  },
  landings: {
    position: 'absolute',
    left: 15,
    zIndex: 99,
  },
  actions: {
    position: 'absolute',
    right: 15,
    zIndex: 99,
  },
  CLHcontainer: {
    height: 40,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  CLSHcontainer: {
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

export default Header;
