import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddBenefeciary from '../AddBenefeciary/AddBenefeciary';
import BenefeciariesTopBar from '../BenefeciariesTopBar/BenefeciariesTopBar';
import styles from './EmptyBenefeciaries.style';
import strings from '../../assets/Language/AuthNames';
import {add2} from '../../assets/Images/AddButton/Add';

export default function EmptyBenefeciaries() {
  return (
    <View style={styles.container}>
      {/* <BenefeciariesTopBar /> */}
      <View style={styles.empty}>
        <View style={styles.img}>
          <Image source={require('../../assets/Images/noBenefeciaries.png')} />
        </View>
        <View>
          <Text style={styles.noBenefeciaries}>{strings.nobeneficiaries}</Text>
        </View>
        <View>
          <Text style={styles.txt}>{strings.nobeneficiariesadd}</Text>
        </View>
        <AddBenefeciary
          bgColor={'rgba(0, 114, 54, 1)'}
          addImg={add2}
          txtColor={'rgba(255, 255, 255, 1)'}
        />
      </View>
    </View>
  );
}
