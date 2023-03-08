import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BenefeciariesCollection from '../BenefeciariesCollection/BenefeciariesCollection';
import BenefeciariesList from '../BenefeciariesList/BenefeciariesList';
import EmptyBenefeciaries from '../EmptyBenefeciaries/EmptyBenefeciaries';
import BenefeciariesTopBar from '../BenefeciariesTopBar/BenefeciariesTopBar';
import styles from './BenefeciariesDisplay.style';
import {useSelector} from 'react-redux';

export default function BenefeciariesDisplay() {
  function displayHandler(showType) {
    changeShowType(showType);
  }
  const [showType, changeShowType] = useState('collection');
  const benefeciaries = useSelector(state => state.benefeciaries.value);

  return (
    <View style={styles.container}>
      <BenefeciariesTopBar changeDisplay={displayHandler} />
      {benefeciaries.length === 0 ? (
        <EmptyBenefeciaries />
      ) : showType === 'collection' ? (
        <BenefeciariesCollection
        // changeDisplayed={changeDisplayed}
        // benefeciaries={benefeciaries}
        />
      ) : (
        <BenefeciariesList
        // changeDisplayed={changeDisplayed}
        // benefeciaries={benefeciaries}
        />
      )}
    </View>
  );
}
