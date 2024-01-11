import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Styles';

import MeusCuponsLogo from '../../assets/cartSmall.png';

import {SharedTextInput, SharedButton} from '../../shared/sharedComponents';

import {useNavigation} from '@react-navigation/native';

export default SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={MeusCuponsLogo} />
        <Text style={styles.headerTitle}>Meus Cupons</Text>
      </View>
      <Text style={styles.signUpTextTitle}>Cadastro</Text>
      <View style={styles.signUpInfoContainer}>
        <Text style={styles.signUpText}>Nome</Text>
        <View style={[styles.textInputStyle]}>
          <SharedTextInput />
        </View>
        <Text style={styles.signUpText}>Email</Text>
        <View style={styles.textInputStyle}>
          <SharedTextInput />
        </View>
        <Text style={styles.signUpText}>Senha</Text>
        <View style={styles.textInputStyle}>
          <SharedTextInput secureTextEntry={true} />
        </View>
        <Text style={styles.signUpText}>Confirme a senha </Text>
        <View style={styles.textInputStyle}>
          <SharedTextInput secureTextEntry={true} />
        </View>
      </View>
      <View style={styles.signUpBtnsContainer}>
        <SharedButton title="ENVIAR" color="#FAFF04" textColor="#000" />
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
