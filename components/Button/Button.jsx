import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './Button.style';
export default function Button({children, layout, txt, onPress}) {
  return (
    <View style={[styles.button, layout]}>
      <Pressable onPress={onPress}>
        <Text style={[styles.txt, txt]}>{children}</Text>
      </Pressable>
    </View>
  );
}
