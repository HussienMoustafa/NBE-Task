import {Image, View} from 'react-native';
import React, {useState} from 'react';
import TouchAndHold from '../../components/TouchAndHold/TouchAndHold';
import strings from '../../assets/Language/AuthNames';
import {DraxScrollView, DraxView} from 'react-native-drax';
import styles from './Draggable.style';
import Title from '../Title/Title';

export default function Draggable() {
  const [index, setIndex] = useState(-1);

  return (
    <View>
      <Title title={strings.cards} />
      <DraxScrollView
        contentContainerStyle={styles.ScrollView}
        horizontal={true}>
        <DraxView style={{marginBottom: 20, marginHorizontal: 10}} payload="0">
          <Image
            style={styles.img}
            source={require('../../assets/Images/CreditCard.png')}
          />
        </DraxView>
        <DraxView style={{marginBottom: 20, marginHorizontal: 10}} payload="1">
          <Image
            style={styles.img}
            source={require('../../assets/Images/creditCard2.png')}
          />
        </DraxView>
      </DraxScrollView>
      <DraxView
        style={{height: 150}}
        onReceiveDragEnter={({dragged: {payload}}) => {
          console.log(`hello ${payload}`);
        }}
        onReceiveDragExit={({dragged: {payload}}) => {
          console.log(`goodbye ${payload}`);
        }}
        onReceiveDragDrop={({dragged: {payload}}) => {
          console.log(`received ${payload}`);
          setIndex(parseInt(payload));
        }}>
        <TouchAndHold index={index} />
      </DraxView>
    </View>
  );
}
