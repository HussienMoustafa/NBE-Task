import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './PasswordCheckItem.style';

export default function PasswordCheckItem({
  title,
  checkHandler,
  password,
  toggle,
}) {
  function handler() {
    checkHandler(true);
  }

  handler();

  // console.log(toggle);

  return (
    <View style={styles.passCheckItem}>
      <View style={styles.passCheckImage}>
        {toggle ? (
          <Image style={styles.img} source={{uri: passCheckLight}} />
        ) : (
          <Image style={styles.img} source={{uri: passCheckUnlight}} />
        )}
      </View>
      <View>
        <Text style={styles.passCheckTxt}>{title}</Text>
      </View>
    </View>
  );
}
