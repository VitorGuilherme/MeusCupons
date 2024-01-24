import React, {useEffect, useState} from 'react';
import {Image, View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './Styles';
import i18n from '../i18n';
import Coupon from '../Coupons/Coupons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {SharedButton} from '../sharedComponents';

export default profileModal = () => {
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      const name = user.displayName;
      setDisplayName(name);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profileNameContainer}>
        <Image source={require('../../assets/icons/userProfile.png')} />
        <Text style={{fontSize: 30, color: '#3390C2', fontWeight: 'bold'}}>
          {displayName}
        </Text>
      </View>
      <View style={styles.yourCouponsContainer}>
        <Text style={styles.yourCouponsText}>{i18n.yourCoupons}</Text>
        <View style={{gap: 10}}>
          <Coupon mallName="Até logo" encryptedText="efb8c11149" />
          <Coupon mallName="Barato" encryptedText="wedr45678c" />
          <Coupon mallName="CompraC" encryptedText="11kiccderf" />
        </View>
      </View>
      <View style={styles.meusCuponsFooterContainer}>
        <Image source={require('../../assets/cart45.png')} />
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
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
