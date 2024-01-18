import { createSlice } from "@reduxjs/toolkit";

export const emailSliceReducer = createSlice({
  name: "email",
  initialState: {
    value: "none",
  },
  reducers: {
    setEmailForgot: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEmailForgot } = emailSliceReducer.actions;
export const emailSelector = (state) => state.email;
export default emailSliceReducer.reducer;
