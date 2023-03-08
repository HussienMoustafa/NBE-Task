import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 310,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 30,
    padding: 14,

    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // marginBottom: 10,
    // marginLeft: 1,
    // marginRight: 1,
    // marginHorizontal: 1,
    elevation: 1,
  },
  pressedCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    alignItems: 'center',
    width: '100%',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    width: 70,
    height: 70,
    // borderRadius: 8,
    // backgroundColor: 'black',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  username: {
    fontWeight: '500',
    fontSize: 18,
    color: '#1B1B1B',
    marginBottom: 5,
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  dotsImgOuterContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    // backgroundColor: 'black',
    // justifyContent: 'center',
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
    color: '#4D4D4D',
  },
});

export default styles;
