import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(28, 36, 55, 0.77)',
  },
  innerContainer: {
    padding: 16,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  transfer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    // backgroundColor: 'black',
  },
  transferTxt: {
    flexDirection: 'row',
  },
  choice: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  img: {
    marginRight: 14,
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
  choiceTitle: {
    color: '#1C2437',
    fontSize: 16,
  },
  choiceDescription: {
    color: '#848484',
    fontSize: 12,
  },
  transfermoneyImg: {
    width: 40,
    height: 40,
  },
  fingerprintImg: {
    width: 18,
    height: 18,
  },
  editImg: {
    width: 40,
    height: 40,
  },
  deleteImg: {
    width: 40,
    height: 40,
  },
});

export default styles;
