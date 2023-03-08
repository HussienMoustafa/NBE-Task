import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../Title/Title';
import styles from './PersonalCards.style';
import strings from '../../assets/Language/AuthNames';
import {DraxView} from 'react-native-drax';
export default function PersonalCards() {
  return (
    <View style={styles.container}>
      <Title title={strings.cards} />
      <ScrollView contentContainerStyle={styles.ScrollView} horizontal={true}>
        <Image
          style={styles.img}
          source={require('../../assets/Images/CreditCard.png')}
        />
        <Image
          style={styles.img}
          source={require('../../assets/Images/creditCard2.png')}
        />
      </ScrollView>
    </View>
  );
}
