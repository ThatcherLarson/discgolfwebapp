import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  discsList: [],
  status: 'idle',
};

export const discsSlice = createSlice({
  name: 'discs',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addDisc: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.discsList.concat(action.payload)
      console.log("Added a disc!")
    },
    removeDisc: (state, action) => {
      console.log("Removed a disc!")
      return state.discsList.filter((disc) => disc.id !== action.payload)
    },
    getDiscs: (state, action) => {
      console.log("Getting list of Discs")
      state.discsList = action.payload
    },
  },
});

export const { addDisc, removeDisc, getDiscs} = discsSlice.actions;

export const discsSelector = state => state.discs


export default discsSlice.reducer;
