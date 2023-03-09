import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './BalanceCard.style';
import FingerPrint from '../FingerPrint/FingerPrint';
import strings from '../../assets/Language/AuthNames';
import {useSelector} from 'react-redux';
import {balanceBg} from '../../assets/Images/BalanceBg/BalanceBg';
import {fingerprint2} from '../../assets/Images/FingerPrint/FingerPrint';
import {SheetManager} from 'react-native-actions-sheet';

export default function BalanceCard() {
  const userBalance = useSelector(state => state.user.balance);

  // function openFingerPrint() {
  //   setFingerPrintVisible(true);
  // }
  function openFingerPrint() {
    // setFingerPrintVisible(true);
    SheetManager.show('fingerprint', {
      payload: {title: 'Show Balance'},
    });
  }

  // function closeFingerPrint() {
  //   setFingerPrintVisible(false);
  // }
  function balanceHandler() {
    showBalance(true);
  }
  const [balance, showBalance] = useState(false);
  const [isFingerPrintVisible, setFingerPrintVisible] = useState(false);
  const currentLanguage = useSelector(state => state.language.value);

  return (
    <View>
      <ImageBackground
        source={{uri: balanceBg}}
        style={styles.imgContainer}
        imageStyle={[
          styles.imgInner,
          balance ? {backgroundColor: 'rgba(0, 61, 29, 1)'} : null,
        ]}>
        <Pressable style={styles.container} onPress={balanceHandler}>
          <View
            style={[
              styles.row,
              currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
            ]}>
            <View>
              <Text style={styles.txt}>{strings.balance}</Text>
            </View>
            <View>
              <Pressable style={[styles.fingerprint]} onPress={openFingerPrint}>
                <Image
                  style={styles.fingerprintImg}
                  source={{uri: fingerprint2}}
                />
              </Pressable>
            </View>
            {/* {isFingerPrintVisible && (
              <FingerPrint
                closeFingerPrint={closeFingerPrint}
                title={strings.AirPaymentFingerPrint}
              />
            )} */}
          </View>
          <View style={styles.balance}>
            {balance ? (
              <Text style={styles.balanceTxt}>${userBalance}</Text>
            ) : (
              <Text style={styles.pressHere}>{strings.showbalance}</Text>
            )}
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
