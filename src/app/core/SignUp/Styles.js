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
    gap: 10,
    width: '100%',
    height: 80,
    backgroundColor: '#FAFF04',
    top: 0,
    paddingLeft: 20,
  },
  headerTitle: {
    fontSize: 25,
    color: '#3390C2',
    fontWeight: 'bold',
  },

  signUpTextTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FAFF04',
    left: 10,
    top: 20
  },

  signUpInfoContainer: {
    top: 40,
    left: '2.5%' 
  },

  signUpText: {
    fontSize: 20,
    color: '#FAFF04',
  },

  textInputStyle: {
    maxWidth: '95%',
    height: 50,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    justifyContent: 'center'
  },

  signUpBtnsContainer: {
    width: '90%',
    left: 20,
    top: 60,
    gap: 10
  }
});

export default styles;
