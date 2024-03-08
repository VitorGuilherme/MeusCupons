import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';

import styles from './Styles';

import MeusCuponsLogo from '../../assets/cartSmall.png';
import {SharedTextInput, SharedButton} from '../../components/sharedComponents';

import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import auth from '@react-native-firebase/auth';

import i18n from '../../components/i18n';

export default SignUp = () => {
  const navigation = useNavigation();
  const [isEyeClosed, setIsEyeClosed] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsvalidEmail] = useState(true);
  const [isValidPassword, setIsvalidPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    if (email && password) {
      setIsLoading(true);

      setTimeout(() => {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(userCredential => {
            console.log('user:', userCredential);
            const user = userCredential.user;
            user
              .updateProfile({
                displayName: name,
              })
              .then(() => {
                setIsLoading(false);
                navigation.navigate('Home');
              });
          })
          .catch(error => {
            setIsLoading(false);
            if (error.code === 'auth/email-already-in-use') {
              Alert.alert('Email já registrado!');
            }

            if (error.code === 'auth/invalid-email') {
              Alert.alert('Email inválido!');
            }
            console.error(error);
          });
      }, 2000);
    } else {
      Alert.alert('Email ou senha incorretos!');
    }
  };

  const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  const passwordRegex = new RegExp(/^.{6,}$/);

  const handleEmailValidation = () => {
    emailRegex.test(email) ? setIsvalidEmail(true) : setIsvalidEmail(false);
  };

  const handlePasswordValidation = () => {
    passwordRegex.test(password)
      ? setIsvalidPassword(true)
      : setIsvalidPassword(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {isLoading && (
          <View style={{top: 350}}>
            <ActivityIndicator size="large" color="#E6E8E8" />
          </View>
        )}
        <View style={styles.header}>
          <Image source={MeusCuponsLogo} />
          <Text style={styles.headerTitle}>{i18n.meusCuponsTitle}</Text>
        </View>
        <Text style={styles.signUpTextTitle}>{i18n.signUpTitle}</Text>
        <View style={styles.signUpInfoContainer}>
          <Text style={styles.signUpText}>{i18n.signUpName}</Text>
          <View style={[styles.textInputStyle]}>
            <SharedTextInput value={name} onChangeText={setName} />
          </View>
          <Text
            style={isValidEmail ? styles.signUpText : styles.signUpTextInvalid}>
            {i18n.signUpEmail}
          </Text>
          <View
            style={
              isValidEmail
                ? styles.textInputStyle
                : styles.textInputStyleInvalid
            }>
            <SharedTextInput
              value={email}
              onChangeText={setEmail}
              onBlur={handleEmailValidation}
            />
          </View>
          {!isValidEmail ? (
            <Text style={styles.obrigatoryFieldStyle}>{i18n.invalidEmail}</Text>
          ) : null}

          <Text
            style={
              isValidPassword ? styles.signUpText : styles.signUpTextInvalid
            }>
            {i18n.signUpPassword}
          </Text>
          <View
            style={
              isValidPassword
                ? styles.textInputStyle
                : styles.textInputStyleInvalid
            }>
            {isEyeClosed ? (
              <SharedTextInput
                secureTextEntry
                length={6}
                value={password}
                onChangeText={setPassword}
                style={{left: 10}}
                onBlur={handlePasswordValidation}
              />
            ) : (
              <SharedTextInput
                secureTextEntry={false}
                length={6}
                value={password}
                onChangeText={setPassword}
                onBlur={handlePasswordValidation}
              />
            )}
            <TouchableOpacity onPress={() => setIsEyeClosed(!isEyeClosed)}>
              {isEyeClosed ? (
                <Image source={require('../../assets/icons/closedEye.png')} />
              ) : (
                <Image source={require('../../assets/icons/openedEye.png')} />
              )}
            </TouchableOpacity>
          </View>
          {!isValidPassword ? (
            <Text style={styles.obrigatoryFieldStyle}>
              {i18n.invalidPassword}
            </Text>
          ) : null}
        </View>
        <View style={styles.signUpBtnsContainer}>
          <SharedButton
            title="ENVIAR"
            backgroundColor={
              isValidEmail && isValidPassword ? '#FAFF04' : '#EAEBD2'
            }
            color="#000"
            onPress={handleSignUp}
          />
          <SharedButton
            title="VOLTAR"
            color="#fff"
            hasBorder={true}
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Login'}],
              })
            }
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
