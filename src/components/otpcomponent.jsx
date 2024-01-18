import { useEffect, useState } from "react";
import { setSubmit } from "../slices/submitslice";
import { useDispatch, useSelector } from "react-redux";
import { emailSelector } from "../slices/emailslice";
import axios from "axios";
const OptComponent = () => {
  const [otp, setOtp] = useState("");
  const [resOtp, setResOtp] = useState(0);
  const [access, setAccess] = useState(true);
  const dispatch = useDispatch();
  const email = useSelector(emailSelector);

  const submitOpt = (e) => {
    e.preventDefault();
    if (resOtp == otp) {
      console.log(resOtp, otp);
      dispatch(setSubmit());
    } else {
      console.log(resOtp, otp);
      setAccess(false);
    }
  };

  useEffect(() => {
    axios
      .post(`https://lazy-rose-shark-ring.cyclic.app/admin/otp/${email.value}`)
      .then((res) => {
        if (res.status === 200) {
          setResOtp(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <form className="grid gap-4">
          <input
            className="text-2xl text-slate-900 bg-cyan-300 px-4 py-3 mt-12 rounded-2xl "
            type="number"
            value={otp}
            name="otp"
            maxLength="6"
            onChange={(event) => {
              if (event.target.value.length <= 6) {
                setOtp(event.target.value);
              }
            }}
            placeholder="Enter OTP"
          ></input>
          <button
            className="w-full py-3 mt-6  text-3xl mb-4 font-bold rounded-3xl"
            style={{ backgroundColor: "#191919", color: "#F8FFD2" }}
            onClick={submitOpt}
          >
            Submit
          </button>

          {access ? (
            <div className="email-show mb-16 text-md text-slate-800">
              OTP has been sent to{" "}
              <div className="text-blue-900">{email.value}</div>
            </div>
          ) : (
            <div className="text-xl mb-10 text-slate-900 font-semibold">
              Otp didn't match
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default OptComponent;
