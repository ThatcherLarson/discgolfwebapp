import { configureStore } from '@reduxjs/toolkit';
import discsReducer from '../features/discs/discsSlice';

export const store = configureStore({
  reducer: {
    discs: discsReducer,
  },
});
