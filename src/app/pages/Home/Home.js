import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

import i18n from '../../components/i18n';
import styles from '../Home/Styles';

import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Coupon from '../../components/Coupons/Coupons';

import Modal from 'react-native-modal';
import ModalProfile from '../../components/ModalProfile/ModalProfile';
import ModalCoupon from '../../components/ModalCoupon/ModalCoupon';

export default Home = () => {
  const [displayName, setDisplayName] = useState('');
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [isCouponModalVisible, setIsCouponVisible] = useState(false);
  const [selectedMallName, setSelectedMallName] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      const name = user.displayName;
      setDisplayName(name);
    }
  }, []);

  const toggleProfileModal = () => {
    setIsProfileModalVisible(!isProfileModalVisible);
  };
  const toggleCouponModal = () => {
    setIsCouponVisible(!isCouponModalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationIn="slideInRight"
        animationOut="slideOutRight"
        isVisible={isProfileModalVisible}
        onBackdropPress={toggleProfileModal}
        onBackButtonPress={toggleProfileModal}
        swipeDirection="right"
        onSwipeMove={() => setIsProfileModalVisible(false)}
        style={{margin: 0, flexDirection: 'row', justifyContent: 'flex-end'}}>
        <ModalProfile />
      </Modal>
      <Modal
        animationIn={'zoomIn'}
        animationOut={'zoomOut'}
        onBackdropPress={() => setIsCouponVisible(false)}
        isVisible={isCouponModalVisible}>
        <ModalCoupon mallName={selectedMallName} />
      </Modal>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/cartSmall.png')}
            style={styles.image}
          />
          <Text style={styles.headerTitle}>{i18n.meusCuponsTitle}</Text>
        </View>
      </TouchableOpacity>
      <ScrollView>
        <View style={{top: 20}}>
          <View style={styles.profileContainer}>
            <View style={{right: 40}}>
              <Text style={styles.memberAnnounced}>{i18n.memberAnnounced}</Text>
              <TouchableOpacity>
                <Text style={styles.clickHere}>{i18n.clickHere}</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.profileTitle}>
              {i18n.profileHelloText} {displayName}
            </Text>
            <TouchableOpacity onPress={toggleProfileModal}>
              <Image source={require('../../assets/icons/userProfile.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.availableCoupons}>{i18n.availableCoupons}</Text>
        </View>
        <View style={{gap: 15}}>
          <Coupon
            mallName="Até logo"
            encryptedText="**********"
            onPress={toggleCouponModal}
          />
          <Coupon
            mallName="Boa Compra"
            encryptedText="**********"
            value="Boa Compra"
          />
          <Coupon mallName="Bom e barato" encryptedText="**********" />
          <Coupon mallName="Compra Certa" encryptedText="**********" />
          <Coupon mallName="Baratão" encryptedText="**********" />
          <Coupon mallName="Mago" encryptedText="**********" />
          <Coupon mallName="Nagumo" encryptedText="**********" />
          <Coupon mallName="Primos" encryptedText="**********" />
          <Coupon mallName="Mohamed" encryptedText="**********" />
          <Coupon mallName="Economia" encryptedText="**********" />
          <Coupon mallName="Seu Pedro" encryptedText="**********" />
          <Coupon mallName="Pague menos" encryptedText="**********" />
          <Coupon mallName="Ouro" encryptedText="**********" />
          <Coupon mallName="Ouro" encryptedText="**********" />
        </View>
      </ScrollView>
    </View>
  );
};
