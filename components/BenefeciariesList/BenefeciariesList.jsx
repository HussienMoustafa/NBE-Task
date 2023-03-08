import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import TopBar from '../TopBar/TopBar';
import AddBenefeciary from '../AddBenefeciary/AddBenefeciary';
import ShowBenefeciaries from '../ShowBenefeciaries/ShowBenefeciaries';
import BeneficiaryCard from '../BenefeciaryCard/BeneficiaryCard';
import BenefeciariesTopBar from '../BenefeciariesTopBar/BenefeciariesTopBar';
import styles from './BenefeciariesList.style';
import {useSelector} from 'react-redux';

export default function BenefeciariesList(
  {
    // changeDisplayed,
    // benefeciaries
  },
) {
  const benefeciaries = useSelector(state => state.benefeciaries.value);
  // console.log(benefeciaries);

  return (
    <View style={styles.container}>
      {/* <TopBar /> */}
      {/* <View style={styles.header}>
        <View>
          <Text style={styles.benefeciaries}>Benefeciaries</Text>
        </View>
        {/* <View style={styles.show}>
          <ShowBenefeciaries />
          <AddBenefeciary
            bgColor={'rgba(255, 255, 255, 1)'}
            addImg={require('../../assets/Images/add.png')}
            txtColor={'rgba(0, 114, 54, 1)'}
          />
        </View> */}
      {/* </View> */}
      {/* <BenefeciariesTopBar /> */}
      {/* <ScrollView>
        <BeneficiaryCard
          img={require('../../assets/Images/jasmine.png')}
          number={'+20 123 456 7890'}
          savings={'802,828.61'}
          changeDisplayed={changeDisplayed}>
          Jasmine Robert
        </BeneficiaryCard>
        <BeneficiaryCard
          img={require('../../assets/Images/mashaly.png')}
          number={'+20 123 456 7890'}
          savings={'802,828.61'}>
          Ahmad Sami
        </BeneficiaryCard>
        <BeneficiaryCard
          img={require('../../assets/Images/jasmine.png')}
          number={'+20 123 456 7890'}
          savings={'802,828.61'}>
          Mike Spectre
        </BeneficiaryCard>
        <BeneficiaryCard
          img={require('../../assets/Images/jasmine.png')}
          number={'+20 123 456 7890'}
          savings={'802,828.61'}>
          Luis Litt
        </BeneficiaryCard>
        <BeneficiaryCard
          img={require('../../assets/Images/jasmine.png')}
          number={'+20 123 456 7890'}
          savings={'802,828.61'}>
          Dona White
        </BeneficiaryCard>
        <BeneficiaryCard
          img={require('../../assets/Images/jasmine.png')}
          number={'+20 123 456 7890'}
          savings={'802,828.61'}>
          Dona White
        </BeneficiaryCard>
        <BeneficiaryCard
          img={require('../../assets/Images/jasmine.png')}
          number={'+20 123 456 7890'}
          savings={'802,828.61'}>
          Dona White
        </BeneficiaryCard>
        {/* <BeneficiaryCard
          img={require('../../assets/Images/jasmine.png')}
          number={'+20 123 456 7890'}
          savings={'802,828.61'}>
          Dona White
        </BeneficiaryCard> */}
      {/* </ScrollView> */}
      <FlatList
        contentContainerStyle={styles.flatList}
        // numColumns={4}
        data={benefeciaries}
        renderItem={itemData => {
          return (
            // <View style={styles.card}>
            //   <UserCard
            //     changeDisplayed={changeDisplayed}
            //     // img={itemData.item.img}
            //     img={require('../../assets/Images/ayman.png')}
            //     username={
            //       itemData.item.firstName + ' ' + itemData.item.lastName
            //     }
            //   />
            // </View>
            <BeneficiaryCard
              // img={}
              benefeciar={itemData.item}
              // savings={''}
            />

            // </BeneficiaryCard>
          );
        }}
        // keyExtractor={itemData => {
        //   return itemData.item.id;
        // }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
}
