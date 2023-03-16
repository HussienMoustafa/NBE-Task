import 'react-native-gesture-handler';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AirPay from './screens/AirPay/AirPay';
import Benefeciaries from './screens/Benefeciaries/Benefeciaries';
import Finish from './screens/Finish/Finish';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import MobileNumber from './screens/MobileNumber/MobileNumber';
import SetPassword from './screens/SetPassword/SetPassword';
import Splash from './screens/Splash/Splash';
import Transfer from './screens/Transfer/Transfer';
import Verification from './screens/Verification/Verification';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Atms from './screens/ATMs/Atms';
import AddBenefeciaries from './screens/AddBenefeciaries/AddBenefeciaries';
import ProfileCard from './components/ProfileCard/ProfileCard';
import BeneficiaryCard from './components/BenefeciaryCard/BeneficiaryCard';
import strings from './assets/Language/AuthNames';
import {store} from './redux/Store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {toggleLanguage} from './redux/languageSlice';
import BenefeciariesHistoryDisplay from './screens/BenefeciariesHistoryDisplay/BenefeciariesHistoryDisplay';
import {setUserDefaultValues, setUserId} from './redux/userSlice';
import {setBenefeciaries} from './redux/benefeciariesSlice';
import {SheetProvider} from 'react-native-actions-sheet';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function BenefeciariesNavs() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // statusBarHidden: true,
        // statusBarTranslucent: true,
      }}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Benefeciaries" component={Benefeciaries} />
      <Stack.Screen
        name="BenefeciariesHistory"
        component={BenefeciariesHistoryDisplay}
      />
      <Stack.Screen name="Add Benefeciary" component={AddBenefeciaries} />
      <Stack.Screen name="Verification" component={Verification} />
      {/* <Stack.Screen name="Set Password" component={SetPassword} />
      <Stack.Screen name="Finish" component={Finish} />
      <Stack.Screen name="Drawer" component={MyDrawer} /> */}
    </Stack.Navigator>
  );
}

function Main() {
  const currentLanguage = useSelector(state => state.language.value);

  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          transform: currentLanguage === 'ar' ? [{scaleX: -1}] : [{scaleX: 1}],
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // backgroundColor: 'black',
          // padding: 5,
          // justifyContent: 'space-between',
        },

        tabBarItemStyle: {
          transform: currentLanguage === 'ar' ? [{scaleX: -1}] : [{scaleX: 1}],
          borderRadius: 16,
          // width: 70,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          // marginLeft: 5,
          margin: 3,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          marginBottom: 10,
        },
        tabBarActiveTintColor: 'rgba(255, 255, 255, 1)',
        tabBarInactiveTintColor: 'rgba(183, 183, 183, 1)',
        tabBarActiveBackgroundColor: '#007236',
        tabBarInactiveBackgroundColor: '#F1F3FB',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <Image source={require('./assets/Images/home.png')} />
              ) : (
                <Image source={require('./assets/Images/home2.png')} />
              )}
            </View>
          ),
        }}
        name={strings.home}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <Image source={require('./assets/Images/send.png')} />
              ) : (
                <Image source={require('./assets/Images/send2.png')} />
              )}
            </View>
          ),
        }}
        name={strings.transfer}
        component={Transfer}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <Image source={require('./assets/Images/people.png')} />
              ) : (
                <Image source={require('./assets/Images/people2.png')} />
              )}
            </View>
          ),
        }}
        name={strings.beneficiaries}
        component={BenefeciariesNavs}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {focused ? (
                <Image source={require('./assets/Images/maps.png')} />
              ) : (
                <Image source={require('./assets/Images/maps2.png')} />
              )}
            </View>
          ),
        }}
        name={strings.atms}
        component={Atms}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              {/* <Image
                source={require('./assets/Images/airpay.png')}
                // style={{color: focused ? 'white' : 'black'}}
              /> */}
              {focused ? (
                <Image source={require('./assets/Images/airpay.png')} />
              ) : (
                <Image source={require('./assets/Images/airpay2.png')} />
              )}
            </View>
          ),
        }}
        name={strings.airpay}
        component={AirPay}
      />
    </Tab.Navigator>
  );
}

const CustomDrawerItem = ({label, icon, bgColor, txtColor}) => {
  const currentLanguage = useSelector(state => state.language.value);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  function logOutHandler() {
    dispatch(setBenefeciaries([]));
    dispatch(setUserDefaultValues());
    navigation.navigate('Login');
  }
  return (
    <View style={{marginBottom: 20}}>
      <Pressable
        style={{
          flexDirection: currentLanguage === 'en' ? 'row' : 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
          // backgroundColor: 'red',
        }}
        onPress={() => {
          label === strings.logout ? logOutHandler() : null;
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: currentLanguage === 'en' ? 'row' : 'row-reverse',
          }}>
          <View
            style={{
              marginRight: currentLanguage === 'en' ? 10 : 0,
              marginLeft: currentLanguage === 'ar' ? 10 : 0,
              width: 30,
              height: 30,
              borderRadius: 9,
              backgroundColor:
                label === strings.logout ? bgColor : 'rgba(0, 0, 0,0.2)',
              // opacity: 0.2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={icon} />
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: label === strings.logout ? txtColor : '#1B1B1B',
              }}>
              {label}
            </Text>
          </View>
        </View>
        {label === strings.darkmode ? (
          <View>
            <Image source={require('./assets/Images/darkModeWheel.png')} />
          </View>
        ) : null}
      </Pressable>
    </View>
  );
};

