import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './UserInfo.style';

export default function UserInfo({benefeciar}) {
  const email = benefeciar.email;
  const number = benefeciar.phoneNumber;
  const name = benefeciar.firstName + ' ' + benefeciar.lastName;
  const img = benefeciar.img;

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.userImg}>
          <Image
            // source={require('../../assets/Images/mashaly.png')}
            source={{uri: img}}
            style={styles.image}
          />
        </View>
        <View>
          <View>
            <Text style={styles.username}>{name}</Text>
          </View>
          <View style={styles.numberContainer}>
            <View style={styles.img}>
              <Image source={require('../../assets/Images/phone.png')} />
            </View>
            <View>
              <Text style={styles.txt}>{number}</Text>
            </View>
          </View>
          <View style={styles.emailContainer}>
            <View style={styles.img}>
              <Image source={require('../../assets/Images/email.png')} />
            </View>
            <View>
              <Text style={styles.txt}>{email}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
