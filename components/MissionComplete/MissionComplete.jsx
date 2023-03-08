import {Image, Modal, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../Button/Button';
import styles from './MissionComplete.style';
import strings from '../../assets/Language/AuthNames';
import {useNavigation} from '@react-navigation/native';

export default function MissionComplete({visible, close, name}) {
  const navigation = useNavigation();
  function finishHandler() {
    close();
    navigation.navigate('Benefeciaries');
    // navigation.navigate('Main', {screen: strings.home});
  }
  return (
    <Modal transparent={true} statusBarTranslucent={true} visible={visible}>
      {/* <StatusBar hidden={true} backgroundColor="rgba(0,0,0,0.5" /> */}
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          <View>
            <Image
              source={require('../../assets/Images/missionComplete.png')}
            />
          </View>
          <View>
            <Text style={styles.missionComplete}>
              {strings.missioncomplete}
            </Text>
          </View>
          <View>
            <Text style={styles.txt}>{name}</Text>
          </View>
          <View>
            <Button
              layout={styles.finish}
              txt={styles.finishTxt}
              onPress={finishHandler}>
              {strings.finish}
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}
