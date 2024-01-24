import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '80%',
  },
  profileNameContainer: {
    padding: 20,
    flexDirection: 'row',
    gap: 10,
  },
  yourCouponsText: {
    fontSize: 24,
    color: '#3390C2',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  yourCouponsContainer: {
    top: 50,
    gap: -40,
  },
  helpCentral: {
    fontSize: 20,
    color: '#3390C2',
    fontWeight: 'bold',
  },
  regionStyle: {
    fontSize: 14,
    color: '#3390C2',
    fontWeight: 'bold',
  },
  stateNumber: {
    fontSize: 14,
    color: '#3390C2',
    textDecorationLine: 'underline',
  },
  meusCuponsFooterContainer: {
    height: '50%',
    // backgroundColor: '#000',
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 150,
    paddingVertical: 150,
  },
});

export default styles;
