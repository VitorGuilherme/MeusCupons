import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from './Styles';
import {useNavigation} from '@react-navigation/native';

import {SharedTextInput} from '../../shared/sharedComponents';

export default Login = () => {
  const navigation = useNavigation();

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
            <SharedTextInput placeholder={'Digite o seu email'} />
          </View>
        </View>
        <View style={styles.inputStyle2}>
          <View style={styles.loginInputsContainer}>
            <Image source={require('../../assets/icons/password-Icon.png')} />
            <SharedTextInput
              placeholder="Digite a sua senha"
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/eye-icon.png')}
                style={{right: 10}}
              />
            </TouchableOpacity>
          </View>
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordLink}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>ENTRE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>CADASTRE-SE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginWithDifferentEmailContainer}>
        <Image
          source={require('../../assets/icons/loginWithAppleIcon.png')}></Image>
        <Image
          source={require('../../assets/icons/loginWithGmailIcon.png')}></Image>
        <Image
          source={require('../../assets/icons/loginWithFacebookIcon.png')}></Image>
      </View>
    </View>
  );
};
