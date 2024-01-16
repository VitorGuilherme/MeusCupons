import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from './Styles';
import {useNavigation} from '@react-navigation/native';

import {SharedTextInput, SharedButton} from '../../shared/sharedComponents';

import auth from '@react-native-firebase/auth';

export default Login = () => {
  const navigation = useNavigation();

  const [isEyeClosed, setIsEyeClosed] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigation.navigate('Home'))
      .catch(error => console.log(error))
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleAndLogo}>
          <Text style={styles.title}>Meus Cupons</Text>
          <Image source={require('../../assets/MeusCuponsLogo.png')} />
        </View>
        <Text style={styles.loginSubtitle}>Bem vindo e boas compras!</Text>
      </View>
      <View style={{bottom: 20}}>
        <View style={styles.inputStyle1}>
          <View style={styles.loginInputsContainer}>
            <Image source={require('../../assets/icons/perfil-Icon.png')} />
            <SharedTextInput placeholder={'Digite o seu email'} value={email} onChangeText={setEmail}/>
          </View>
        </View>
        <View style={styles.inputStyle2}>
          <View style={styles.loginInputsContainer}>
            <Image source={require('../../assets/icons/password-Icon.png')} />
            {isEyeClosed ? (
              <SharedTextInput
                placeholder="Digite a sua senha"
                secureTextEntry={true}
                length={8}
                value={password}
                onChangeText={setPassword}
              />
            ) : (
              <SharedTextInput
                placeholder="Digite a sua senha"
                secureTextEntry={false}
                length={8}
                value={password}
                onChangeText={setPassword}
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
            <Text style={styles.forgotPasswordLink}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <SharedButton title="ENTRAR" color="#FAFF04" textColor="#000" onPress={signIn}/>
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
  );
};
