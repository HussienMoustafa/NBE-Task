import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Title from '../Title/Title';
import ViewAll from '../ViewAll/ViewAll';
import styles from './Heading.style';
import {useSelector} from 'react-redux';

export default function Heading({title, viewTitle}) {
  const currentLanguage = useSelector(state => state.language.value);

  return (
    <View
      style={[
        styles.container,
        currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
      ]}>
      <Title title={title} />
      <ViewAll title={viewTitle} />
    </View>
  );
}
