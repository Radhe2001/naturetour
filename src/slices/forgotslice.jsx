import { createSlice } from "@reduxjs/toolkit";

export const forgotSliceReducer = createSlice({
  name: "forgot",
  initialState: {
    value: false,
  },
  reducers: {
    setForgot: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setForgot } = forgotSliceReducer.actions;
export const forgotSelector = (state) => state.forgot;
export default forgotSliceReducer.reducer;
