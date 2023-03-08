import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // height: 790,
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 15,
    paddingBottom: 0,
    backgroundColor: '#rgba(241, 243, 251, 1)',
    // marginBottom: 100,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  transferButton: {
    backgroundColor: 'rgba(0, 114, 54, 1)',
  },
  transferText: {
    color: 'rgba(255, 255, 255, 1)',
  },
  inputs: {
    marginTop: 10,
    marginBottom: 80,
  },
});

export default styles;
