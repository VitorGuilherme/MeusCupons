import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import i18n from '../../components/i18n';
import styles from '../Home/Styles';

// Firebase
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Coupon from '../../components/Coupons/Coupons';

import Modal from 'react-native-modal';
import ModalProfile from '../../components/ModalProfile/ModalProfile';
import ModalCoupon from '../../components/ModalCoupon/ModalCoupon';

export default Home = () => {
  const [displayName, setDisplayName] = useState('');
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [isCouponModalVisible, setIsCouponVisible] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [clickedCoupon, setClickedCoupon] = useState({});

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      const name = user.displayName;
      setDisplayName(name);
    }
    const fetchCoupons = async () => {
      const couponsRef = firestore().collection('cupons');
      const snapshot = await couponsRef.get();
      const couponsList = snapshot.docs.map(doc => doc.data());
      setCoupons(couponsList);
    };

    fetchCoupons();
  }, []);

  const toggleProfileModal = () => {
    setIsProfileModalVisible(!isProfileModalVisible);
  };

  const toggleCouponModal = infos => {
    setClickedCoupon(infos);
    console.log('Coupon Infos => ', infos);
    setIsCouponVisible(!isCouponModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
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
        <ModalCoupon
          key={clickedCoupon?.id}
          mallName={clickedCoupon?.name}
          encryptedText={clickedCoupon?.encryptedText}
        />
      </Modal>
      <View style={styles.header}>
        <Image
          source={require('../../assets/cartSmall.png')}
          style={styles.image}
        />
        <Text style={styles.headerTitle}>{i18n.meusCuponsTitle}</Text>
      </View>
      <ScrollView style={{right: 5}}>
        <View style={{top: 20}}>
          <View style={styles.profileContainer}>
            <View style={{left: 50}}>
              <Text style={styles.memberAnnounced}>{i18n.memberAnnounced}</Text>
              <TouchableOpacity>
                <Text style={styles.clickHere}>{i18n.clickHere}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.titleAndProfileContainer}>
              <Text style={styles.profileTitle}>
                {i18n.profileHelloText} {displayName}
              </Text>
              <TouchableOpacity onPress={toggleProfileModal}>
                <Image source={require('../../assets/icons/profileIcon.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.availableCoupons}>{i18n.availableCoupons}</Text>
        </View>
        <View style={{marginBottom: 80, gap: 15}}>
          {coupons.map(coupon => (
            <Coupon
              key={coupon.id}
              mallName={coupon.name}
              encryptedText={coupon.encryptedText}
              onPress={() => toggleCouponModal(coupon)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
