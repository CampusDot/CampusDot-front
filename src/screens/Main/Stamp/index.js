import React, { useContext } from 'react';
import Stamp from 'templates/Main/Stamp';
import { Context as UserContext } from 'context/User';
import Header from 'components/Header';
import getAchivement, { getLevel } from 'lib/utils/achivements';
import Coupon from 'components/Header/Stamp/Coupon';
import Ranking from 'components/Header/Stamp/Ranking';

export default function () {
  const { state: user } = useContext(UserContext);
  return (
    <>
      <Header
        title={`${getLevel(user.allStamp)} ${getAchivement(user.allStamp)}`}
        landings={<Coupon />}
        actions={<Ranking />}
      />
      <Stamp />
    </>
  );
}
