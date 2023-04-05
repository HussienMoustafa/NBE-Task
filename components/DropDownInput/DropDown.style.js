import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // width: '100%',
    width: 380,
    height: 90,
    borderRadius: 10,
    marginBottom: 21,
    // paddingTop: 10,
    // paddingVertical: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    // backgroundColor: 'red',
    // justifyContent: 'center',
    elevation: 2,
  },

  // field: {
  //   backgroundColor: 'red',
  //   flex: 1,
  //   paddingTop:10,
  //   height: 20,
  //   justifyContent: 'center',
  // },
  title: {
    color: 'rgba(183, 183, 183, 1)',
    fontWeight: '700',
    paddingTop: 10,
    paddingHorizontal: 15,
    color: '#1C2437',
  },
  titleActive: {
    color: 'rgba(0, 114, 54, 1)',
  },
  titleFinished: {
    color: '#1C2437',
  },

  txtInput: {
    // color: 'rgba(183, 183, 183, 1)',
    color: 'rgba(28, 36, 55, 1)',
    fontSize: 16,
    // width: '100%',
    width: 380,
  },

  borderActive: {
    borderWidth: 1.5,
    borderColor: 'rgba(0, 114, 54, 1)',
  },
});

export default styles;
