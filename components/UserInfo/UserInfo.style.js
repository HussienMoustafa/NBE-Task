import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  user: {
    flexDirection: 'row',
  },
  userImg: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  username: {
    fontWeight: 'bold',
    color: 'rgba(28, 36, 55, 1)',
    marginBottom: 5,
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  img: {
    marginRight: 8,
  },
  txt: {
    color: '#B7B7B7',
  },
});

export default styles;
