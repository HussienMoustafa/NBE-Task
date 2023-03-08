import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [],
  refresh: 0,
};

export const benefeciariesSlice = createSlice({
  name: 'benefeciaries',
  initialState,
  reducers: {
    getBenefeciaries(state) {
      return state.value;
    },
    addBenefeciary(state, action) {
      state.value.push(action.payload);
    },
    setBenefeciaries(state, action) {
      state.value = action.payload;
    },
    refreshBenefeciariesList(state, action) {
      state.refresh++;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getBenefeciaries,
  setBenefeciaries,
  addBenefeciary,
  refreshBenefeciariesList,
} = benefeciariesSlice.actions;

export default benefeciariesSlice.reducer;
