import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddBenefeciary from '../AddBenefeciary/AddBenefeciary';
import ShowBenefeciaries from '../ShowBenefeciaries/ShowBenefeciaries';
import styles from './BenefeciariesTopBar.style';
import strings from '../../assets/Language/AuthNames';
import {useSelector} from 'react-redux';
import {add} from '../../assets/Images/AddButton/Add';
export default function BenefeciariesTopBar({changeDisplay}) {
  const currentLanguage = useSelector(state => state.language.value);

  return (
    // <View style={styles.show}>
    //   <ShowBenefeciaries />
    //   <AddBenefeciary
    //     bgColor={'rgba(255, 255, 255, 1)'}
    //     addImg
    //     txtColor={'rgba(0, 114, 54, 1)'}
    //   />
    // </View>
    <View
      style={[
        styles.header,
        currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
      ]}>
      <View>
        <Text style={styles.benefeciaries}>{strings.beneficiaries}</Text>
      </View>
      <View
        style={[
          styles.show,
          currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
        ]}>
        <ShowBenefeciaries changeDisplay={changeDisplay} />
        <AddBenefeciary
          bgColor={'rgba(255, 255, 255, 1)'}
          // addImg={require('../../assets/Images/add.png')}
          addImg={add}
          txtColor={'rgba(0, 114, 54, 1)'}
        />
      </View>
      {/* <BenefeciariesTopBar /> */}
    </View>
  );
}
