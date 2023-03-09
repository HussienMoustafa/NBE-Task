import {
  Image,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef} from 'react';
// import BeneficiaryCard from './BeneficiaryCard';
import UserInfo from '../UserInfo/UserInfo';
import ActionSheet, {
  registerSheet,
  SheetManager,
} from 'react-native-actions-sheet';
import styles from './BenefeciarModal.style';
import {deleteBenefeciary} from '../../util/http';
import strings from '../../assets/Language/AuthNames';
import {
  deleteIcon,
  edit,
  transfermoney,
} from '../../assets/Images/UserCard/UserCard';
import {fingerprint2} from '../../assets/Images/FingerPrint/FingerPrint';
import {useNavigation} from '@react-navigation/native';
import {useRouter} from 'react-native-actions-sheet/dist/src/hooks/use-router';
// {
//   // userOptionsVisible,
//   // closeUserOptions,
//   // benefeciar,
// }
export default function BenefeciarModal(props) {
  const benefeciar = props.payload.benefeciar;
  // const navigation = useNavigation();
  // const navigation = useNavigation();
  const firstName = benefeciar.firstName;
  const actionSheetRef = useRef(null);
  const navigation = props.payload.navigation;

  function transferHandler() {
    actionSheetRef.current?.hide();

    // closeUserOptions();
    // act.navigate(strings.transfer);
    navigation.navigate(strings.transfer);
  }
  function openFingerPrint() {
    // setFingerPrintVisible(true);
    SheetManager.show('fingerprint', {
      payload: {title: strings.transfer},
    });
  }

  function deleteBenefeciaryHandler() {
    // console.log(55555);
    deleteBenefeciary(benefeciar.id);
    // closeUserOptions();
    actionSheetRef.current?.hide();
    navigation.navigate('Benefeciaries');
    // console.log(55);

    // navigation.reset();
    // navigation.navigate('Main', {screen: strings.home});

    // navigation.goBack();
  }
  // const actionSheetRef = useRef < ActionSheetRef > null;
  return (
    <ActionSheet ref={actionSheetRef} containerStyle={styles.innerContainer}>
      <View>
        <UserInfo benefeciar={benefeciar} />
        <View>
          <Pressable style={styles.transfer} onPress={transferHandler}>
            <View style={styles.transferTxt}>
              <View style={styles.img}>
                <Image
                  style={styles.transfermoneyImg}
                  source={{uri: transfermoney}}
                />
              </View>
              <View>
                <View>
                  <Text style={styles.choiceTitle}>Transfer</Text>
                </View>
                <View>
                  <Text style={styles.choiceDescription}>
                    Transfer money to {firstName}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <Pressable style={styles.fingerprint} onPress={openFingerPrint}>
                <Image
                  style={styles.fingerprintImg}
                  source={{uri: fingerprint2}}
                />
              </Pressable>
            </View>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.choice}>
            <View style={styles.img}>
              <Image style={styles.editImg} source={{uri: edit}} />
            </View>
            <View>
              <View>
                <Text style={styles.choiceTitle}>Edit</Text>
              </View>
              <View>
                <Text style={styles.choiceDescription}>
                  Edit {firstName} data
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
        <View>
          <Pressable style={styles.choice} onPress={deleteBenefeciaryHandler}>
            <View style={styles.img}>
              <Image style={styles.deleteImg} source={{uri: deleteIcon}} />
            </View>
            <View>
              <View>
                <Text style={styles.choiceTitle}>Delete Ahmad</Text>
              </View>
              <View>
                <Text style={styles.choiceDescription}>
                  Delete {firstName} & his/her transactions history
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </ActionSheet>
    // <Modal
    //   visible={userOptionsVisible}
    //   // animationType={'slide'}
    //   transparent={true}
    //   statusBarTranslucent={true}>
    //   {/* <ActionSheet ref={actionSheetRef}> */}
    //   {/* <StatusBar hidden={true} barStyle="dark-content" /> */}
    //   {/* <View style={styles.container}> */}
    //   <TouchableOpacity onPressOut={closeUserOptions} style={styles.container}>
    //     <TouchableWithoutFeedback>
    //       <View style={styles.innerContainer}>
    //         <UserInfo benefeciar={benefeciar} />
    //         <View>
    //           <Pressable style={styles.transfer} onPress={transferHandler}>
    //             <View style={styles.transferTxt}>
    //               <View style={styles.img}>
    //                 <Image
    //                   style={styles.transfermoneyImg}
    //                   source={{uri: transfermoney}}
    //                 />
    //               </View>
    //               <View>
    //                 <View>
    //                   <Text style={styles.choiceTitle}>Transfer</Text>
    //                 </View>
    //                 <View>
    //                   <Text style={styles.choiceDescription}>
    //                     Transfer money to {firstName}
    //                   </Text>
    //                 </View>
    //               </View>
    //             </View>
    //             <View>
    //               <Pressable
    //                 style={styles.fingerprint}
    //                 onPress={openFingerPrint}>
    //                 <Image
    //                   style={styles.fingerprintImg}
    //                   source={{uri: fingerprint2}}
    //                 />
    //               </Pressable>
    //             </View>
    //           </Pressable>
    //         </View>
    //         <View>
    //           <Pressable style={styles.choice}>
    //             <View style={styles.img}>
    //               <Image style={styles.editImg} source={{uri: edit}} />
    //             </View>
    //             <View>
    //               <View>
    //                 <Text style={styles.choiceTitle}>Edit</Text>
    //               </View>
    //               <View>
    //                 <Text style={styles.choiceDescription}>
    //                   Edit {firstName} data
    //                 </Text>
    //               </View>
    //             </View>
    //           </Pressable>
    //         </View>
    //         <View>
    //           <Pressable
    //             style={styles.choice}
    //             onPress={deleteBenefeciaryHandler}>
    //             <View style={styles.img}>
    //               <Image style={styles.deleteImg} source={{uri: deleteIcon}} />
    //             </View>
    //             <View>
    //               <View>
    //                 <Text style={styles.choiceTitle}>Delete Ahmad</Text>
    //               </View>
    //               <View>
    //                 <Text style={styles.choiceDescription}>
    //                   Delete {firstName} & his/her transactions history
    //                 </Text>
    //               </View>
    //             </View>
    //           </Pressable>
    //         </View>
    //       </View>
    //     </TouchableWithoutFeedback>
    //   </TouchableOpacity>

    //   {/* </View> */}
    //   {/* </ActionSheet> */}
    // </Modal>
  );
}

registerSheet('benefeciarModal', BenefeciarModal);
