import {useState} from 'react';
import {
  BackHandler,
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
import Input from '../../components/Input/Input';
import {setPhoneNumber} from '../../util/auth';
import styles from './MobileNumber.style';

export default function MobileNumber({navigation}) {
  function mobileHandler(enteredText) {
    setMobile(enteredText);
  }

  const [mobile, setMobile] = useState('');
  const currentLanguage = useSelector(state => state.language.value);

  // function activateBorder() {
  //   setBorderActive(true);
  // }
  // function deactivateBorder() {
  //   setBorderActive(false);
  // }

  function backHandler() {
    // navigation.navigate('Login');
    navigation.goBack();
  }

  function nextHandler() {
    setPhoneNumber(mobile);
    navigation.navigate('Verification', {name: null});
  }

  // const [borderActive, setBorderActive] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.appContainer}>
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
          <Text style={styles.mobile}>{strings.mobileno}</Text>
          <Text style={styles.txt}>{strings.entermobileno}</Text>
          {/* <View
            style={[
              styles.input,
              borderActive ? styles.borderActive : null,
              currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
            ]}>
            <View>
              <Image source={require('../../assets/Images/mobileLogo.png')} />
            </View>
            <View
              style={[
                styles.field,
                currentLanguage === 'ar'
                  ? {marginRight: 15, marginLeft: 0}
                  : null,
              ]}>
              <Text style={styles.phone}>{strings.mobileno}</Text>
              <TextInput
                placeholder="Write your mobile number here"
                onFocus={activateBorder}
                onBlur={deactivateBorder}
                keyboardType="number-pad"
              />
            </View>
          </View> */}
          <Input
            img={require('../../assets/Images/mobileLogo.png')}
            placeholder={'Write your mobile number here'}
            value={mobile}
            onChangeText={mobileHandler}
            keyboardType="number-pad">
            {strings.mobileno}
          </Input>
        </View>
      </View>
      <View>
        <Button
          layout={styles.nextButton}
          txt={styles.nextText}
          onPress={nextHandler}>
          {strings.next}
        </Button>
        <Text style={styles.footer}>
          {strings.termsofservice[0]}{' '}
          <Text style={styles.terms}>{strings.termsofservice[1]}</Text>{' '}
          {strings.termsofservice[2]}
        </Text>
        <Text style={styles.ack}>
          {strings.termsofservice[3]}
          <Text style={styles.privacy}> {strings.termsofservice[4]}</Text>.
        </Text>
      </View>
    </ScrollView>
  );
}
