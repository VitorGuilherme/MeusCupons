import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import styles from './Style';

export default App = () => {
  return (
    <View style={styles.container}>
      <View style={{top: 10}}>
        <View style={styles.titleAndLogo}>
          <Text style={styles.title}>Meus Cupons</Text>
          <Image source={require('../assets/MeusCuponsLogo.png')} />
        </View>
        <Text style={styles.loginSubtitle}>Bem vindo e boas compras!</Text>
      </View>
      <View style={{bottom: 20}}>
        <View style={styles.inputStyle1}>
          <View style={styles.loginInputsContainer}>
            <Image source={require('../assets/icons/perfil-Icon.png')} />
            <TextInput
              placeholder="Digite seu email"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              style={styles.inputText}
            />
          </View>
        </View>
        <View style={styles.inputStyle2}>
          <View style={styles.loginInputsContainer}>
            <Image source={require('../assets/icons/password-Icon.png')} />
            <TextInput
              placeholder="Digite a sua senha"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              maxLength={10}
              secureTextEntry={true}
              style={styles.inputText}
            />
            <TouchableOpacity>
              <Image
                source={require('../assets/icons/eye-icon.png')}
                style={{right: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordLink}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>ENTRE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>CADASTRE-SE</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginWithDifferentEmailContainer}>
        <Image source={require('../assets/icons/loginWithAppleIcon.png')}></Image>
        <Image source={require('../assets/icons/loginWithGmailIcon.png')}></Image>
        <Image source={require('../assets/icons/loginWithFacebookIcon.png')}></Image>
      </View>
    </View>
  );
};
