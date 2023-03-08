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
  header: {
    fontWeight: '700',
    fontSize: 20,
    color: 'rgba(28, 36, 55, 1)',
    marginBottom: 12,
  },
  log: {
    fontSize: 16,
    color: 'rgba(28, 36, 55, 1)',
    marginBottom: 30,
  },
  fingerprint: {
    alignItems: 'center',
    marginBottom: 15,
  },
  touch: {
    fontSize: 16,
    color: 'rgba(183, 183, 183, 1)',
  },
  cancel: {
    fontWeight: '700',
    fontSize: 16,
    color: 'rgba(0, 114, 54, 1)',
    alignSelf: 'flex-end',
  },
});

export default styles;
