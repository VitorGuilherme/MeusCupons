import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    top: 200,
    bottom: 0,
    right: 0,
    left: 10,
    position: 'absolute',
  },

  modalContainer: {
    alignItems: 'center',
    gap: 50,
    height: 450,
    width: 350,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderColor: '#3390C2',
    borderWidth: 4,
    borderRadius: 15,
  },

  mallName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  qrCodeUse: {
    fontSize: 15,
    color: '#000',
    textAlign: "center"
  },
  encryptedText: {
    textAlign: "center",
    color: "#000"
  }
});

export default styles;