function CustomDrawerContent({navigation}) {
  const currentLanguage = useSelector(state => state.language.value);
  const dispatch = useDispatch();
  // const navigation = useNavigation();

  return (
    <DrawerContentScrollView
      style={
        {
          // padding: 10,
          // backgroundColor: 'yellow',
          // flex: 1,
          // borderTopRightRadius: 40,
          // borderBottomRightRadius: 40,
        }
      }>
      <View
        style={[
          styles.logo,
          currentLanguage === 'ar' ? {flexDirection: 'row-reverse'} : null,
        ]}>
        <Image source={require('./assets/Images/nbe2.png')} />
        <Pressable
          // style={{backgroundColor: 'red'}}
          onPress={() => {
            dispatch(toggleLanguage());
            navigation.closeDrawer();
          }}>
          <Image
            source={
              currentLanguage === 'en'
                ? require('./assets/Images/AR.png')
                : require('./assets/Images/EN.png')
            }
          />
        </Pressable>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          // backgroundColor: 'black',
          flex: 1,
        }}>
        <View style={{marginBottom: 70}}>
          <CustomDrawerItem
            label={strings.accountsummary}
            icon={require('./assets/Images/accountSummary.png')}
          />
          <CustomDrawerItem
            label={strings.certificates}
            icon={require('./assets/Images/certificates.png')}
          />
          <CustomDrawerItem
            label={strings.payment}
            icon={require('./assets/Images/paymentServices.png')}
          />
          <CustomDrawerItem
            label={strings.cardservices}
            icon={require('./assets/Images/cardsServices.png')}
          />
          <CustomDrawerItem
            label={strings.hardtoken}
            icon={require('./assets/Images/hardToken.png')}
          />
          <CustomDrawerItem
            label={strings.offers}
            icon={require('./assets/Images/offers.png')}
          />
          <CustomDrawerItem
            label={strings.customerservice}
            icon={require('./assets/Images/customerserv.png')}
          />
          <CustomDrawerItem
            label={strings.calculators}
            icon={require('./assets/Images/calculator.png')}
          />
          <CustomDrawerItem
            label={strings.darkmode}
            icon={require('./assets/Images/darkMode.png')}
          />
          {/* <View
            style={{
              // marginBottom: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'green',
            }}>
            <View style={{backgroundColor: 'red'}}>
              <CustomDrawerItem
                label={strings.darkmode}
                icon={require('./assets/Images/darkMode.png')}
              />
            </View>
            <View style={{backgroundColor: 'orange'}}>
              <Image source={require('./assets/Images/darkModeWheel.png')} />
            </View>
          </View> */}
        </View>
        <View>
          <CustomDrawerItem
            bgColor={'rgba(225, 7, 33, 0.2)'}
            label={strings.logout}
            icon={require('./assets/Images/logout.png')}
            txtColor={'#EB001B'}
          />
        </View>
      </View>

      <View style={{marginBottom: 5}}>
        <ProfileCard
          number={'+20 101 131 5412'}
          img={require('./assets/Images/mashaly.png')}>
          Ahmed Sami
        </ProfileCard>
      </View>
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  const currentLanguage = useSelector(state => state.language.value);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        // (currentLanguage === 'ar') ? ,
        drawerPosition: currentLanguage === 'ar' ? 'right' : 'left',

        drawerStyle: {
          backgroundColor: '#F1F3FB',
          width: 340,
          borderTopRightRadius: currentLanguage === 'en' ? 35 : 0,
          borderBottomRightRadius: currentLanguage === 'en' ? 35 : 0,
          borderTopLeftRadius: currentLanguage === 'ar' ? 35 : 0,
          borderBottomLeftRadius: currentLanguage === 'ar' ? 35 : 0,
          padding: 15,
        },
        // statusBarHidden: true,
        // statusBarTranslucent: true,
      }}
      // drawerActiveBackgroundColor="#007236"
      drawerContent={props => {
        return <CustomDrawerContent navigation={props.navigation} />;
      }}>
      <Drawer.Screen name="Main" component={Main} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar hidden={true} translucent={true} />
      <Provider store={store}>
        <SheetProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                // statusBarHidden: true,
                // statusBarTranslucent: true,
              }}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Mobile Number" component={MobileNumber} />
              <Stack.Screen name="Verification" component={Verification} />
              <Stack.Screen name="Set Password" component={SetPassword} />
              <Stack.Screen name="Finish" component={Finish} />
              <Stack.Screen name="Drawer" component={MyDrawer} />
            </Stack.Navigator>
          </NavigationContainer>
        </SheetProvider>
      </Provider>
      {/* <ScrollView> */}
      {/* <View></View> */}
      {/* </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    // padding: 15,
  },
  drawerItemPressed: {
    backgroundColor: '#007236',
    borderRadius: 14,
  },
});

export default App;
