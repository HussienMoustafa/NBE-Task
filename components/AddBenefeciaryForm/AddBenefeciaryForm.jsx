import {Image, Pressable, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import strings from '../../assets/Language/AuthNames';
import {Formik} from 'formik';
import styles from './AddBenefeciaryForm.style';
import {storeBenefeciary} from '../../util/http';
import {useDispatch, useSelector} from 'react-redux';
import {
  addBenefeciary,
  refreshBenefeciariesList,
} from '../../redux/benefeciariesSlice';
import {useNavigation} from '@react-navigation/native';
import UploadImage from '../UploadImage/UploadImage';

export default function AddBenefeciaryForm() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.id);
  const [response, setResponse] = useState(null);

  return (
    <View>
      <UploadImage setResponse={setResponse} />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          bankBranch: '',
          accountNumber: '',
          phoneNumber: '',
          email: '',
        }}
        onSubmit={(values, actions) => {
          values['userId'] = userId;

          storeBenefeciary(values, response);
          // dispatch(addBenefeciary(values));
          // actions.resetForm();
          // dispatch(refreshBenefeciariesList());

          navigation.navigate('Verification', {
            name: `${values.firstName + ' ' + values.lastName} ${
              strings.beneficiaresadded
            }`,
          });
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <View style={styles.inputs}>
              <View style={styles.name}>
                <View>
                  <Input
                    placeholder={'ex : Hussien'}
                    style={styles.input}
                    value={values.firstName}
                    onChangeText={handleChange('firstName')}>
                    {strings.firstname}
                  </Input>
                </View>
                <View>
                  <Input
                    placeholder={'ex : Moustafa '}
                    style={styles.input}
                    value={values.lastName}
                    onChangeText={handleChange('lastName')}>
                    {strings.lastname}
                  </Input>
                </View>
              </View>
              <View>
                <Input
                  placeholder={'ex : 043 - Water Way Mall '}
                  value={values.bankBranch}
                  onChangeText={handleChange('bankBranch')}>
                  Bank Branch
                </Input>
              </View>
              <View>
                <Input
                  placeholder={'Write your account number here'}
                  value={values.accountNumber}
                  onChangeText={handleChange('accountNumber')}>
                  {strings.accountno}
                </Input>
              </View>
              <View>
                <Input
                  placeholder={'Write your phone number here'}
                  value={values.phoneNumber}
                  onChangeText={handleChange('phoneNumber')}>
                  {strings.phoneno}
                </Input>
              </View>
              <View>
                <Input
                  placeholder={strings.userPlaceHolder}
                  value={values.email}
                  onChangeText={handleChange('email')}>
                  Email
                </Input>
              </View>
            </View>
            <Button
              layout={styles.addButton}
              txt={styles.addText}
              onPress={handleSubmit}>
              {strings.addbeneficiar}
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
}
