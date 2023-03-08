import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {back, backAr} from '../../assets/Images/BackButton/BackButton';
import styles from './Back.style';

export default function Back({onPress}) {
  const currentLanguage = useSelector(state => state.language.value);

  return (
    <View>
      <Pressable onPress={onPress}>
        {currentLanguage === 'ar' ? (
          <Image style={styles.backImg} source={{uri: backAr}} />
        ) : (
          <Image style={styles.backImg} source={{uri: back}} />
        )}
      </Pressable>
    </View>
  );
}
