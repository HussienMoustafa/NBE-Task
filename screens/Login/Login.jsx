import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ImageBackground,
  Text,
  Image,
  Pressable,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import FingerPrint from '../../components/FingerPrint/FingerPrint';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import styles from './Login.style';
import strings from '../../assets/Language/AuthNames';
import {useSelector, useDispatch} from 'react-redux';
import {toggleLanguage} from '../../redux/languageSlice';
import {login} from '../../util/auth';
import {setUserId} from '../../redux/userSlice';
import {bgImage} from '../../assets/Images/BgImages/BgImages';
import {AR, EN} from '../../assets/Images/Language/Language';
import {nbe} from '../../assets/Images/NBE/NBE';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import {SheetManager} from 'react-native-actions-sheet';

export default function Login({navigation}) {
  function openFingerPrint() {
    // setFingerPrintVisible(true);
    SheetManager.show('fingerprint', {
      payload: {title: strings.fingerPrintLogin},
    });
  }

  // function closeFingerPrint() {
  //   setFingerPrintVisible(false);
  // }

  async function loginHandler() {
    try {
      const data = await login(userName, userPassword);
      // setuserId = data.localId
      dispatch(setUserId(data.localId));

      navigation.navigate('Drawer');
    } catch (error) {
      Alert.alert(
        'Authentication Failed',
        'Please Try Again with the valid credentials',
      );
      console.log(error);
    }
    // setUserName('');
    // setUserPassword('');
  }

  function signUpHandler() {
    navigation.navigate('Mobile Number');
  }

  function userNameHandler(enteredText) {
    setUserName(enteredText);
  }
  function userPasswordHandler(enteredText) {
    setUserPassword(enteredText);
  }

  const currentLanguage = useSelector(state => state.language.value);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(false);

  const [isFingerPrintVisible, setFingerPrintVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.appContainer}>
      <ImageBackground
        source={{uri: bgImage}}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.maincontainer}>
          <View style={styles.container}>
            <View style={styles.logo}>
              <Pressable
                // style={{backgroundColor: 'red'}}
                onPress={() => {
                  dispatch(toggleLanguage());
                }}>
                <Image
                  style={styles.languageImg}
                  source={currentLanguage === 'en' ? {uri: AR} : {uri: EN}}
                />
              </Pressable>
              <Image style={styles.nbeImg} source={{uri: nbe}} />
            </View>
            <View>
              <Text style={styles.txt}>{strings.welcome}</Text>
            </View>
            <View>
              <Input
                img={require('../../assets/Images/@grey.png')}
                placeholder={strings.userPlaceHolder}
                value={userName}
                onChangeText={userNameHandler}
                // style={styles.input}
              >
                {strings.userName}
              </Input>
              <PasswordInput
                img={require('../../assets/Images/password.png')}
                placeholder={strings.passwordPlaceHolder}
                value={userPassword}
                setTogglePassword={setTogglePassword}
                toggle={togglePassword}
                // secureTextEntry={true}
                onChangeText={userPasswordHandler}>
                {strings.password}
              </PasswordInput>
            </View>
            <View
              style={[
                styles.rememberOrForgot,
                currentLanguage === 'ar'
                  ? {flexDirection: 'row-reverse'}
                  : null,
              ]}>
              <View
                style={[
                  styles.rememberMe,
                  currentLanguage === 'ar'
                    ? {flexDirection: 'row-reverse'}
                    : null,
                ]}>
                <View
                  style={[
                    styles.rememberMeImg,
                    currentLanguage === 'ar'
                      ? {marginRight: 0, marginLeft: 10}
                      : null,
                  ]}>
                  <Pressable>
                    <Image
                      source={require('../../assets/Images/remember-me.png')}
                    />
                  </Pressable>
                </View>
                <Text style={styles.rememberMeTxt}>{strings.Rememberme}</Text>
              </View>
              <View>
                <Pressable>
                  <Text style={styles.forgotPass}>
                    {strings.Forgotpassword}
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={[
                styles.logInMethods,
                currentLanguage === 'ar'
                  ? {flexDirection: 'row-reverse'}
                  : null,
              ]}>
              <Button
                layout={styles.logIn}
                txt={styles.logInTxt}
                onPress={loginHandler}>
                {strings.LogIn}
              </Button>
              <View style={styles.fingerprint}>
                <Pressable onPress={openFingerPrint}>
                  <Image
                    source={require('../../assets/Images/fingerprint.png')}
                  />
                </Pressable>
              </View>
              {/* {isFingerPrintVisible && (
                <FingerPrint
                  visible={isFingerPrintVisible}
                  closeFingerPrint={closeFingerPrint}
                  title={strings.fingerPrintLogin}
                />
              )} */}
              {/* <FingerPrint
                // visible={isFingerPrintVisible}
                // closeFingerPrint={closeFingerPrint}
                title={strings.fingerPrintLogin}
              /> */}
            </View>
            <View
              style={[
                styles.noAcc,
                currentLanguage === 'ar'
                  ? {flexDirection: 'row-reverse'}
                  : null,
              ]}>
              <Text style={styles.noAccTxt}>{strings.noAccount} </Text>
              <View>
                <Pressable onPress={signUpHandler}>
                  <Text style={styles.signUpTxt}>{strings.signUp}</Text>
                </Pressable>
              </View>
            </View>
          </View>
          <Footer />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
