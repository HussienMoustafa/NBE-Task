import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardItem from '../CardItem/CardItem';
import styles from './Cards.style';
import strings from '../../assets/Language/AuthNames';
import {useSelector} from 'react-redux';
import {
  accounts,
  cards,
  history,
  utilities,
} from '../../assets/Images/Cards/Cards';

export default function Cards({cardHandler}) {
  const currentLanguage = useSelector(state => state.language.value);

  return (
    <View
      style={[
        styles.container,
        currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
      ]}>
      <CardItem
        cardHandler={cardHandler}
        img={accounts}
        color="rgba(0, 201, 116, 0.15)"
        width={30}
        height={21}>
        {strings.accounts}
      </CardItem>
      <CardItem
        cardHandler={cardHandler}
        img={cards}
        color="rgba(0, 173, 248, 0.15)"
        width={30}
        height={24}>
        {strings.cards}
      </CardItem>
      <CardItem
        cardHandler={cardHandler}
        img={utilities}
        color="rgba(246, 167, 33, 0.15)"
        width={20}
        height={20}>
        {strings.utilities}
      </CardItem>
      <CardItem
        cardHandler={cardHandler}
        img={history}
        color="rgba(255, 0, 46, 0.15)"
        width={22}
        height={30}>
        {strings.history}
      </CardItem>
    </View>
  );
}
