// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage, ref as storageRef} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBz9K57ijkMu_bl8xBlunLHKCAt8lPi_1I',
  authDomain: 'nbe-reactnative.firebaseapp.com',
  databaseURL: 'https://nbe-reactnative-default-rtdb.firebaseio.com',
  projectId: 'nbe-reactnative',
  storageBucket: 'nbe-reactnative.appspot.com',
  messagingSenderId: '110188399755',
  appId: '1:110188399755:web:9c1127920fa40860c3d88e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export {storageRef};
