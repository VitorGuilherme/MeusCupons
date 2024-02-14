import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Styles';
import i18n from '../i18n';

const ModalCoupon = ({mallName, encryptedText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={{alignItems: 'center', gap: 10}}>
          <Text style={styles.mallName}>{mallName}</Text>
          <Text style={styles.qrCodeUse}>{i18n.qrCodeUse}</Text>
        </View>
        <Image source={require('../../assets/icons/qrCode.png')} />
      </View>
    </View>
  );
};

export default ModalCoupon;
