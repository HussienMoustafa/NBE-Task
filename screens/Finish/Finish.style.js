import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  finishContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 114, 54, 1)',
    // height: 790, //hhhhhhhh
  },
  image: {
    alignSelf: 'flex-end',
    padding: 24,
  },
  bgImageContainer: {
    flex: 1,
  },
  bgImg: {
    height: '110%',
    // width: '100%',
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  txts: {
    paddingLeft: 24,
  },
  congrats: {
    color: 'rgba(247, 247, 247, 1)',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  success: {
    color: 'rgba(247, 247, 247, 1)',
    fontSize: 16,
  },
  finishButton: {
    backgroundColor: '#fff',
    elevation: 4,
  },
  finishText: {
    color: 'rgba(0, 114, 54, 1)',
  },
});

export default styles;
