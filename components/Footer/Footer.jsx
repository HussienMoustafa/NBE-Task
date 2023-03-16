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
      {/* <View>
        <Text style={styles.copyright}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, error
          sed, veniam voluptas eveniet corporis, eius praesentium quam modi
          ipsum quod saepe sapiente! Consequatur quia in illum tempore iste
          culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          vitae minima non. Ad explicabo nihil tempora architecto itaque sequi
          eaque mollitia praesentium cumque, fuga iure dolor, sed autem omnis
          nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          voluptatibus voluptate hic voluptatum velit sapiente, amet
          consequuntur alias officia nihil, cumque quam repudiandae. Eveniet ad
          voluptate minus quasi assumenda esse.
        </Text>
      </View> */}
    </View>
  );
}
