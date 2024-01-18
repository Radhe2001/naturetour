import { combineReducers, configureStore } from "@reduxjs/toolkit";
import isLoggedInSliceReducer from "./slices/isloggedinslice";
import wantToLoginSliceReducer from "./slices/wanttologin";
import forgotSliceReducer from "./slices/forgotslice";
import proceedSliceReducer from "./slices/proceedslice";
import submitSliceReducer from "./slices/submitslice";
import emailSliceReducer from "./slices/emailslice";
import isAdminSliceReducer from "./slices/admin";

const rootReducer = combineReducers({
  isLoggedIn: isLoggedInSliceReducer,
  wantToLogin: wantToLoginSliceReducer,
  forgot: forgotSliceReducer,
  proceed: proceedSliceReducer,
  submit: submitSliceReducer,
  email: emailSliceReducer,
  isAdmin: isAdminSliceReducer,
});

export default configureStore({
  reducer: rootReducer,
});
