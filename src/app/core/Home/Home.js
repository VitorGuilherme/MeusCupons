import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from '../Home/Styles';

import i18n from '../../shared/i18n';

import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export default Home = () => {
  const [displayName, setDisplayName] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      const name = user.displayName;
      setDisplayName(name);
    }
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/cartSmall.png')}
            style={styles.image}
          />
          <Text style={styles.headerTitle}>{i18n.meusCuponsTitle}</Text>
        </View>
      </TouchableOpacity>
      <View style={{top: 20}}>
        <View style={styles.profileContainer}>
          <Text style={styles.profileTitle}>
            {i18n.profileHelloText} {displayName}
          </Text>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/userProfile.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.couponDescriptionContainer}>
          <Text style={styles.couponDescriptionText}>
            {i18n.coupomDescriptionText}
          </Text>
        </View>
        <Text style={styles.availableCoupons}>{i18n.availableCoupons}</Text>
      </View>
    </View>
  );
};
