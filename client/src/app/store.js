import { configureStore } from '@reduxjs/toolkit';
import discsReducer from '../features/discs/discsSlice';
import userReducer from '../features/discs/userSlice';

export const store = configureStore({
  reducer: {
    discs: discsReducer,
    user: userReducer
  },
});
