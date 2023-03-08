import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './UserCard.style';
import strings from '../../assets/Language/AuthNames';

export default function UserCard({benefeciar}) {
  const navigation = useNavigation();
  const username = benefeciar.firstName;
  const img = benefeciar.img;
  // console.log(img);

  function pressedCardHandler() {
    navigation.navigate(strings.beneficiaries, {
      screen: 'BenefeciariesHistory',
      initial: false,
      params: {benefeciar: benefeciar},
    });
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={pressedCardHandler}>
        <View style={styles.img}>
          <Image
            // source={require('../../assets/Images/ayman.png')}
            source={{uri: img}}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.txt}>{username}</Text>
        </View>
      </Pressable>
    </View>
  );
}
