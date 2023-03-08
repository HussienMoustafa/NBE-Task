import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imgContainer: {
    // width: 340,
    height: 132,
    marginBottom: 20,
    // overflow: 'hidden',
  },
  imgInner: {
    // width: 347,
    // height: 132,
    borderRadius: 22,
    backgroundColor: 'rgba(0, 114, 54, 1)',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    // backgroundColor: 'red',
  },
  row: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txt: {
    fontSize: 16,
    color: 'rgba(247, 247, 247, 1)',
  },
  fingerprint: {
    width: 32,
    height: 32,
    borderWidth: 1.5,
    borderColor: 'rgba(246, 167, 33, 1)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fingerprintImg: {
    width: 18,
    height: 18,
  },
  //   balance: {},
  balanceTxt: {
    fontWeight: '700',
    fontSize: 25,
    color: 'rgba(247, 247, 247, 1)',
    textAlign: 'center',
  },
  pressHere: {
    fontWeight: '700',
    fontSize: 20,
    color: 'rgba(247, 247, 247, 1)',
    textAlign: 'center',
  },
});

export default styles;
