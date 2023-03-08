import {StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//   camera: {
//     width: 138,
//     height: 138,
//     borderRadius: 30,
//     backgroundColor: 'rgba(255, 255, 255, 1)',
//     elevation: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
// });
const styles = StyleSheet.create({
  camera: {
    width: 138,
    height: 138,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  cameraImg: {
    width: 40,
    height: 36,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#bbded6',
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  progressBarContainer: {
    marginTop: 20,
  },
  imageBox: {
    // width: 300,
    // height: 300,
    width: 138,
    height: 138,
    borderRadius: 30,
  },
});

export default styles;
