import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TopBar from '../../components/TopBar/TopBar';
import BenefeciariesDisplay from '../../components/BenefeciariesDisplay/BenefeciariesDisplay';
import styles from './Benefeciaries.style';
import {useDispatch, useSelector} from 'react-redux';
import {setBenefeciaries} from '../../redux/benefeciariesSlice';
import {getBenefeciaries} from '../../util/http';
import {useIsFocused} from '@react-navigation/native';

export default function Benefeciaries() {
  // const isFocused = useIsFocused();
  // const userId = useSelector(state => state.user.id);

  // function displayHandler(showType) {
  //   changeShowType(showType);
  // }

  // const [showType, changeShowType] = useState('collection');

  // console.log(route.params);
  // // let {display} = route.params.display;
  // let display = 'History';

  // const display = route.params.display;
  // const benefeciaries = useSelector(state => state.benefeciaries.value);
  // const userId = useSelector(state => state.user.id);

  // const dispatch = useDispatch();

  // function changeDisplayed(display) {
  //   setDisplayedNow(display);
  // }

  // const [displayedNow, setDisplayedNow] = useState('Benefeciaries');
  // useEffect(() => {
  //   async function fetchBenefeciaries() {
  //     const benefeciaries = await getBenefeciaries(userId);
  //     dispatch(setBenefeciaries(benefeciaries));
  //   }
  //   fetchBenefeciaries();
  // }, [isFocused]);

  // console.log(benefeciaries);

  return (
    <View style={styles.container}>
      <TopBar />

      <BenefeciariesDisplay />

      {/* <BenefeciarModal /> */}
    </View>
  );
}
