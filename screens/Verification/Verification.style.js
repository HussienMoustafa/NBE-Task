import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(241, 243, 251, 1)',
    // height: 790, //hhhhhhhh
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  request: {
    color: 'rgba(28, 36, 55, 1)',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  txt: {
    color: 'rgba(183, 183, 183, 1)',
    fontSize: 16,
    marginBottom: 16,
  },
  verificationInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  field: {
    marginLeft: 10,
  },
  phone: {
    color: 'rgba(0, 114, 54, 1)',
    fontWeight: '700',
  },
  submitButton: {
    backgroundColor: 'rgba(0, 114, 54, 1)',
  },
  submitText: {
    color: 'rgba(255, 255, 255, 1)',
  },
  nbeImg: {
    width: 160,
    height: 39,
  },
});

export default styles;
