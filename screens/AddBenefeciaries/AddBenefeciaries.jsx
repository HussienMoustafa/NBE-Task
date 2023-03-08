import {Image, Pressable, ScrollView, View} from 'react-native';
import React from 'react';
import Back from '../../components/BackButton/Back';
import styles from './AddBenefeciaries.style';
import AddBenefeciaryForm from '../../components/AddBenefeciaryForm/AddBenefeciaryForm';
import {notifications} from '../../assets/Images/Untitled/Untitled';
import {nbe2} from '../../assets/Images/NBE/NBE';

export default function AddBenefeciaries({navigation}) {
  function backHandler() {
    // navigation.navigate('Mobile Number');
    navigation.goBack();
  }

  function addHandler() {
    // navigation.navigate('Verification');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logo}>
        <View style={styles.header}>
          <Back onPress={backHandler} />
          <View style={styles.notifications}>
            <Pressable>
              <Image
                style={styles.notificationsImg}
                source={{uri: notifications}}
              />
            </Pressable>
          </View>
        </View>
        <Image style={styles.nbeImg} source={{uri: nbe2}} />
      </View>
      <AddBenefeciaryForm />
    </ScrollView>
  );
}
