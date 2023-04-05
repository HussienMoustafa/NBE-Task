import axios from 'axios';
import {getDownloadUrl} from '@react-native-firebase/storage';
import storage from '@react-native-firebase/storage';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

const BACKEND_URL = 'https://nbe-reactnative-default-rtdb.firebaseio.com';

async function uploadImage(response) {
  const reference = storage().ref(
    `/Images/BenefeciariesPictures/${response.assets[0].fileName}.png`,
  );
  const path = response.assets[0].uri;

  const task = await reference.putFile(path);

  const imgUrl = await storage()
    .ref(`/Images/BenefeciariesPictures/${response.assets[0].fileName}.png`)
    .getDownloadURL();

  return imgUrl;
}

export async function storeBenefeciary(benefeciaryData, res) {
  const response = await axios.get(BACKEND_URL + '/Users.json');
  let flag = false;
  for (const key in response.data) {
    if (response.data[key].phoneNumber === benefeciaryData['phoneNumber']) {
      flag = true;
      benefeciaryData['img'] = await uploadImage(res);
      benefeciaryData['deviceToken'] = response.data[key].deviceToken;
      axios.post(BACKEND_URL + '/Benefeciaries.json', benefeciaryData);
      return flag;
    }
    // beneficiares.push(benefeciary);
  }
  if (!flag) {
    Alert.alert(
      'This benefeciary is not a user in our bank',
      'Please add a valid benefeciary',
    );
  }
  return flag;
}

export const sendPushNotification = async deviceToken => {
  // console.log(deviceToken);
  const FIREBASE_API_KEY =
    'AAAAGae9jIs:APA91bGJOIiF2K7BqZ-HoNq3OmQ6lnUU1Vu2LdQ03phPxA5k2BaSQsNZ02RXxAa8rf9pISCVJgK6RjsYl_ufmKSCYRoScl6q2cg_x2xzEP6C9u5WnLjZoyjPu2Vj0Ut8urLEt8Nx1ctS';
  const message = {
    registration_ids: [
      deviceToken,
      // 'cAoU0XnyTgiraSDQAMd3FU:APA91bFuYqZmS5cDzx80_8K5pjlxiTEO5VnEqdA6du17AEo5bcCG74Og67bmjEXdlHu1XUKNjtoie87R2flHDdkzjnGjEKQff1_r1KpY9xj-alT6n3kw7RrJkJ3vpMLDk2fqHIXDW8UF',
      // 'd7JHTdVMT9G3MJ3NTQZWq6:APA91bFphqziqsPqeJxyy3ulxKmSVAqtKbrsNvFCQ1NmUmkuT2GDKfbka6koxfBigDUC9sNKuTSmlo5NZc-Kmrrk49Kiq2NKfAAey2pKd3--PAwqT5M3s8gQTtvZJR6sOCbi31eFVxps',
    ],
    notification: {
      title: 'Transfer',
      body: "You've received money",
      vibrate: 1,
      sound: 1,
      show_in_foreground: true,
      priority: 'high',
      content_available: true,
    },
    data: {
      title: 'Transfer',
      body: "You've received money",
      score: 50,
      wicket: 1,
    },
  };

  let headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: 'key=' + FIREBASE_API_KEY,
  });

  let response = await fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'POST',
    headers,
    body: JSON.stringify(message),
  });
  response = await response.json();
  // console.log(response);
};

export async function storeTransaction(
  transferTitle,
  amount,
  userId,
  benId,
  deviceToken,
) {
  // console.log(transferTitle, amount, userId, benId);
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + '-' + mm + '-' + yyyy;
  transactionData = {
    name: transferTitle,
    amount: amount,
    userId: userId,
    benId: benId,
    date: today,
  };
  axios
    .post(BACKEND_URL + '/Transactions.json', transactionData)
    .then(sendPushNotification(deviceToken));
}

export async function getTransactionsHistory(userId, benId) {
  const response = await axios.get(BACKEND_URL + '/Transactions.json');
  const transactions = [];
  for (const key in response.data) {
    // console.log(response.data);
    if (
      response.data[key].userId === userId &&
      response.data[key].benId === benId
    ) {
      // console.log(55);
      const transaction = {
        // id: key,
        name: response.data[key].name,
        amount: response.data[key].amount,
        date: response.data[key].date,
        // bankBranch: response.data[key].bankBranch,
        // phoneNumber: response.data[key].phoneNumber,
        // accountNumber: response.data[key].accountNumber,
        // userId: userId,
        // img: response.data[key].img,
        //   firstName: response.data[key].firstName,
      };
      transactions.push(transaction);
    }
  }
  // console.log(transactions);
  return transactions;
}

export async function getBenefeciaries(userId) {
  const response = await axios.get(BACKEND_URL + '/Benefeciaries.json');
  const beneficiares = [];
  for (const key in response.data) {
    if (response.data[key].userId === userId) {
      const benefeciary = {
        id: key,
        firstName: response.data[key].firstName,
        lastName: response.data[key].lastName,
        email: response.data[key].email,
        bankBranch: response.data[key].bankBranch,
        phoneNumber: response.data[key].phoneNumber,
        accountNumber: response.data[key].accountNumber,
        userId: userId,
        img: response.data[key].img,
        deviceToken: response.data[key].deviceToken,
        //   firstName: response.data[key].firstName,
      };
      beneficiares.push(benefeciary);
    }
  }
  return beneficiares;
}

