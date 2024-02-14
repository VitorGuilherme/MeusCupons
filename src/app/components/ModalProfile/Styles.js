import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3390C2',
    height: '100%',
    width: '80%',
  },
  profileNameContainer: {
    padding: 20,
    flexDirection: 'row',
    gap: 10,
  },
  usedCouponsText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  usedCouponsContainer: {
    top: 50,
    gap: -40,
  },
  helpCentral: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  regionStyle: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  stateNumber: {
    fontSize: 14,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  meusCuponsFooterContainer: {
    height: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 150,
    paddingVertical: 150,
  },
});

export default styles;
