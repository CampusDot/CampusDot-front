import React from 'react';
import ChallengeLists from 'templates/Main/MyPage/menu/ChallengeLists';
import MyStoreLists from 'templates/Main/MyPage/menu/MyStoreLists';
import ReviewLists from 'templates/Main/MyPage/menu/ReviewLists';
import Setting from 'templates/Main/MyPage/menu/Setting';

const SelectedSection = ({ route }) => {
  const { menu } = route.params;
  const menuLists = {
    0: <ChallengeLists />,
    1: <MyStoreLists />,
    2: <ReviewLists />,
    3: <Setting />,
  };

  return <>{menuLists[menu]}</>;
};
export default SelectedSection;
