import {Pressable, StyleSheet, Text, View} from 'react-native';
import styles from './Footer.style';
import strings from '../../assets/Language/AuthNames';
import {useSelector} from 'react-redux';

export default function Footer() {
  const currentLanguage = useSelector(state => state.language.value);

  return (
    <View style={styles.footer}>
      <View
        style={[
          styles.optionsContainer,
          currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
        ]}>
        <Pressable>
          <Text style={styles.footerOptions}>{strings.contactUs}</Text>
        </Pressable>
        <Text
          style={[
            styles.dash,
            currentLanguage === 'ar' ? {color: 'rgba(246, 147, 33, 1)'} : null,
          ]}>
          {' - '}
        </Text>
        <Pressable>
          <Text style={styles.footerOptions}>{strings.faqs}</Text>
        </Pressable>
        <Text
          style={[
            styles.dash,
            currentLanguage === 'ar' ? {color: 'rgba(246, 147, 33, 1)'} : null,
          ]}>
          {' - '}
        </Text>
        <Pressable>
          <Text style={styles.footerOptions}>{strings.help}</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.copyright}>{strings.copyright}</Text>
      </View>
    </View>
  );
}
