import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  id: '',
  balance: '',
  email: '',
  phoneNumber: '',
  transactions: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails(state, action) {
      //   console.log(action);
      //   state.id = action.id;
      state.balance = action.payload.balance;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.transactions = action.payload.transactions;
    },
    setUserId(state, action) {
      state.id = action.payload;
    },
    setUserDefaultValues(state, action) {
      state.id = '';
      state.balance = '';
      state.email = '';
      state.phoneNumber = '';
      state.transactions = [];
    },

    // getUserBalance(state) {
    //   return state.balance;
    // },
    // getUserEmail(state) {
    //   return state.email;
    // },
    // getUserPhone(state) {
    //   return state.phoneNumber;
    // },
    // getUserTransactions(state) {
    //   return state.transactions;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUserDetails,
  setUserId,
  setUserDefaultValues,
  // getUserBalance,
  // getUserEmail,
  // getUserPhone,
  // getUserTransactions,
} = userSlice.actions;

export default userSlice.reducer;
