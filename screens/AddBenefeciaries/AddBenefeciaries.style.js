import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '110%',
    padding: 24,
    // height: 790,
    backgroundColor: '#rgba(241, 243, 251, 1)',
    // marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
  },
  notifications: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'rgba(229, 229, 229, 1)',
    borderRadius: 10,
    elevation: 1,
    marginLeft: 5,
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  notificationsImg: {
    width: 21,
    height: 21,
  },
  nbeImg: {
    width: 160,
    height: 39,
  },
});

export default styles;
