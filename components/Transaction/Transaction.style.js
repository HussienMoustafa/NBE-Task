import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // width: 346,
    // width: '100%',
    height: 69,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(183, 183, 183, 0.375))',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  img: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  //   image: {
  //     // width: '100%',
  //     // height: '100%',
  //     width: 50,
  //     height: 50,
  //   },
  seller: {
    color: 'rgba(28, 36, 55, 1)',
    fontSize: 18,
    marginBottom: 8,
  },
  date: {
    color: 'rgba(183, 183, 183, 1)',
  },
  price: {
    color: 'rgba(28, 36, 55, 1)',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
