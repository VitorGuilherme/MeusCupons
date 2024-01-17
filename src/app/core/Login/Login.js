import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard 
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SharedTextInput, SharedButton} from '../../shared/sharedComponents';
import styles from './Styles';

import i18n from '../../shared/i18n';

import auth from '@react-native-firebase/auth';

export default Login = () => {
  const navigation = useNavigation();

  const [isEyeClosed, setIsEyeClosed] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);

  const signIn = () => {
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('Home'))
        .catch(error => console.log(error));
    } else {
      Alert.alert('Por favor, preencha os campos obrigatórios!');
    }
  };

  const handleEmailValidation = () => {
    if (!email) {
      setEmailValidation(false);
    } else {
      setEmailValidation(true);
    }
  };

  const handlePasswordValidation = () => {
    if (!password) {
      setPasswordValidation(false);
    } else {
      setPasswordValidation(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View>
          <View style={styles.titleAndLogo}>
            <Text style={styles.title}>{i18n.meusCuponsTitle}</Text>
            <Image source={require('../../assets/MeusCuponsLogo.png')} />
          </View>
          <Text style={styles.loginSubtitle}>{i18n.welcomeText}</Text>
        </View>
        <View style={{bottom: 20}}>
          <View
            style={[
              emailValidation
                ? styles.emailInputStyle
                : styles.emailInputStyleInvalid,
            ]}>
            <View style={styles.loginInputsContainer}>
              <Image source={require('../../assets/icons/perfil-Icon.png')} />
              <SharedTextInput
                placeholder={'Digite o seu email'}
                value={email}
                onChangeText={setEmail}
                onBlur={handleEmailValidation}
              />
            </View>
          </View>
          {!emailValidation ? (
            <Text style={[styles.obrigatoryFieldStyle, {bottom: 12}]}>
              {i18n.obrigatoryField}
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
                {i18n.obrigatoryField}
              </Text>
            ) : null}
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <SharedButton
            title="ENTRAR"
            color={
              !emailValidation || !passwordValidation ? '#EAEBD2' : '#FAFF04'
            }
            textColor="#000"
            onPress={signIn}
          />
          <SharedButton
            title="CADASTRE-SE"
            hasBorder={true}
            textColor="#fff"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
        <View style={styles.loginWithDifferentEmailContainer}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/loginWithAppleIcon.png')}
            />
          </TouchableOpacity>
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
      </View>
    </TouchableWithoutFeedback>
  );
};
