import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './TopBar.style';
import strings from '../../assets/Language/AuthNames';
import {useSelector} from 'react-redux';

export default function TopBar() {
  const navigation = useNavigation();
  const currentLanguage = useSelector(state => state.language.value);

  function drawerHandler() {
    navigation.openDrawer();
  }

  return (
    <View
      style={[
        styles.container,
        currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
      ]}>
      <View
        style={[
          styles.morning,
          currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
        ]}>
        <View
          style={[
            styles.hamburger,
            currentLanguage === 'ar' ? {marginRight: 0, marginLeft: 7} : null,
          ]}>
          <Pressable onPress={drawerHandler}>
            <Image source={require('../../assets/Images/hamburger.png')} />
          </Pressable>
        </View>
        <View
          style={[
            styles.img,
            currentLanguage === 'ar' ? {marginRight: 0, marginLeft: 7} : null,
          ]}>
          <Image source={require('../../assets/Images/mashaly.png')} />
        </View>
        <View>
          <View>
            <Text style={styles.txt}>{strings.goodmorning}</Text>
          </View>
          <View>
            <Text style={[styles.username, styles.txt]}>{strings.Ahmad}</Text>
          </View>
        </View>
      </View>
      <View style={styles.notifications}>
        <Pressable>
          <Image source={require('../../assets/Images/notifications.png')} />
        </Pressable>
      </View>
    </View>
  );
}
