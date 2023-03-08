import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,
    borderRadius: 10,
    marginBottom: 21,
    paddingHorizontal: 16,
    // paddingVertical: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    // justifyContent: 'center',
    elevation: 2,
  },
  img: {
    marginRight: 18,
  },
  field: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  title: {
    color: 'rgba(183, 183, 183, 1)',
    fontWeight: '700',
  },
  pass: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtInput: {
    color: 'rgba(183, 183, 183, 1)',
    fontSize: 16,
  },
  eye: {
    // alignSelf: 'flex-end',
    // justifyContent: 'flex-end',
  },
  borderActive: {
    borderWidth: 1.5,
    borderColor: 'rgba(0, 114, 54, 1)',
  },
  titleActive: {
    color: 'rgba(0, 114, 54, 1)',
  },
  txtInputActive: {
    color: 'rgba(28, 36, 55, 1)',
  },
  titleFinished: {
    color: '#1C2437',
  },
});

export default styles;
