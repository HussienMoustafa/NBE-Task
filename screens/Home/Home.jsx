import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopBar from '../../components/TopBar/TopBar';
import Cards from '../../components/Cards/Cards';
import SendMoney from '../../components/SendMoney/SendMoney';
import History from '../../components/History/History';
import PersonalCards from '../../components/PersonalCards/PersonalCards';
import styles from './Home.style';
import strings from '../../assets/Language/AuthNames';
import BalanceCard from '../../components/BalanceCard/BalanceCard';
import {useDispatch, useSelector} from 'react-redux';
import {getBenefeciaries, getUserDetails} from '../../util/http';
import {setUserDetails} from '../../redux/userSlice';
import {setBenefeciaries} from '../../redux/benefeciariesSlice';
import {useIsFocused} from '@react-navigation/native';

export default function Home() {
  const userId = useSelector(state => state.user.id);
  const dispatch = useDispatch();
  // const refreshBenefeciariesList = useSelector(
  //   state => state.benefeciaries.refresh,
  // );
  const isFocused = useIsFocused();
  // console.log(refreshBenefeciariesList);

  function cardHandler(cardType) {
    // console.log(cardType);
    setCardType(cardType);
    showCard(true);
  }
  useEffect(() => {
    async function fetchUser() {
      const userDetails = await getUserDetails(userId);
      dispatch(setUserDetails(userDetails));
    }
    fetchUser();
  }, []);
  useEffect(() => {
    async function fetchBenefeciaries() {
      const benefeciaries = await getBenefeciaries(userId);
      dispatch(setBenefeciaries(benefeciaries));
    }
    fetchBenefeciaries();
  }, [isFocused]);

  const [card, showCard] = useState(false);
  const [cardType, setCardType] = useState('');
  return (
    <ScrollView style={styles.container}>
      <TopBar />
      {card ? (
        cardType === strings.cards ? (
          <PersonalCards />
        ) : null
      ) : (
        <>
          <BalanceCard />
          <Cards cardHandler={cardHandler} />
          <SendMoney />
        </>
      )}

      <History />
    </ScrollView>
  );
}
