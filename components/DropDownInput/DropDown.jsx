import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import strings from '../../assets/Language/AuthNames';
import styles from './DropDown.style';
import {Picker} from '@react-native-picker/picker';
const Item = Picker.Item;
export default function DropDown({
  children,
  style,
  data,
  // value,
  onChangeText,
}) {
  const currentLanguage = useSelector(state => state.language.value);
  const [value, setValue] = useState(data[0]);
  // console.log(value);

  function activateBorder() {
    setBorderActive(true);
  }
  function deactivateBorder() {
    setBorderActive(false);
  }
  function handleChange(itemValue) {
    // console.log(itemValue);
    setValue(itemValue);
    onChangeText(itemValue);
  }
  // function end() {
  //   setFinish(true);
  // }
  const [borderActive, setBorderActive] = useState(false);
  // const [finish, setFinish] = useState(false);
  // console.log(data);
  list = () => {
    return data.map(x => {
      return <Picker.Item label={x} key={x} value={x} />;
    });
  };

  return (
    <View
      style={[
        styles.input,
        style,
        borderActive ? styles.borderActive : null,
        // currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
      ]}>
      {/* <View style={styles.field}> */}
      <View>
        <Text
          style={[
            styles.title,
            // value !== '' && styles.titleFinished,
            borderActive && styles.titleActive,
          ]}>
          {children}
        </Text>
      </View>
      <View style={{flex: 1}}>
        {/* <TextInput
            style={[
              styles.txtInput,
              borderActive && styles.txtInputActive,
              value !== '' && styles.txtInputActive,
            ]}
            placeholder={placeholder}
            blurOnSubmit={false}
            // onPressOut={end}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
          /> */}
        <Picker
          onFocus={activateBorder}
          onBlur={deactivateBorder}
          // style={{padding: 0}}
          style={[
            styles.txtInput,
            // borderActive && styles.txtInputActive,
            // value !== '' && styles.txtInputActive,
          ]}
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => handleChange(itemValue)}>
          {list()}
        </Picker>
      </View>
      {/* </View> */}
    </View>
  );
}
