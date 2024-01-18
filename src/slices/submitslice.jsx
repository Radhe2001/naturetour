import { createSlice } from "@reduxjs/toolkit";

export const submitSliceReducer = createSlice({
  name: "submit",
  initialState: {
    value: false,
  },
  reducers: {
    setSubmit: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setSubmit } = submitSliceReducer.actions;
export const submitSelector = (state) => state.submit;
export default submitSliceReducer.reducer;
