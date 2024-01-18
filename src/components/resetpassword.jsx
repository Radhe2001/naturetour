import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailSelector } from "../slices/emailslice";
import { setForgot } from "../slices/forgotslice";
import { setSubmit } from "../slices/submitslice";
import { setProceed } from "../slices/proceedslice";
import axios from "axios";
const Signup = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [mes, setMes] = useState("");
  const dispatch = useDispatch();
  const email = useSelector(emailSelector);

  const handleSetPassword = (e) => {
    e.preventDefault();
    if (password == rePassword) {
      axios
        .post(
          `https://lazy-rose-shark-ring.cyclic.app/admin/reset/${email.value}`,
          { password: password }
        )
        .then((res) => {
          if (res.status === 200) {
            dispatch(setForgot());
            dispatch(setSubmit());
            dispatch(setProceed());
          } else {
            setMes("please set your password again");
          }
        })
        .catch((err) => setMes("some unprecedented error"));
    } else {
      setMes("Password mismatch");
    }
  };
  return (
    <>
      <div>
        <form className="grid gap-4">
          <input
            className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
            type="text"
            value={password}
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter new password "
          ></input>
          <input
            className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 rounded-2xl "
            type="text"
            value={rePassword}
            name="rePassword"
            onChange={(event) => setRePassword(event.target.value)}
            placeholder="Re-enter new password "
          ></input>
          <button
            className="w-full py-3 mt-10 text-3xl font-bold rounded-3xl mb-4"
            style={{ backgroundColor: "#191919", color: "#F8FFD2" }}
            onClick={handleSetPassword}
          >
            Set Password
          </button>
          <h1 className="text-xl font-semibold mb-12 text-slate-900">{mes}</h1>
        </form>
      </div>
    </>
  );
};

export default Signup;
