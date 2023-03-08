import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import strings from '../../assets/Language/AuthNames';
import Button from '../../components/Button/Button';
import styles from './Finish.style';

export default function Finish({navigation}) {
  const currentLanguage = useSelector(state => state.language.value);

  const bgStyle = [((backgroundColor = '#fff'), (elevation = 4))];

  function finishHandler() {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.finishContainer}>
      <View
        style={[
          styles.image,
          currentLanguage === 'ar' ? {alignSelf: 'flex-start'} : null,
        ]}>
        <Image source={require('../../assets/Images/nbe.png')} />
      </View>
      <ImageBackground
        source={require('../../assets/Images/finishScreen.png')}
        resizeMode="cover"
        style={styles.bgImageContainer}
        imageStyle={styles.bgImg}>
        <View style={styles.container}>
          <View
            style={[
              styles.txts,
              currentLanguage === 'ar'
                ? {paddingLeft: 0, paddingRight: 24}
                : null,
            ]}>
            <Text style={styles.congrats}>{strings.congratulations}</Text>
            <Text style={styles.success}>{strings.finishedregister}</Text>
          </View>
          <Button
            layout={styles.finishButton}
            txt={styles.finishText}
            onPress={finishHandler}>
            {strings.finish}
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}
