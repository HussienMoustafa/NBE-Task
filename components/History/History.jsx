import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Transaction from '../Transaction/Transaction';
import Heading from '../Heading/Heading';
import styles from './History.style';
import strings from '../../assets/Language/AuthNames';
import {useSelector} from 'react-redux';

export default function History() {
  const transactions = useSelector(state => state.user.transactions);

  // const currentLanguage = useSelector(state => state.language.value);

  return (
    <View style={styles.container}>
      <Heading
        title={strings.history}
        viewTitle={strings.viewalltransactions}
      />

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
