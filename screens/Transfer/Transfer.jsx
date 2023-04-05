import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../../components/Title/Title';
import Back from '../../components/BackButton/Back';
import Button from '../../components/Button/Button';
import DropDown from '../../components/DropDownInput/DropDown';
import Input from '../../components/Input/Input';
import styles from './Transfer.style';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {useSelector} from 'react-redux';
import {storeTransaction} from '../../util/http';

export default function Transfer() {
  let ben = [];
  function getBenefeciaries() {
    const transferTo = [];
    for (const key in benefeciaries) {
      const benefeciary =
        // id: key,
        benefeciaries[key].firstName + ' ' + benefeciaries[key].lastName;
      // benefeciaries[key].id;
      // console.log(benefeciaries[key]);
      ben[benefeciaries[key].firstName + ' ' + benefeciaries[key].lastName] = {
        id: benefeciaries[key].id,
        deviceToken: benefeciaries[key].deviceToken,
      };
      // console.log(ben);
      transferTo.push(benefeciary);
    }
    return transferTo;
  }
  function backHandler() {
    navigation.goBack();
  }

  function transferHandler() {
    // console.log(transTitle, transAmount, userId, transTo);
    // console.log(ben[transTo]);
    storeTransaction(
      transTitle,
      transAmount,
      userId,
      ben[transTo].id,
      ben[transTo].deviceToken,
    );

    navigation.navigate('Verification', {
      // name: benefeciaries[id].firstName + ' ' + benefeciaries[id].lastName,
      name: `Transfer to ${transTo}\n was successful`,
    });
  }
  const userId = useSelector(state => state.user.id);
  const navigation = useNavigation();
  const benefeciaries = useSelector(state => state.benefeciaries.value);
  const typeOfTransfer = ['Between your accounts', 'To a benefeciary', 'other'];
  const transferFrom = ['042-653214521245   -   $2,145,5874.25'];
  // let transferTo = [];

  const transferTo = getBenefeciaries();
  console.log(transferTo);

  const [transType, setTypeOfTransfer] = useState();
  const [transFrom, setTransFrom] = useState();
  const [transTo, setTransTo] = useState(transferTo[0]);
  const [transAmount, setTransAmount] = useState();
  const [transTitle, setTransTitle] = useState();
  // const [benDeviceToken, setBenDeviceToken] = useState(transferTo[0]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Back onPress={backHandler} />
        <Image source={require('../../assets/Images/nbe2.png')} />
      </View>
      <ScrollView>
        {/* <KeyboardAvoidingView> */}
        <Title title={'Transfer'} />
        <View style={styles.inputs}>
          {/* <DropDown>Type Of Transfer</DropDown> */}
          <DropDown data={typeOfTransfer} onChangeText={setTypeOfTransfer}>
            Type of transfer
          </DropDown>
          <DropDown data={transferFrom} onChangeText={setTransFrom}>
            Transfer from
          </DropDown>
          <DropDown data={transferTo} onChangeText={setTransTo}>
            Transfer to
          </DropDown>
          <Input value={transAmount} onChangeText={setTransAmount}>
            {' '}
            Amount To Transfer
          </Input>
          <Input
            value={transTitle}
            onChangeText={setTransTitle}
            placeholder={'Reason of transfer'}>
            {' '}
          </Input>
        </View>
        <Button
          layout={styles.transferButton}
          txt={styles.transferText}
          onPress={transferHandler}>
          Transfer
        </Button>
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
    </View>
  );
}
