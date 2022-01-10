import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  userInfo: [],
  bagDiscs: []
};

//placeholder - need to decide what states we want to keep here
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
      console.log("Added user: " + action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export const userStateSelector = (state) => state.user.userInfo;

export default userSlice.reducer;
