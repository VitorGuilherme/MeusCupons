import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';

const Coupon = ({mallName, encryptedText, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.couponStyle]} onPress={onPress} >
        <Image source={require('../../assets/icons/meusCuponsCart.png')} />
        <Text style={styles.mallNameStyle}>{mallName}</Text>
        <Text style={styles.encryptedText}>{encryptedText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Coupon;
