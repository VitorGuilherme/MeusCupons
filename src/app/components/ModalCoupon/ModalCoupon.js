import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './Styles';
import Coupon from '../Coupons/Coupons';

export default ModalCoupon = () => {

  return (
    <View
      style={{top: 200, bottom: 0, right: 0, left: 10, position: 'absolute'}}>
      <View style={styles.modalContainer}>
        <Text>MODAL</Text>
        <Text style={{textAlign: 'center'}}>MODAL DE CUPOM</Text>
        <Image source={require('../../assets/icons/qrCode.png')} />
        <Text style={{textAlign: 'center'}}>MODAL DE CUPOM</Text>
      </View>
    </View>
  );
};
