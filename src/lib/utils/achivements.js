const LEVEL_0 = 0;
const LEVEL_1 = 4;
const LEVEL_2 = 7;
const LEVEL_3 = 10;
const LEVEL_4 = 13;

const Achivement = {
  'Lv.0': '학식이 좋아',
  'Lv.1': '학식은 지겨워',
  'Lv.2': '학교 앞에 뭐있지?',
  'Lv.3': '맛집을 찾아서',
  'Lv.4': '단골이 되었다!',
};
const levelbadge = {
  'Lv.0': require('public/icons/stamp_level0_icon.png'),
  'Lv.1': require('public/icons/stamp_level0_icon.png'),
  'Lv.2': require('public/icons/stamp_level0_icon.png'),
  'Lv.3': require('public/icons/stamp_level0_icon.png'),
  'Lv.4': require('public/icons/stamp_level0_icon.png'),
};

export const getLevel = (stampCount) => {
  if (stampCount < LEVEL_1) {
    return 'Lv.0';
  }
  if (stampCount < LEVEL_2) {
    return 'Lv.1';
  }
  if (stampCount < LEVEL_3) {
    return 'Lv.2';
  }
  if (stampCount < LEVEL_4) {
    return 'Lv.3';
  }
  return 'Lv.4';
};

export const getNextLevel = (stampCount) => {
  if (stampCount < LEVEL_1) {
    return 'Lv.1';
  }
  if (stampCount < LEVEL_2) {
    return 'Lv.2';
  }
  if (stampCount < LEVEL_3) {
    return 'Lv.3';
  }
  if (stampCount < LEVEL_4) {
    return 'Lv.4';
  }
  return 'Lv.4';
};

export const getStamp = (stampCount) => {
  if (stampCount < LEVEL_1) {
    return LEVEL_0;
  }
  if (stampCount < LEVEL_2) {
    return LEVEL_1;
  }
  if (stampCount < LEVEL_3) {
    return LEVEL_2;
  }
  if (stampCount < LEVEL_4) {
    return LEVEL_3;
  }
  return LEVEL_4;
};

export const getNextStamp = (stampCount) => {
  if (stampCount < LEVEL_1) {
    return LEVEL_1;
  }
  if (stampCount < LEVEL_2) {
    return LEVEL_2;
  }
  if (stampCount < LEVEL_3) {
    return LEVEL_3;
  }
  if (stampCount < LEVEL_4) {
    return LEVEL_4;
  }
  return LEVEL_4;
};

const getAchivement = (stampCount) => {
  return Achivement[getLevel(stampCount)];
};

export const getBadge = (stampCount) => {
  return levelbadge[getLevel(stampCount)];
};

export const getNextAchivement = (stampCount) => {
  return Achivement[getNextLevel(stampCount)];
};

export default getAchivement;