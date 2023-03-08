import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import styles from './Atms.style';

export default function Atms() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 100, color: 'green'}}>ATMs</Text>
    </View>
  );
}
