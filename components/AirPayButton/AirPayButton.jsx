import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FingerPrint from '../FingerPrint/FingerPrint';
import styles from './AirPayButton.style';
import strings from '../../assets/Language/AuthNames';
export default function AirPayButton({children, layout, txt, submit}) {
  const [isFingerPrintVisible, setFingerPrintVisible] = useState(false);

  function openFingerPrint() {
    setFingerPrintVisible(true);
  }

  function closeFingerPrint() {
    setFingerPrintVisible(false);
  }

  // function submit() {}
  return (
    <View style={[styles.button, layout]}>
      <Pressable style={styles.press} onPress={submit}>
        <Text style={[styles.txt, txt]}>{children}</Text>
        <View>
          <Pressable style={styles.fingerprint} onPress={openFingerPrint}>
            <Image source={require('../../assets/Images/fingerprint2.png')} />
          </Pressable>
        </View>
        {isFingerPrintVisible && (
          <FingerPrint
            closeFingerPrint={closeFingerPrint}
            title={strings.AirPaymentFingerPrint}
          />
        )}
      </Pressable>
    </View>
  );
}
