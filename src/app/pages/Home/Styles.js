import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    height: 80,
    top: 0,
    paddingLeft: 20,
  },
  headerTitle: {
    fontSize: 25,
    color: '#3390C2',
    fontWeight: 'bold',
  },
  profileContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 14,
    right: 25,
  },
  profileTitle: {
    color: '#3390C2',
    fontSize: 24,
    fontWeight: 'bold',
  },
  couponDescriptionContainer: {
    flexWrap: 'wrap',
    left: 215,
    top: 10,
  },
  couponDescriptionText: {
    width: '50%',
    color: '#000',
  },
  availableCoupons: {
    color: '#3390C2',
    fontSize: 14,
    fontWeight: 'bold',
    top: 20,
    left: 30,
  },
  memberAnnounced:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3390C2',

  },
  clickHere: {
    color: '#3390C2',
    textDecorationLine: 'underline',
  },
});

export default styles;
