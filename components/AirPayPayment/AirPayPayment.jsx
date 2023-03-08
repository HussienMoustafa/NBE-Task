import {Image, Modal, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../Button/Button';
import styles from './AirPayPayment.style';
import strings from '../../assets/Language/AuthNames';
export default function AirPayPayment({
  children,
  price,
  success,
  img,
  visible,
  close,
}) {
  // function close() {}
  return (
    <Modal transparent={true} statusBarTranslucent={true} visible={visible}>
      {/* <StatusBar hidden={true} backgroundColor="rgba(0,0,0,0.5" /> */}
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <View style={styles.img}>
            <Image style={styles.image} source={{uri: img}} />
          </View>
          <View>
            <Text
              style={[styles.missionComplete, !success && {color: '#EB001B'}]}>
              {children}
            </Text>
          </View>
          <View>
            <Text style={styles.txt}>
              {success ? strings.paymentsuccesfull : strings.paymentfailed}
            </Text>
          </View>
          <View>
            <Text style={styles.price}>${price}</Text>
          </View>
          {success ? (
            <View>
              <Button
                onPress={close}
                layout={styles.finish}
                txt={styles.finishTxt}>
                {strings.done}
              </Button>
            </View>
          ) : (
            <View style={styles.buttons}>
              <Button
                onPress={close}
                layout={[styles.cancel]}
                txt={styles.cancelTxt}>
                {strings.cancelpay}
              </Button>
              <Button
                onPress={close}
                layout={[styles.finish, {width: 167}]}
                txt={styles.finishTxt}>
                {strings.tryagain}
              </Button>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}
