import { useEffect, useState } from "react";
import bgImg from "../assets/bg_image.jpg";
import "../css/login.css";
import Register from "./register";
import Signup from "./Signup";
import { useSelector } from "react-redux";
import { forgotSelector } from "../slices/forgotslice";
import Forgot from "./forgot";
import OptComponent from "./otpcomponent";
import { proceedSelector } from "../slices/proceedslice";
import { submitSelector } from "../slices/submitslice";
import ResetPassword from "./resetpassword";

const Login = () => {
  const [login, setLogin] = useState(true);
  const forgot = useSelector(forgotSelector);
  const proceed = useSelector(proceedSelector);
  const submit = useSelector(submitSelector);
  useEffect(() => {
    if (login) {
      document.querySelector(".log").style.color = "#D9EDBF";
      document.querySelector(".log").style.backgroundColor = "#3D3B40";
      document.querySelector(".reg").style.color = "#3D3B40";
      document.querySelector(".reg").style.backgroundColor = "#7E8E91";
    } else {
      document.querySelector(".log").style.color = "#3D3B40";
      document.querySelector(".log").style.backgroundColor = "#7E8E91";
      document.querySelector(".reg").style.color = "#D9EDBF";
      document.querySelector(".reg").style.backgroundColor = "#3D3B40";
    }
  }, [login, setLogin]);
  return (
    <>
      <div
        className="bg-cover flex"
        style={{
          backgroundImage: `url(${bgImg})`,
          height: "938px",
          width: "2048px",
        }}
      >
        
        <div className="login-main-div h-full ml-auto flex place-content-center place-items-center ">
          <div className="actual-login-main-div ">
            <div className="mx-12">
              <div className="login-name  flex text-4xl font-bold border-2 rounded-2xl border-slate-500 mt-12 mb-12">
                <div
                  className="log px-16 py-3 rounded-l-2xl cursor-pointer"
                  // style={{ width: "100px" }}
                  onClick={() => setLogin(true)}
                >
                  Login
                </div>
                <div
                  className="reg px-16 py-3 rounded-r-2xl cursor-pointer"
                  // style={{ width: "100px" }}
                  onClick={() => setLogin(false)}
                >
                  Register
                </div>
              </div>
              {login ? (
                forgot.value ? (
                  proceed.value ? (
                    submit.value ? (
                      <ResetPassword />
                    ) : (
                      <OptComponent />
                    )
                  ) : (
                    <Forgot />
                  )
                ) : (
                  <Signup />
                )
              ) : (
                <Register />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
