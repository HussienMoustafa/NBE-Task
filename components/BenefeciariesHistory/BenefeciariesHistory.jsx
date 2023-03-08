import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BeneficiaryCard from '../BenefeciaryCard/BeneficiaryCard';
import Transaction from '../Transaction/Transaction';
import styles from './BenefeciariesHistory.style';
import strings from '../../assets/Language/AuthNames';
import {useSelector} from 'react-redux';

export default function BenefeciariesHistory({transactions}) {
  // const transactions = useSelector(state => state.user.transactions);
  // console.log(transactions);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} contentContainerStyle={{width: '100%'}}>
        <FlatList
          data={transactions}
          renderItem={itemData => {
            return <Transaction transaction={itemData.item} />;
          }}
          keyExtractor={(item, index) => {
            return index;
          }}
        />
      </ScrollView>
    </View>
  );
}
