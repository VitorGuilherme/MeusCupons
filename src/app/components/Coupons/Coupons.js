import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './Styles';

const Coupon = ({mallName, encryptedText, onPress}) => {
  const [isOnlyCoupon, setIsOnlyCoupon] = useState(true);

  return (
    <>
      {isOnlyCoupon ? (
        <View>
          <TouchableOpacity style={[styles.couponStyle]} onPress={onPress}>
            <Image source={require('../../assets/icons/meusCuponsCart.png')} />
            <Text style={styles.mallNameStyle}>{mallName}</Text>
            <Text style={styles.encryptedText}>{encryptedText}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.mallNameStyle}>{mallName}</Text>
      )}
    </>
  );
};

export default Coupon;
