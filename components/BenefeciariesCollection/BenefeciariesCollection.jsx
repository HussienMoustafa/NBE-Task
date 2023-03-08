import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BenefeciariesTopBar from '../BenefeciariesTopBar/BenefeciariesTopBar';
import UserCard from '../UserCard/UserCard';
import styles from './BenefeciariesCollection.style';
import {useSelector} from 'react-redux';

export default function BenefeciariesCollection(
  {
    // changeDisplayed,
    // benefeciaries,
  },
) {
  const benefeciaries = useSelector(state => state.benefeciaries.value);
  const currentLanguage = useSelector(state => state.language.value);

  // const beneficiaries = [
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/alex.png'),
  //     username: 'alex',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/ayman.png'),
  //     username: 'ayman',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/alex.png'),
  //     username: 'alex',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/ayman.png'),
  //     username: 'ayman',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  //   {
  //     img: require('../../assets/Images/soha.png'),
  //     username: 'soha',
  //     id: Math.random().toString(),
  //   },
  // ];
  // console.log(benefeciaries);
  return (
    <View style={styles.container}>
      {/* <BenefeciariesTopBar /> */}
      <FlatList
        contentContainerStyle={styles.flatList}
        numColumns={4}
        data={benefeciaries}
        renderItem={itemData => {
          return (
            <View style={styles.card}>
              <UserCard
                // changeDisplayed={changeDisplayed}
                // img={itemData.item.img}
                // img={require('../../assets/Images/ayman.png')}
                benefeciar={itemData.item}
              />
            </View>
          );
        }}
        keyExtractor={(item, index) => {
          // console.log(index);
          return item.id;
        }}
      />
    </View>
  );
}
