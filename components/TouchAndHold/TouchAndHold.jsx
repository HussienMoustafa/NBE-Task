import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './TouchAndHold.style';
import strings from '../../assets/Language/AuthNames';

export default function TouchAndHold({index}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imgbg}
        resizeMode="cover"
        source={require('../../assets/Images/touchandhold.png')}>
        {index === -1 ? (
          <Text style={styles.txt}>{strings.dragcard}</Text>
        ) : (
          <Image
            style={{marginLeft: 10}}
            source={
              index === 0
                ? require('../../assets/Images/CreditCard.png')
                : require('../../assets/Images/creditCard2.png')
            }
          />
        )}
      </ImageBackground>
    </View>
  );
}
