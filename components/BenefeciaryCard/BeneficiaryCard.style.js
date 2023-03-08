import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 346,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 18,
    padding: 14,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: 10,
    // backgroundColor: 'black',
  },
  pressedCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    // alignItems: 'center',
    width: '100%',
  },
  user: {
    flexDirection: 'row',
  },
  userImg: {
    width: 70,
    height: 70,
    // borderRadius: 8,
    // backgroundColor: 'black',
    marginRight: 10,
  },
  image: {width: '100%', height: '100%'},
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
  savingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  dotsImgOuterContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  dostImgPress: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  img: {
    marginRight: 8,
  },
  txt: {
    color: '#B7B7B7',
  },
});

export default styles;
