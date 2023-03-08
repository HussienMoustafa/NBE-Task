import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BenefeciarModal from '../BenefeciarModal/BenefeciarModal';
import {useNavigation} from '@react-navigation/native';
import styles from './BeneficiaryCard.style';
import strings from '../../assets/Language/AuthNames';

export default function BeneficiaryCard({benefeciar}) {
  const navigation = useNavigation();
  const [userOptionsVisible, setUserOptionsVisible] = useState(false);
  const name = benefeciar.firstName + ' ' + benefeciar.lastName;
  const phoneNumber = benefeciar.phoneNumber;
  const img = benefeciar.img;
  const savings = '802,828.61';

  function openUserOptions() {
    setUserOptionsVisible(true);
  }

  function closeUserOptions() {
    setUserOptionsVisible(false);
  }

  function pressedCardHandler() {
    navigation.navigate(strings.beneficiaries, {
      screen: 'BenefeciariesHistory',
      initial: false,
      params: {benefeciar: benefeciar},
    });
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressedCard} onPress={pressedCardHandler}>
        <View style={styles.user}>
          <View style={styles.userImg}>
            <Image
              // source={require('../../assets/Images/mashaly.png')}
              source={{uri: img}}
              style={styles.image}
            />
          </View>
          <View>
            <View>
              <Text style={styles.username}>{name}</Text>
            </View>
            <View style={styles.numberContainer}>
              <View style={styles.img}>
                <Image source={require('../../assets/Images/phone.png')} />
              </View>
              <View>
                <Text style={styles.txt}>{phoneNumber}</Text>
              </View>
            </View>
            <View style={styles.savingsContainer}>
              <View style={styles.img}>
                <Image source={require('../../assets/Images/savings.png')} />
              </View>
              <View>
                <Text style={styles.txt}>${savings}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.dotsImgOuterContainer}>
          <Pressable onPress={openUserOptions} style={styles.dostImgPress}>
            <Image source={require('../../assets/Images/dots.png')} />
          </Pressable>
          {userOptionsVisible && (
            <BenefeciarModal
              userOptionsVisible={userOptionsVisible}
              closeUserOptions={closeUserOptions}
              benefeciar={benefeciar}
            />
          )}
        </View>
      </Pressable>
    </View>
  );
}
