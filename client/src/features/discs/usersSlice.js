import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  usersList: [],
};

//placeholder
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.usersList.push(action.payload);
      console.log("Added a disc: " + action.payload);
    },
  },
});

export const { addDisc } = usersSlice.actions;

export const stateSelector = (state) => state.users;

export default usersSlice.reducer;
