import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Styles';

import MeusCuponsLogo from '../../assets/cartSmall.png';
import {SharedTextInput, SharedButton} from '../../shared/sharedComponents';

import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import auth from '@react-native-firebase/auth';

import i18n from '../../shared/i18n';

export default SignUp = () => {
  const navigation = useNavigation();
  const [isEyeClosed, setIsEyeClosed] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
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
            navigation.navigate('Login');
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
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
        <Text style={styles.signUpText}>{i18n.signUpEmail}</Text>
        <View style={styles.textInputStyle}>
          <SharedTextInput value={email} onChangeText={setEmail} />
        </View>

        <Text style={styles.signUpText}>{i18n.signUpPassword}</Text>
        <View style={styles.textInputStyle}>
          {isEyeClosed ? (
            <SharedTextInput
              secureTextEntry
              length={8}
              value={password}
              onChangeText={setPassword}
              style={{left: 10}}
            />
          ) : (
            <SharedTextInput
              secureTextEntry={false}
              length={8}
              value={password}
              onChangeText={setPassword}
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

        {/* <Text style={styles.signUpText}>Confirme a senha </Text>
        <View style={styles.textInputStyle}>
          {isEyeClosed ? (
            <SharedTextInput secureTextEntry={true} length={8} />
          ) : (
            <SharedTextInput secureTextEntry={false} length={8} />
          )}
        </View> */}
      </View>
      <View style={styles.signUpBtnsContainer}>
        <SharedButton
          title="ENVIAR"
          color="#FAFF04"
          textColor="#000"
          onPress={handleSignUp}
        />
        <SharedButton
          title="VOLTAR"
          textColor="#fff"
          hasBorder={true}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};
