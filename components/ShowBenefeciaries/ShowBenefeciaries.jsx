import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './ShowBenefeciaries.style';

export default function ShowBenefeciaries({changeDisplay}) {
  function changeDisplayType(displayType) {
    changeDisplay(displayType);
    // console.log(displayType);
  }

  return (
    <View style={styles.container}>
      <View style={styles.collectionContainer}>
        <Pressable onPress={changeDisplayType.bind(this, 'collection')}>
          <Image source={require('../../assets/Images/collection.png')} />
        </Pressable>
      </View>
      <View>
        <Pressable onPress={changeDisplayType.bind(this, 'list')}>
          <Image source={require('../../assets/Images/list.png')} />
        </Pressable>
      </View>
    </View>
  );
}
