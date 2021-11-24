import React from 'react';
import { View } from 'react-native';
import Header from 'components/Header';
import SelectedStoreInfo from 'components/Main/SelectedStoreInfo';
import SelectedStoreReview from 'components/Main/SelectedStoreReview';
import ReviewButton from 'components/Main/ReviewButton';

const Store = {
  _id: "dddaa",
  Information: {
    name: "ONDAL",
    vicinity: "서울시 강동구 길동"
  },
  Review: [
      {
        _id: "aaaa",
        PostUser: {
            Name: "서효석",
            ProfileImage: "aaa",
        },
        Content: "정말 맛있어요",
        Time: "2021-11",
        Photo: ["aaa", "bbb"],
        Rating: 3, 
      },
      {
        _id: "bbbb",
        PostUser: {
            Name: "박현수",
            ProfileImage: "aaa",
        },
        Content: "둘이먹다 하나죽어도 몰라요",
        Time: "2021-11",
        Photo: ["aaad", "bbbd"],
        Rating: 5, 
      }
  ],
  Rating: 4,
};

const SelectedStore = ({ setIsWrite }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header back title="리뷰" />
      <SelectedStoreInfo
        Name={Store.Information.name}
        Address={Store.Information.vicinity}
        Rating={Store.Rating}
      />
      <SelectedStoreReview Review={Store.Review} />
      <ReviewButton setIsWrite={setIsWrite} Store={Store._id} />
    </View>
  );
};

export default SelectedStore;
