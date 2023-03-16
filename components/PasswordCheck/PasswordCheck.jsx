import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './PasswordCheck.style';
import strings from '../../assets/Language/AuthNames';
import PasswordCheckItem from '../PasswordCheckItem/PasswordCheckItem';
import {
  checkAll,
  checkLower,
  checkMin8,
  checkNumber,
  checkSpecialChar,
  checkUpper,
} from '../PasswordCheckItem/checkPasswordHelperFunctions';
import {
  passCheckLight,
  passCheckUnlight,
} from '../../assets/Images/PassCheck/PassCheck';

export default function PasswordCheck({password, setPrimaryCheck}) {
  function lowerHelper() {
    setLower(checkLower(password));

    // if (password ==)
  }
  function upperHelper() {
    setUpper(checkUpper(password));
  }
  function min8Helper() {
    setMin8(checkMin8(password));
  }
  function numberHelper() {
    setNumber(checkNumber(password));
  }
  function specialCharHelper() {
    setSpecialChar(checkSpecialChar(password));
  }
  function primaryCheckHandler() {
    const primaryCheck = checkAll(password);
    // console.log(55555, lower && upper && min8 && number && specialChar);
    // console.log(primaryCheck);
    setPrimaryCheck(primaryCheck);
  }
  const [lower, setLower] = useState(false);
  const [upper, setUpper] = useState(false);
  const [min8, setMin8] = useState(false);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);

  //   console.log(password);
  // lowerHelper();
  useEffect(() => {
    // console.log(0);
    lowerHelper();
    // console.log(1);
    upperHelper();
    // console.log(2);
    min8Helper();
    // console.log(3);
    numberHelper();
    // console.log(4);
    specialCharHelper();
    // console.log(5);
    primaryCheckHandler();
  }, [password]);

  return (
    <View>
      <View style={styles.passCheckRow}>
        <View style={styles.passCheckItem}>
          <View style={styles.passCheckImage}>
            {lower ? (
              <Image style={styles.img} source={{uri: passCheckLight}} />
            ) : (
              <Image style={styles.img} source={{uri: passCheckUnlight}} />
            )}
          </View>
          <View>
            <Text style={styles.passCheckTxt}>{strings.lowercase}</Text>
          </View>
        </View>
        <View style={styles.passCheckItem}>
          <View style={styles.passCheckImage}>
            {upper ? (
              <Image style={styles.img} source={{uri: passCheckLight}} />
            ) : (
              <Image style={styles.img} source={{uri: passCheckUnlight}} />
            )}
          </View>
          <View>
            <Text style={styles.passCheckTxt}>{strings.uppercase}</Text>
          </View>
        </View>
        {/* <PasswordCheckItem
          title={strings.lowercase}
          password={password}
          checkHandler={lowerHelper}
          toggle={lower}
        />
        <PasswordCheckItem
          title={strings.uppercase}
          password={password}
          checkHandler={upperHelper}
          toggle={upper}
        /> */}
      </View>
      <View style={styles.passCheckRow}>
        <View style={styles.passCheckItem}>
          <View style={styles.passCheckImage}>
            {min8 ? (
              <Image style={styles.img} source={{uri: passCheckLight}} />
            ) : (
              <Image style={styles.img} source={{uri: passCheckUnlight}} />
            )}
          </View>
          <View>
            <Text style={styles.passCheckTxt}>{strings.min8}</Text>
          </View>
        </View>
        <View style={styles.passCheckItem}>
          <View style={styles.passCheckImage}>
            {number ? (
              <Image style={styles.img} source={{uri: passCheckLight}} />
            ) : (
              <Image style={styles.img} source={{uri: passCheckUnlight}} />
            )}
          </View>
          <View>
            <Text style={styles.passCheckTxt}>{strings.number}</Text>
          </View>
        </View>
        {/* <PasswordCheckItem
          title={strings.min8}
          password={password}
          checkHandler={min8Helper}
          toggle={min8}
        />
        <PasswordCheckItem
          title={strings.number}
          password={password}
          checkHandler={numberHelper}
          toggle={number}
        /> */}
      </View>

      <View>
        <View style={styles.passCheckItem}>
          <View style={styles.passCheckImage}>
            {specialChar ? (
              <Image style={styles.img} source={{uri: passCheckLight}} />
            ) : (
              <Image style={styles.img} source={{uri: passCheckUnlight}} />
            )}
          </View>
          <View>
            <Text style={styles.passCheckTxt}>{strings.specialcharacter}</Text>
          </View>
        </View>
        {/* <PasswordCheckItem
          title={strings.specialcharacter}
          password={password}
          checkHandler={specialCharHelper}
          toggle={specialChar}
        /> */}
      </View>
    </View>
  );
}
