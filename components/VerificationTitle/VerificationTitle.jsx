import {StyleSheet, Text, View} from 'react-native';
import React, {Children} from 'react';
import styles from './VerificationTitle.style';

export default function VerificationTitle({children}) {
  return (
    <View>
      <Text style={styles.verification}>{children}</Text>
    </View>
  );
}
