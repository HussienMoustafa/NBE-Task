import {createSlice} from '@reduxjs/toolkit';
import strings from '../assets/Language/AuthNames';

const initialState = {
  value: 'en',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage(state) {
      if (state.value === 'en') {
        state.value = 'ar';
        strings.setLanguage('ar');
      } else {
        state.value = 'en';
        strings.setLanguage('en');
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {toggleLanguage} = languageSlice.actions;

export default languageSlice.reducer;
