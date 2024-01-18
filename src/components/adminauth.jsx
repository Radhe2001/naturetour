import { useState } from "react";
import Admin from "./admin";
import "../css/admin.css";
import axios from "axios";
const AdminAuth = () => {
  const [admin, setAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mes, setMes] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.length !== 0 && password.length !== 0) {
      axios
        .post("https://lazy-rose-shark-ring.cyclic.app/admin/adminlogin", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            setAdmin(true);
          } else {
            setMes("Incorrect credentials");
            setTimeout(() => {
              setMes("");
            }, 5000);
          }
        })
        .catch((err) => console.log(err));
    } else {
      setMes("Please fill all the fields first");
    }
  };
  return (
    <>
      {admin ? (
        <Admin />
      ) : (
        <div className="main-admin-form-login-div flex place-content-center place-items-center">
          <div className="form-admin-div py-16 px-12 rounded-3xl shadow-2xl">
            <form className="grid gap-4">
              <div className="mb-8 text-4xl font-bold text-slate-600 ">
                Admin Login
              </div>
              <input
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="email"
                value={email}
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
              ></input>
              <input
                className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
                type="password"
                value={password}
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password "
              ></input>
              <button
                className="w-full py-3 mt-10 text-3xl font-bold rounded-3xl"
                style={{ backgroundColor: "#191919", color: "#F8FFD2" }}
                onClick={handleLogin}
              >
                Login
              </button>
              <h1 className="text-xl font-semibold mt-8">{mes}</h1>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminAuth;
