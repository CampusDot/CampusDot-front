import React from 'react';
import MyPage from 'templates/Main/MyPage';
import { Provider } from 'context/College';

export default function () {
  return (
    <Provider>
      <MyPage />
    </Provider>
  );
}
