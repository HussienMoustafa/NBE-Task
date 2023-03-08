import React, {useState} from 'react';
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {nbe2} from '../../assets/Images/NBE/NBE';
import strings from '../../assets/Language/AuthNames';
import Back from '../../components/BackButton/Back';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import PasswordCheck from '../../components/PasswordCheck/PasswordCheck';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import {createUser} from '../../util/auth';
import {storeUser} from '../../util/http';
import styles from './SetPassword.style';

export default function SetPassword({navigation}) {
  const currentLanguage = useSelector(state => state.language.value);

  function passwordHandler(enteredText) {
    setPassword(enteredText);
  }
  function confirmPasswordHandler(enteredText) {
    setConfirmPassword(enteredText);
  }
  function secondaryCheckHandler() {
    // setSecondaryCheck(primaryCheck && password === confirmPassword);
    // console.log(primaryCheck);
    return primaryCheck && password === confirmPassword;
  }

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [primaryCheck, setPrimaryCheck] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [togglePassword2, setTogglePassword2] = useState(false);

  function backHandler() {
    navigation.goBack();
  }

  async function submitHandler() {
    const status = secondaryCheckHandler();
    // console.log(status);
    if (status) {
      try {
        const userData = await createUser(password);
        storeUser(userData, userData.localId);
        navigation.navigate('Finish');
      } catch (error) {
        Alert.alert(
          'Authentication Failed',
          'Could not sign you up. Please check your credentials',
        );
        console.log(error);
      }
    } else {
      Alert.alert('Weak Password', 'Use Another Strong Password');
    }
    // try {
    //   const userData = await createUser(password);
    //   storeUser(userData, userData.localId);
    //   navigation.navigate('Finish');
    // } catch (error) {
    //   Alert.alert(
    //     'Authentication Failed',
    //     'Could not sign you up. Please check your credentials',
    //   );
    //   console.log(error);
    // }
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
          <Text style={styles.setPassword}>{strings.setpassword}</Text>
          <Text style={styles.txt}>{strings.enterpassword}</Text>
          <PasswordInput
            img={require('../../assets/Images/password.png')}
            placeholder={strings.passwordPlaceHolder}
            value={password}
            setTogglePassword={setTogglePassword}
            toggle={togglePassword}
            // secureTextEntry={true}
            onChangeText={passwordHandler}>
            {strings.password}
          </PasswordInput>
          <PasswordInput
            img={require('../../assets/Images/password.png')}
            placeholder={'Re-Write your password here'}
            value={confirmPassword}
            // secureTextEntry={true}
            setTogglePassword={setTogglePassword2}
            toggle={togglePassword2}
            onChangeText={confirmPasswordHandler}>
            {'Confirm Password'}
          </PasswordInput>
          {/* <View style={styles.input}>
            <View>
              <Image source={require('../../assets/Images/password.png')} />
            </View>
            <View style={styles.field}>
              <Text style={styles.password}>{strings.password}</Text>
              <TextInput placeholder={strings.passwordPlaceHolder} />
            </View>
            <View style={styles.eye}>
              <Image source={require('../../assets/Images/eye.png')} />
            </View>
          </View> */}
          {/* <View style={styles.input}>
            <View>
              <Image source={require('../../assets/Images/password.png')} />
            </View>
            <View style={styles.field}>
              <Text style={styles.password}>{strings.confirmpassword}</Text>
              <TextInput placeholder="Re-Write your password here" />
            </View>
            <View style={styles.eye}>
              <Image source={require('../../assets/Images/eye.png')} />
            </View>
          </View> */}
          <PasswordCheck
            password={password}
            setPrimaryCheck={setPrimaryCheck}
          />
        </View>
      </View>
      <Button
        layout={styles.submitButton}
        txt={styles.submitText}
        onPress={submitHandler}>
        {strings.submit}
      </Button>
    </ScrollView>
  );
}
