import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './ProfileCard.style';
import {useSelector} from 'react-redux';
export default function ProfileCard({children, img, number}) {
  const currentLanguage = useSelector(state => state.language.value);

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.pressedCard,
          currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
        ]}>
        <View
          style={[
            styles.user,
            currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
          ]}>
          <View
            style={[
              styles.userImg,
              currentLanguage === 'ar'
                ? {marginRight: 0, marginLeft: 10}
                : null,
            ]}>
            <Image source={img} style={styles.image} />
          </View>
          <View>
            <View>
              <Text style={styles.username}>{children}</Text>
            </View>
            <View style={styles.numberContainer}>
              <Text style={styles.txt}>{number}</Text>
            </View>
          </View>
        </View>
        <View style={styles.dotsImgOuterContainer}>
          <Pressable style={styles.dostImgPress}>
            <Image source={require('../../assets/Images/flippedDots.png')} />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
}
