import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(241, 243, 251, 1)',
    padding: 25,
    justifyContent: 'space-between',
    // height: 790, //hhhhhhhhhhh
    // backgroundColor: 'red',
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  nbeImg: {
    width: 160,
    height: 39,
  },
  setPassword: {
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
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 65,
    borderWidth: 1.5,
    borderRadius: 10,
    marginBottom: 21,
    padding: 16,
    borderColor: 'rgba(0, 114, 54, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  field: {
    flex: 1,
    marginLeft: 10,
    height: 40,
    justifyContent: 'center',
  },
  eye: {
    alignSelf: 'flex-end',
  },
  password: {
    color: 'rgba(0, 114, 54, 1)',
    fontWeight: '700',
    // marginBottom: 20,
  },

  submitButton: {
    backgroundColor: 'rgba(0, 114, 54, 1)',
  },
  submitText: {
    color: 'rgba(255, 255, 255, 1)',
  },
});

export default styles;
