import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import style from 'constants/styles';
import { Context as AuthContext } from 'context/Auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { SCALE_WIDTH, SCALE_HEIGHT } from 'lib/utils/normalize';
import { NaverLogin } from '@react-native-seoul/naver-login';
import * as env from 'constants/app';
import Icon from 'widgets/Icon';

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
    <View style={[style.flexRow, styles.flex]}>
      <TouchableOpacity style={styles.socialbutton} onPress={naverLogin}>
        <Icon source={require('public/icons/social_naver.png')} style={styles.socialbutton} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.socialbutton, styles.buttonmargin]} onPress={googleLogin}>
        <Icon source={require('public/icons/social_google.png')} style={styles.socialbutton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    width: '100%',
    height: 40 * SCALE_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 21 * SCALE_HEIGHT,
  },
  socialbutton: {
    width: 40 * SCALE_WIDTH,
    height: 40 * SCALE_WIDTH,
  },
  buttonmargin: {
    marginLeft: 32.5 * SCALE_WIDTH,
  },
});

export default SocialLogin;
