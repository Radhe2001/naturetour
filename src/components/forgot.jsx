import { useState } from "react";
import { useDispatch } from "react-redux";
import { setProceed } from "../slices/proceedslice";
import { setEmailForgot } from "../slices/emailslice";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEmailForgot(email));
    dispatch(setProceed());
  };
  return (
    <>
      <div>
        <form className="grid gap-4">
          <input
            className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 mt-12 rounded-2xl "
            type="email"
            value={email}
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter registered email"
          ></input>
          <button
            className="w-full py-3 mt-6 mb-4 text-3xl font-bold rounded-3xl"
            style={{ backgroundColor: "#191919", color: "#F8FFD2" }}
            onClick={handleSubmit}
          >
            Proceed
          </button>

          <div
            className="text-xl text-slate-800 mb-16"
            style={{ visibility: "hidden" }}
          >
            This email is not registered
          </div>
        </form>
      </div>
    </>
  );
};

export default Forgot;
