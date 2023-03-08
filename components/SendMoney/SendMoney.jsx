import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UserCard from '../UserCard/UserCard';
import Heading from '../Heading/Heading';
import styles from './SendMoney.style';
import strings from '../../assets/Language/AuthNames';
import {useSelector} from 'react-redux';

export default function SendMoney() {
  // const currentLanguage = useSelector(state => state.language.value);
  const benefeciaries = useSelector(state => state.benefeciaries.value);
  const currentLanguage = useSelector(state => state.language.value);

  return (
    <View style={styles.container}>
      <Heading title={strings.sendmoney} viewTitle={strings.viewallusers} />
      {/* <ScrollView> */}
      {/* <UserCard
          img={require('../../assets/Images/soha.png')}
          username={'Hala'}
        />
        <UserCard
          img={require('../../assets/Images/ayman.png')}
          username={'Ayman'}
        />
        <UserCard
          img={require('../../assets/Images/alex.png')}
          username={'Alex'}
        />
        <UserCard
          img={require('../../assets/Images/soha.png')}
          username={'Soha'}
        />
        <UserCard
          img={require('../../assets/Images/soha.png')}
          username={'Soha'}
        /> */}
      <FlatList
        contentContainerStyle={[
          styles.innerContainer,
          // currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
        ]}
        // contentContainerStyle={styles.flatList}
        // numColumns={4}
        horizontal={true}
        inverted={currentLanguage === 'ar' ? true : false}
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
      {/* </ScrollView> */}
    </View>
  );
}
