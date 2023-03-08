import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hamburger: {
    marginRight: 7,
  },
  img: {
    borderRadius: 10,
    marginRight: 7,
  },

  morning: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifications: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    elevation: 1,
  },

  txt: {
    fontSize: 14,
  },
  username: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
