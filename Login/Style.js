import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#3390C2',
  },
  titleAndLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    padding: 14,
  },
  loginSubtitle: {
    fontSize: 25,
    height: 35,
    color: '#FAFF04',
    textAlign: 'center',
  },
  inputStyle1: {
    maxWidth: '95%',
    // width: '90%',
    // justifyContent: 'center',
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
  },
  inputStyle2: {
    maxWidth: '90%',
    // width: '90%',
    // justifyContent: 'center',
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
  },
  loginInputsContainer: {
    width: '100%',
    flexDirection: 'row',
    height: '85%',
    alignItems: 'center',
    gap: 5,
    marginTop: 2,
  },

  inputText: {
    minWidth: '85%',
    height: 50,
    fontSize: 15,
    alignItems: 'center',
    color: 'rgba(255, 255, 255, 1)',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
  },
  forgotPasswordLink: {
    color: 'rgba(255, 255, 255, 1)',
    textDecorationLine: 'underline',
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
    bottom: 50
  },
  signInButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 50,
    padding: 5,
    backgroundColor: '#FAFF04',
    borderRadius: 10,

  },
  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10
  },
  signInText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  signUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  loginWithDifferentEmailContainer: {
    flexDirection: 'row',
    gap: 10,
    bottom: 50
  }
});

export default styles;
