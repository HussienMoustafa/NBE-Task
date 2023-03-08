import axios from 'axios';
import {getDownloadUrl} from '@react-native-firebase/storage';
import storage from '@react-native-firebase/storage';

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

export async function storeBenefeciary(benefeciaryData, response) {
  benefeciaryData['img'] = await uploadImage(response);

  axios.post(BACKEND_URL + '/Benefeciaries.json', benefeciaryData);
}

export async function storeTransaction(transferTitle, amount, userId, benId) {
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
  axios.post(BACKEND_URL + '/Transactions.json', transactionData);
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
        //   firstName: response.data[key].firstName,
      };
      beneficiares.push(benefeciary);
    }
  }
  return beneficiares;
}

export function deleteBenefeciary(benefeciaryId) {
  axios.delete(`${BACKEND_URL}/Benefeciaries/${benefeciaryId}.json`);
}

export function storeUser(userData, id) {
  const email = userData.email;
  const phoneNumber = email.replace('@gmail.com', '');

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
