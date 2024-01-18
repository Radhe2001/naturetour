import { createSlice } from "@reduxjs/toolkit";

export const wantToLoginSliceReducer = createSlice({
  name: "wantToLogin",
  initialState: {
    value: false,
  },
  reducers: {
    setWantToLogin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setWantToLogin } = wantToLoginSliceReducer.actions;
export const wantToLoginSelector = (state) => state.wantToLogin;
export default wantToLoginSliceReducer.reducer;
