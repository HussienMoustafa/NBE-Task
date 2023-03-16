import {
  Image,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import strings from '../../assets/Language/AuthNames';
import styles from './FingerPrint.style';
import ActionSheet, {registerSheet} from 'react-native-actions-sheet';
import {useRef} from 'react';

export default function FingerPrint(props) {
  const currentLanguage = useSelector(state => state.language.value);
  const actionSheetRef = useRef(null);

  return (
    <ActionSheet
      ref={actionSheetRef}
      // id={props.sheetId}
      containerStyle={styles.innerContainer}>
      <View>
        <Text style={styles.header}>{strings.fingerPrint}</Text>
        <Text style={styles.log}>{props.payload.title}</Text>
        <View style={styles.fingerprint}>
          <Image source={require('../../assets/Images/FingerPrintModal.png')} />
          <Text style={styles.touch}>{strings.touch}</Text>
        </View>
        <Pressable
          onPress={() => {
            // props.closeFingerPrint;
            actionSheetRef.current?.hide();
          }}>
          <Text
            style={[
              styles.cancel,
              currentLanguage === 'ar' ? {alignSelf: 'flex-start'} : null,
            ]}>
            {strings.cancel}
          </Text>
        </Pressable>
      </View>
    </ActionSheet>
    // <Modal
    //   visible={props.visible}
    //   // animationType={'slide'}
    //   transparent={true}
    //   statusBarTranslucent={true}>
    //   {/* <StatusBar hidden={true} barStyle="dark-content" /> */}
    //   {/* <View style={styles.container}> */}
    //   <TouchableOpacity
    //     onPressOut={props.closeFingerPrint}
    //     style={styles.container}>
    //     <TouchableWithoutFeedback>
    //       <View style={styles.innerContainer}>
    //         <Text style={styles.header}>{strings.fingerPrint}</Text>
    //         <Text style={styles.log}>{props.title}</Text>
    //         <View style={styles.fingerprint}>
    //           <Image
    //             source={require('../../assets/Images/FingerPrintModal.png')}
    //           />
    //           <Text style={styles.touch}>{strings.touch}</Text>
    //         </View>
    //         <Pressable onPress={props.closeFingerPrint}>
    //           <Text
    //             style={[
    //               styles.cancel,
    //               currentLanguage === 'ar' ? {alignSelf: 'flex-start'} : null,
    //             ]}>
    //             {strings.cancel}
    //           </Text>
    //         </Pressable>
    //       </View>
    //     </TouchableWithoutFeedback>
    //     {/* </View> */}
    //   </TouchableOpacity>
    // </Modal>
  );
}
registerSheet('fingerprint', FingerPrint);
