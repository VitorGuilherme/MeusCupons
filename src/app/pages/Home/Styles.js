import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position: 'absolute',
    backgroundColor: '#3390C2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: '100%',
    height: 80,
    top: 0,
    paddingLeft: 10,
    backgroundColor: '#FAFF04'
  },
  headerTitle: {
    fontSize: 25,
    color: '#3390C2',
    fontWeight: 'bold',
  },
  profileContainer: {
    width: '105%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 14,
    right: 25,
  },
  titleAndProfileContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    right: 12,
  },
  profileTitle: {
    maxWidth: 160,
    color: '#FAFF04',
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
    color: '#FAFF04',
    fontSize: 14,
    fontWeight: 'bold',
    top: 20,
    left: 25,
  },
  memberAnnounced: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  clickHere: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default styles;
