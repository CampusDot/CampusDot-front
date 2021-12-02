import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import style from 'constants/styles';
import { Context as AuthContext } from 'context/Auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { MAIN_COLOR } from 'constants/colors';
import { SCALE_WIDTH } from 'lib/utils/normalize';
import { NaverLogin } from '@react-native-seoul/naver-login';
import * as env from 'constants/app';

const SocialLogin = () => {
  const { getGoogleInfo, getNaverInfo } = useContext(AuthContext);
  const iosKeys = {
    kConsumerKey: env.kConsumerKeyIOS,
    kConsumerSecret: env.kConsumerSecretIOS,
    kServiceAppName: '캠퍼스닷',
    kServiceAppUrlScheme: 'naverlogin', // only for iOS
  };

  const googleLogin = async () => {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    await getGoogleInfo({ email: userInfo.user.email, id: userInfo.user.id });
  };
  const naverLogin = () => {
    NaverLogin.login(iosKeys, async (err, token) => {
      await getNaverInfo({ token: token.accessToken });
    });
  };

  return (
    <View style={style.flexRow}>
      <TouchableOpacity style={styles.socialbutton} onPress={googleLogin}>
        <Text>구글</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialbutton} onPress={naverLogin}>
        <Text>네이버</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialbutton: {
    width: 40 * SCALE_WIDTH,
    height: 40 * SCALE_WIDTH,
    backgroundColor: MAIN_COLOR,
  },
});

export default SocialLogin;
