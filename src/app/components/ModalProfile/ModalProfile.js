import React, {useEffect, useState} from 'react';
import {Image, View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './Styles';
import i18n from '../i18n';
import Coupon from '../Coupons/Coupons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {SharedButton} from '../sharedComponents';
import { useNavigation } from '@react-navigation/native';

export default profileModal = () => {
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      const name = user.displayName;
      setDisplayName(name);
    }
  }, []);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profileNameContainer}>
        <Image source={require('../../assets/icons/profileIcon.png')} />
        <Text style={{fontSize: 30, color: '#FAFF04', fontWeight: 'bold', maxWidth: 250}}>
          {displayName}
        </Text>
      </View>
      <View style={styles.usedCouponsContainer}>
        <Text style={styles.usedCouponsText}>{i18n.usedCoupons}</Text>
        <View style={{gap: 10}}>
          <Coupon mallName="Primos" encryptedText="efb8c11149" />
          <Coupon mallName="Pérola" encryptedText="wedr45678c" />
          <Coupon mallName="Esperança" encryptedText="11kiccderf" />
        </View>
      </View>
      <View style={styles.meusCuponsFooterContainer}>
        <Image source={require('../../assets/cart45.png')} style={{top: 15, right:5}} />
        <Text style={styles.helpCentral}>{i18n.helpCentral}</Text>
        <Text style={styles.regionStyle}>{i18n.stateName}</Text>
        <Text style={styles.stateNumber}>{i18n.stateNumber}</Text>
        <Text style={styles.regionStyle}>{i18n.otherRegions}</Text>
        <Text style={styles.stateNumber}>{i18n.otherRegionsNumber}</Text>
        <TouchableOpacity style={{top: 30}}>
          <SharedButton
            backgroundColor="#C5221F"
            color="#FFFFFF"
            title={i18n.logoutButton}
            padding={25}
            onPress={() => navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            })}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
