import {configureStore} from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import benefeciariesReducer from './benefeciariesSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    benefeciaries: benefeciariesReducer,
    user: userReducer,
  },
});
