import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(28, 36, 55, 0.77)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innercontainer: {
    width: 346,
    height: 416,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    paddingRight: 35,
    marginBottom: 10,
  },
  image: {
    width: 231,
    height: 182,
  },
  missionComplete: {
    color: 'rgba(28, 36, 55, 1)',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  txt: {
    color: 'rgba(183, 183, 183, 1)',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  price: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1C2437',
    marginBottom: 25,
  },
  finish: {
    width: 311,
    backgroundColor: 'rgba(0, 114, 54, 1)',
    borderRadius: 10,
    // marginBottom: 0,
    marginBottom: 10,
  },
  finishTxt: {
    color: '#fff',
  },
  buttons: {
    // width: '100%',
    width: 311,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cancel: {
    width: 123,
    borderWidth: 1,
    borderColor: '#EB001B',
    backgroundColor: '#FFFFFF',
    marginBottom: 0,
    borderRadius: 10,
  },
  cancelTxt: {
    color: '#EB001B',
  },
});

export default styles;
