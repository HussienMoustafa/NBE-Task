import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BeneficiaryCard from '../BenefeciaryCard/BeneficiaryCard';
import styles from './BenefeciariesNoHistory.style';
import strings from '../../assets/Language/AuthNames';
export default function BenefeciariesNoHistory() {
  // console.log(55);
  return (
    <View style={styles.container}>
      <View style={styles.noHistory}>
        <View style={styles.img}>
          <Image source={require('../../assets/Images/noHistory.png')} />
        </View>
        <View>
          <Text style={styles.noHistoryTxt}>No History</Text>
        </View>
        <View>
          <Text style={styles.txt}>{strings.notransactions}</Text>
        </View>
      </View>
    </View>
  );
}
