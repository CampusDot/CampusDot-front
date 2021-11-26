import React from 'react';
import { TouchableOpacity } from 'react-native';
import { navigate } from 'lib/utils/navigation';
import Icon from 'widgets/Icon';
import style from 'constants/styles';

const Search = () => {
  const onClickButton = () => {
    navigate('SearchStoreLists');
  };

  return (
    <TouchableOpacity onPress={onClickButton}>
      <Icon source={require('public/icons/header_glass.png')} style={style.icons} />
    </TouchableOpacity>
  );
};

export default Search;
