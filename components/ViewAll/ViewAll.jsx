import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './ViewAll.style';
import strings from '../../assets/Language/AuthNames';

export default function ViewAll({title}) {
  return (
    <View>
      <Pressable>
        <Text style={styles.viewAll}>{title}</Text>
      </Pressable>
    </View>
  );
}
