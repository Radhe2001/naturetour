import { createSlice } from "@reduxjs/toolkit";

export const isLoggedInSliceReducer = createSlice({
  name: "isLoggedIn",
  initialState: {
    value: false,
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIsLoggedIn } = isLoggedInSliceReducer.actions;
export const isLoggedInLoginSelector = (state) => state.isLoggedIn;
export default isLoggedInSliceReducer.reducer;
