import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './PasswordInput.style';
import {useSelector} from 'react-redux';

export default function PasswordInput({
  children,
  img,
  placeholder,
  style,
  value,
  onChangeText,
  keyboardType,
  toggle,
  setTogglePassword,
}) {
  const currentLanguage = useSelector(state => state.language.value);

  function activateBorder() {
    setBorderActive(true);
  }
  function deactivateBorder() {
    setBorderActive(false);
  }
  function end() {
    setFinish(true);
  }
  const [borderActive, setBorderActive] = useState(false);
  const [finish, setFinish] = useState(false);
  return (
    <View
      style={[
        styles.input,
        style,
        borderActive ? styles.borderActive : null,
        currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
      ]}>
      {img && (
        <View>
          <Image
            style={[
              styles.img,
              currentLanguage === 'ar'
                ? {marginRight: 0, marginLeft: 18}
                : null,
            ]}
            source={img}
          />
        </View>
      )}
      <View style={styles.field}>
        <View>
          <Text
            style={[
              styles.title,
              value !== '' && styles.titleFinished,
              borderActive && styles.titleActive,
            ]}>
            {children}
          </Text>
        </View>
        <View>
          <TextInput
            onFocus={activateBorder}
            onBlur={deactivateBorder}
            style={[
              styles.txtInput,
              borderActive && styles.txtInputActive,
              value !== '' && styles.txtInputActive,
            ]}
            placeholder={placeholder}
            blurOnSubmit={false}
            secureTextEntry={!toggle}
            // onPressOut={end}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
          />
        </View>
      </View>

      <View>
        <Pressable onPress={() => setTogglePassword(!toggle)}>
          <Image
            source={
              toggle
                ? require('../../assets/Images/eye2.png')
                : require('../../assets/Images/eye.png')
            }
          />
        </Pressable>
      </View>
    </View>
  );
}