export async function deleteBenefeciary(benefeciaryId, userId) {
  axios.delete(`${BACKEND_URL}/Benefeciaries/${benefeciaryId}.json`);
  const response = await axios.get(BACKEND_URL + '/Transactions.json');
  const transactions = [];

  for (const key in response.data) {
    if (
      response.data[key].userId === userId &&
      response.data[key].benId === benefeciaryId
    ) {
      transactions.push(key);
    }
  }

  // console.log(transactions);

  for (i in transactions) {
    // console.log(transactions[i]);
    axios.delete(`${BACKEND_URL}/Transactions/${transactions[i]}.json`);
  }
}

export async function storeUser(userData, id) {
  const email = userData.email;
  const phoneNumber = email.replace('@gmail.com', '');
  // checkToken = async () => {
  //   // console.log(hhhhhhh);
  //   const fcmToken = await messaging().getToken();
  //   while (!fcmToken) {
  //     // console.log(fcmToken);
  //   }
  //   return fcmToken;
  // };
  // const deviceToken = checkToken();
  // let deviceToken = '';
  // checkToken().then(console.log('hhh'));
  const deviceToken = await messaging().getToken();

  const transactions = [
    {
      name: 'Carrefour',
      date: '15-12-2021',
      amount: 250.21,
      img: 'https://firebasestorage.googleapis.com/v0/b/nbe-reactnative.appspot.com/o/Images%2FTransactions%2Fcarrefour.png?alt=media&token=7b2892ea-2cc1-418c-91b0-2a7fadafe379',
    },
    {
      name: 'Amazon',
      date: '15-12-2021',
      amount: 1250.21,
      img: 'https://firebasestorage.googleapis.com/v0/b/nbe-reactnative.appspot.com/o/Images%2FTransactions%2Famazon.png?alt=media&token=bc9d31e1-17e2-4fd6-8116-ce9308c32838',
    },
    {
      name: 'Jumia',
      date: '15-12-2021',
      amount: 2250.21,
      img: 'https://firebasestorage.googleapis.com/v0/b/nbe-reactnative.appspot.com/o/Images%2FTransactions%2Fjumia.png?alt=media&token=1d304683-9883-4ea0-bb25-093d33895d6d',
    },
    {
      name: 'Ikea',
      date: '15-12-2021',
      amount: 3250.21,
      img: 'https://firebasestorage.googleapis.com/v0/b/nbe-reactnative.appspot.com/o/Images%2FTransactions%2Fikea.png?alt=media&token=1ff2c8ea-4024-4746-8960-c646bb22185b',
    },
    {
      name: 'Carrefour',
      date: '15-12-2021',
      amount: 250.21,
      img: 'https://firebasestorage.googleapis.com/v0/b/nbe-reactnative.appspot.com/o/Images%2FTransactions%2Fcarrefour.png?alt=media&token=7b2892ea-2cc1-418c-91b0-2a7fadafe379',
    },
    {
      name: 'Amazon',
      date: '15-12-2021',
      amount: 1250.21,
      img: 'https://firebasestorage.googleapis.com/v0/b/nbe-reactnative.appspot.com/o/Images%2FTransactions%2Famazon.png?alt=media&token=bc9d31e1-17e2-4fd6-8116-ce9308c32838',
    },
    {
      name: 'Jumia',
      date: '15-12-2021',
      amount: 2250.21,
      img: 'https://firebasestorage.googleapis.com/v0/b/nbe-reactnative.appspot.com/o/Images%2FTransactions%2Fjumia.png?alt=media&token=1d304683-9883-4ea0-bb25-093d33895d6d',
    },
    {
      name: 'Ikea',
      date: '15-12-2021',
      amount: 3250.21,
      img: 'https://firebasestorage.googleapis.com/v0/b/nbe-reactnative.appspot.com/o/Images%2FTransactions%2Fikea.png?alt=media&token=1ff2c8ea-4024-4746-8960-c646bb22185b',
    },
  ];
  const data = {
    balance: 152360,
    email: email,
    phoneNumber: phoneNumber,
    deviceToken: deviceToken,
    // cards: [],
    // img,
    transactions,
  };
  axios.put(BACKEND_URL + `/Users/${id}/.json`, data);
  // console.log(data);
}
export async function getUserDetails(userId) {
  const response = await axios.get(BACKEND_URL + '/Users.json');

  for (const key in response.data) {
    if (key === userId) {
      const userDetail = {
        // id: key,
        balance: response.data[key].balance,
        email: response.data[key].email,
        phoneNumber: response.data[key].phoneNumber,
        // bankBranch: response.data[key].bankBranch,
        // phoneNumber: response.data[key].phoneNumber,
        transactions: response.data[key].transactions,
        //   firstName: response.data[key].firstName,
      };
      return userDetail;
    }
    // beneficiares.push(benefeciary);
  }
  // return beneficiares;
}
