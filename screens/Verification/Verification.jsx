import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {nbe2} from '../../assets/Images/NBE/NBE';
import strings from '../../assets/Language/AuthNames';
import Back from '../../components/BackButton/Back';
import Button from '../../components/Button/Button';
import MissionComplete from '../../components/MissionComplete/MissionComplete';
import VerificationInput from '../../components/VerificationInput/VerificationInput';
import VerificationTitle from '../../components/VerificationTitle/VerificationTitle';
import styles from './Verification.style';

export default function Verification({navigation, route}) {
  const currentLanguage = useSelector(state => state.language.value);
  const [missionComplete, setMissionComplete] = useState(false);
  const {name} = route.params;

  function backHandler() {
    // navigation.navigate('Mobile Number');
    navigation.goBack();
  }
  function submitHandler() {
    // const parent = navigation.getParent();
    const routes = navigation.getState()?.routes;
    const prevRoute = routes[routes.length - 2].name;
    if (prevRoute === 'Mobile Number') {
      navigation.navigate('Set Password');
    } else {
      // name = route.params.name;
      // console.log(name);

      setMissionComplete(true);
    }
  }
  function close() {
    setMissionComplete(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View
          style={[
            styles.logo,
            currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
          ]}>
          <Back onPress={backHandler} />
          <Image style={styles.nbeImg} source={{uri: nbe2}} />
        </View>
        <View>
          <VerificationTitle>{strings.verification}</VerificationTitle>
          <Text style={styles.txt}>
            {strings.enterverification} +20 101 131 5412
          </Text>
          <View style={styles.verificationInputs}>
            <VerificationInput />
            <VerificationInput />
            <VerificationInput />
            <VerificationInput />
            <VerificationInput />
          </View>
          <Text style={[styles.txt, {marginBottom: 3}]}>{strings.nocode}</Text>
          <Text style={[styles.request, {fontSize: 16}]}>
            {strings.reqnewcode}
          </Text>
        </View>
      </View>
      <Button
        layout={styles.submitButton}
        txt={styles.submitText}
        onPress={submitHandler}>
        {strings.submit}
      </Button>
      {missionComplete ? (
        <MissionComplete visible={missionComplete} close={close} name={name} />
      ) : null}
    </ScrollView>
  );
}
