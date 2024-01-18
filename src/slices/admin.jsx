import { createSlice } from "@reduxjs/toolkit";

export const isAdminSliceReducer = createSlice({
  name: "isAdmin",
  initialState: {
    value: false,
  },
  reducers: {
    setIsAdmin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIsAdmin } = isAdminSliceReducer.actions;
export const isAdminSelector = (state) => state.isAdmin;
export default isAdminSliceReducer.reducer;
