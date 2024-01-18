import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import { useSelector } from "react-redux";
import Login from "./components/login";
import { wantToLoginSelector } from "./slices/wanttologin";
import { isAdminSelector } from "./slices/admin";
import AdminAuth from "./components/adminauth";
function App() {
  const wantToLogin = useSelector(wantToLoginSelector);
  const isAdmin = useSelector(isAdminSelector);
  return (
    <>
      {isAdmin.value ? (
        <AdminAuth/>
      ) : wantToLogin.value ? (
        <div className="login-div-in-app">
          <Login />
        </div>
      ) : (
        <div className="header-div-in-app">
          <Header />
        </div>
      )}
    </>
  );
}

export default App;
