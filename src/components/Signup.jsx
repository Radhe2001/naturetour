import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setForgot } from "../slices/forgotslice";
import { setIsLoggedIn } from "../slices/isloggedinslice";
import { setWantToLogin } from "../slices/wanttologin";
import Cookies from "js-cookie";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mes, setMes] = useState("");
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.length !== 0 && password.length !== 0) {
      axios
        .post("https://lazy-rose-shark-ring.cyclic.app/admin/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data) {
            setUserData(res.data);

            Cookies.set("id", res.data._id, {
              expires: 7,
            });
            dispatch(setIsLoggedIn(true));
            dispatch(setWantToLogin(false));
          } else {
            setMes("Invalid email or password");
            setTimeout(() => {
              setMes("");
            }, 5000);
          }
        })
        .catch((err) => {
          console.log(err);
          setMes("Please try again");
          setTimeout(() => {
            setMes("");
          }, 5000);
        });
    } else {
      setMes("Please fill all the fields");
      setTimeout(() => {
        setMes("");
      }, 5000);
    }
  };
  return (
    <>
      <div>
        <form className="grid gap-4">
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

          <div
            className="text-blue-900 text-lg  mb-2 cursor-pointer"
            onClick={() => dispatch(setForgot())}
          >
            Forgot password
          </div>
          <h1 className="text-xl font-semibold mb-8">{mes}</h1>
        </form>
      </div>
    </>
  );
};

export default Signup;
