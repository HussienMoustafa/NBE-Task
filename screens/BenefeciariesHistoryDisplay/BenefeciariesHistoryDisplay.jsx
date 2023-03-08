import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import BenefeciariesNoHistory from '../../components/BenefeciariesNoHistory/BenefeciariesNoHistory';
import BenefeciariesHistory from '../../components/BenefeciariesHistory/BenefeciariesHistory';
import styles from './BenefeciariesHistoryDisplay.style';
import TopBar from '../../components/TopBar/TopBar';
import {getTransactionsHistory} from '../../util/http';
import {useSelector} from 'react-redux';
import BeneficiaryCard from '../../components/BenefeciaryCard/BeneficiaryCard';
import strings from '../../assets/Language/AuthNames';

export default function BenefeciariesHistoryDisplay({route}) {
  const {benefeciar} = route.params;
  const userId = useSelector(state => state.user.id);
  const benId = benefeciar.id;
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    async function fetchTransactions() {
      setTransactions(await getTransactionsHistory(userId, benId));
    }
    fetchTransactions();
  }, []);
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.card}>
        <BeneficiaryCard benefeciar={benefeciar} />
      </View>
      <View>
        <Text style={styles.transactionsTitle}>
          {strings.transactionshistory}
        </Text>
      </View>
      {transactions.length === 0 ? (
        <BenefeciariesNoHistory />
      ) : (
        <BenefeciariesHistory transactions={transactions} />
      )}
    </View>
  );
}
