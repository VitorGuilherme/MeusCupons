import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Styles';
import i18n from '../i18n';

const ModalCoupon = ({mallName, encryptedText}) => {
  return (
    <View
      style={{top: 200, bottom: 0, right: 0, left: 10, position: 'absolute'}}>
      <View style={styles.modalContainer}>
        <Text>{mallName}</Text>
        <Text style={{textAlign: 'center'}}>{i18n.qrCodeUse}</Text>
        <Image source={require('../../assets/icons/qrCode.png')} />
        <Text style={{textAlign: 'center'}}>{encryptedText}</Text>
      </View>
    </View>
  );
};

export default ModalCoupon;