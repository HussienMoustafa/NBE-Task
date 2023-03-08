import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './AddBenefeciary.style';
import strings from '../../assets/Language/AuthNames';
export default function AddBenefeciary({bgColor, addImg, txtColor, title}) {
  const navigation = useNavigation();
  function addHandler() {
    navigation.navigate('Add Benefeciary');
  }
  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <View>
        <Pressable>
          <Image style={styles.img} source={{uri: addImg}} />
        </Pressable>
      </View>
      <View>
        <Pressable onPress={addHandler}>
          <Text style={{color: txtColor}}>{strings.Add}</Text>
        </Pressable>
      </View>
    </View>
  );
}
