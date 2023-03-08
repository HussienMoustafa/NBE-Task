import {ScrollView} from 'react-native';
import React, {useState} from 'react';
import TopBar from '../../components/TopBar/TopBar';
import AirPayButton from '../../components/AirPayButton/AirPayButton';
import styles from './AirPay.style';
import strings from '../../assets/Language/AuthNames';
import AirPayPayment from '../../components/AirPayPayment/AirPayPayment';
import {AirPayFail, AirPaySuccess} from '../../assets/Images/AirPay/AirPay';
import {DraxProvider} from 'react-native-drax';
import Draggable from '../../components/Draggable/Draggable';

export default function AirPay() {
  function submit() {
    showSuccessPayment(true);
    // showFailedPayment(true);
  }
  function close() {
    showSuccessPayment(false);
    showFailedPayment(false);
  }
  const [successPayment, showSuccessPayment] = useState(false);
  const [failedPayment, showFailedPayment] = useState(false);

  return (
    <DraxProvider style={styles.container}>
      <ScrollView>
        <TopBar />
        <Draggable />
        <AirPayButton
          layout={styles.nextButton}
          txt={styles.nextText}
          submit={submit}>
          {strings.paynow}
        </AirPayButton>

        {successPayment ? (
          <AirPayPayment
            visible={successPayment}
            close={close}
            img={AirPaySuccess}
            success={true}
            price={'5,542.0'}>
            Mission Complete
          </AirPayPayment>
        ) : null}
        {failedPayment ? (
          <AirPayPayment
            visible={failedPayment}
            close={close}
            img={AirPayFail}
            success={false}
            price={'5,542.0'}>
            Ooops...
          </AirPayPayment>
        ) : null}
      </ScrollView>
    </DraxProvider>
  );
}
