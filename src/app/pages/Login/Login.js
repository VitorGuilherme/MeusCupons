import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SharedTextInput, SharedButton} from '../../components/sharedComponents';
import styles from './Styles';

import i18n from '../../components/i18n';

import auth from '@react-native-firebase/auth';

export default Login = () => {
  const navigation = useNavigation();

  const [isEyeClosed, setIsEyeClosed] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [isLoading, setIsloading] = useState(false);
  const [showBlurBackground, setShowBlurBackground] = useState(false);

  const signIn = () => {
    if (email && password) {
      setIsloading(true);
      setShowBlurBackground(true);

      setTimeout(() => {
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            setIsloading(false);
            navigation.navigate('Home');
          })
          .catch(() => {
            setIsloading(false);
            Alert.alert(i18n.invalidEmailOrPassword);
          });
      }, 2000);
    } else {
      Alert.alert(i18n.fillRequiredFields);
    }
  };

  const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const passwordRegex = new RegExp(/^\d{6}$/);

  const handleEmailValidation = () => {
    emailRegex.test(email)
      ? setEmailValidation(true)
      : setEmailValidation(false);
  };

  const handlePasswordValidation = () => {
    passwordRegex.test(password)
      ? setPasswordValidation(true)
      : setPasswordValidation(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={-100}>
        {isLoading && (
          <View style={{top: 350}}>
            <ActivityIndicator size="large" color="#E6E8E8" />
          </View>
        )}
        {/* {showBlurBackground && (<View style={styles.blurBackground} />)} */}
        <View style={styles.titleAndLogo}>
          <Image
            source={require('../../assets/cart45Big.png')}
            style={{top: 32, right: 25}}
          />
          <Text style={styles.title}>{i18n.meusCuponsTitle}</Text>
          <Text style={styles.loginSubtitle}>{i18n.welcomeText}</Text>
        </View>
        <View style={{bottom: 10, gap: -10}}>
          <View
            style={[
              emailValidation
                ? styles.emailInputStyle
                : styles.emailInputStyleInvalid,
            ]}>
            <View style={styles.loginInputsContainer}>
              <Image source={require('../../assets/icons/perfil-Icon.png')} />
              <SharedTextInput
                placeholder="Digite o seu email"
                value={email}
                onChangeText={setEmail}
                onBlur={handleEmailValidation}
              />
            </View>
          </View>
          {!emailValidation ? (
            <Text style={[styles.obrigatoryFieldStyle, {bottom: 1}]}>
              {i18n.invalidEmail}
            </Text>
          ) : null}

          <View
            style={[
              passwordValidation
                ? styles.passwordInputStyle
                : styles.passwordInputStyleInvalid,
            ]}>
            <View style={styles.loginInputsContainer}>
              <Image source={require('../../assets/icons/password-Icon.png')} />
              {isEyeClosed ? (
                <SharedTextInput
                  placeholder="Digite a sua senha"
                  secureTextEntry={true}
                  length={6}
                  value={password}
                  onChangeText={setPassword}
                  onBlur={handlePasswordValidation}
                />
              ) : (
                <SharedTextInput
                  placeholder="Digite a sua senha"
                  secureTextEntry={false}
                  length={6}
                  value={password}
                  onChangeText={setPassword}
                  onBlur={handlePasswordValidation}
                />
              )}
              <TouchableOpacity onPress={() => setIsEyeClosed(!isEyeClosed)}>
                {isEyeClosed ? (
                  <Image
                    source={require('../../assets/icons/closedEye.png')}
                    style={{right: 12}}
                  />
                ) : (
                  <Image
                    source={require('../../assets/icons/openedEye.png')}
                    style={{right: 8, top: 1}}
                  />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text style={styles.forgotPasswordLink}>
                {i18n.forgotPassword}
              </Text>
            </TouchableOpacity>
            {!passwordValidation ? (
              <Text style={[styles.obrigatoryFieldStyle, {right: 10}]}>
                {i18n.invalidPassword}
              </Text>
            ) : null}
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <SharedButton
            title="ENTRAR"
            backgroundColor={
              !emailValidation || !passwordValidation ? '#EAEBD2' : '#FAFF04'
            }
            color="#000"
            onPress={signIn}
          />
          <SharedButton
            title="CADASTRE-SE"
            hasBorder={true}
            color="#fff"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
        <View style={styles.loginWithDifferentEmailContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/loginWithGmailIcon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/loginWithFacebookIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
