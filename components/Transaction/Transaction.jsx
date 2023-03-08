import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './Transaction.style';
import {useSelector} from 'react-redux';

export default function Transaction({transaction}) {
  const currentLanguage = useSelector(state => state.language.value);
  img = transaction.img !== null ? transaction.img : null;
  price = transaction.amount;
  date = transaction.date;
  title = transaction.name;
  // let imgFound = false;
  // if (img !== null) imgFound = true;
  return (
    <View
      style={[
        styles.container,
        currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
      ]}>
      <View
        style={[
          styles.innerContainer,
          currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
        ]}>
        {img && (
          <View
            style={[
              styles.img,
              currentLanguage === 'ar'
                ? {marginRight: 0, marginLeft: 10}
                : null,
            ]}>
            <Image style={styles.image} source={{uri: img}} />
          </View>
        )}
        <View>
          <View>
            <Text style={styles.seller}>{title}</Text>
          </View>
          <View>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
}
