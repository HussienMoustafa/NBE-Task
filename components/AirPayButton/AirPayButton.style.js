import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 345,
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: 12.5,
    marginBottom: 16,
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  press: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    justifyContent: 'space-between',
    paddingRight: 10,
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
});

export default styles;
