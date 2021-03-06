import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Context as AuthContext } from 'context/Auth';
import { Context as UserContext } from 'context/User';
import { navigate } from 'lib/utils/navigation';

const Setting = () => {
  const { signOut, signDelete } = useContext(AuthContext);
  const { state } = useContext(UserContext);

  return (
    <View>
      <TouchableOpacity onPress={signOut}>
        <Text>로그아웃</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signDelete({ id: state.id })}>
        <Text>회원탈퇴</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('School', {type:'User'})}>
        <Text>대학교인증</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
