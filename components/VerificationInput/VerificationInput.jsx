import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import styles from './VerificationInput.style';

export default function VerificationInput() {
  // const primary =
  function activateBorder() {
    setBorderActive(true);
  }
  function deactivateBorder() {
    setBorderActive(false);
  }
  const [borderActive, setBorderActive] = useState(false);
  return (
    <View style={[styles.input, borderActive ? styles.borderActive : null]}>
      <TextInput
        style={styles.txtInput}
        placeholder="_"
        maxLength={1}
        onFocus={activateBorder}
        onBlur={deactivateBorder}
        // blurOnSubmit={false}
        // ref={input => {
        //   this.secondTextInput = input;
        // }}
      />
    </View>
  );
}
