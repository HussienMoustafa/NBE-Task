import axios from 'axios';

const API_KEY = ' AIzaSyBz9K57ijkMu_bl8xBlunLHKCAt8lPi_1I ';
let phoneNumber;

export function setPhoneNumber(phone) {
  phoneNumber = phone;
}

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  return response.data;
}

export async function createUser(password) {
  const email = phoneNumber + '@gmail.com';
  return await authenticate('signUp', email, password);
}
export async function login(email, password) {
  email += '@gmail.com';
  return await authenticate('signInWithPassword', email, password);
}
