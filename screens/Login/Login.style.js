import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.6)',
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
  },
  maincontainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
  },
  container: {
    padding: 25,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 120,
  },
  nbeImg: {
    width: 160,
    height: 39,
  },
  languageImg: {
    width: 42,
    height: 41,
  },
  txt: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 39,
  },
  // input: {
  //   // flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   width: '100%',
  //   height: 65,
  //   borderWidth: 1.5,
  //   borderRadius: 10,
  //   marginBottom: 21,
  //   padding: 16,
  // },
  input: {
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  // input2: {
  //   borderColor: 'rgba(0, 114, 54, 1)',
  //   backgroundColor: '#fff',
  // },
  // field: {
  //   flex: 1,
  //   marginLeft: 10,
  //   height: 40,
  //   justifyContent: 'center',
  // },
  // username: {
  //   color: 'rgba(255, 255, 255, 1)',
  //   fontWeight: '700',
  // },
  // password: {
  //   color: 'rgba(0, 114, 54, 1)',
  //   fontWeight: '700',
  //   // marginBottom: 20,
  // },
  rememberOrForgot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeImg: {
    marginRight: 10,
  },
  rememberMeTxt: {
    color: '#fff',
  },
  forgotPass: {
    color: '#fff',
  },
  logInMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  logIn: {
    width: 275,
    backgroundColor: 'rgba(0, 114, 54, 1)',
    borderRadius: 12.5,
    marginBottom: 0,
  },
  logInTxt: {
    color: '#fff',
  },
  noAcc: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginBottom: 12,
  },
  noAccTxt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  signUpTxt: {
    color: 'rgba(246, 167, 33, 1)',
    textDecorationLine: 'underline',
    fontSize: 14,
    fontWeight: '700',
  },
  fingerprint: {
    width: 50,
    height: 50,
    borderWidth: 1.5,
    borderColor: 'rgba(246, 167, 33, 1)',
    borderRadius: 12.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
