import { createSlice } from "@reduxjs/toolkit";

export const proceedSliceReducer = createSlice({
  name: "proceed",
  initialState: {
    value: false,
  },
  reducers: {
    setProceed: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setProceed } = proceedSliceReducer.actions;
export const proceedSelector = (state) => state.proceed;
export default proceedSliceReducer.reducer;
