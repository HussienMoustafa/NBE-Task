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
    height: 332,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
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
  finish: {
    width: 311,
    backgroundColor: 'rgba(0, 114, 54, 1)',
    borderRadius: 10,
    marginBottom: 0,
  },
  finishTxt: {
    color: '#fff',
  },
});

export default styles;
