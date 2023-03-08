import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import styles from './Splash.style';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Image source={require('../../assets/Images/nbeSplash.png')} />
        </View>
        <View>
          <Image source={require('../../assets/Images/nbeSplash2.png')} />
        </View>
      </View>
    </View>
  );
}
