import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './CardItem.style';

export default function CardItem({
  children,
  img,
  color,
  cardHandler,
  width,
  height,
}) {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Pressable
          onPress={cardHandler.bind(this, children)}
          style={[styles.container, {backgroundColor: color}]}>
          <Image style={{width: width, height: height}} source={{uri: img}} />
        </Pressable>
      </View>
      <Text style={styles.txt}>{children}</Text>
    </View>
  );
}
