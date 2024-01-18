import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { setIsLoggedIn } from "../slices/isloggedinslice";
import { useSelector, useDispatch } from "react-redux";
import { isLoggedInLoginSelector } from "../slices/isloggedinslice";
import Cookies from "js-cookie";

import { wantToLoginSelector, setWantToLogin } from "../slices/wanttologin";

const Navbar = () => {
  const [home, setHome] = useState(0);

  const wantToLogin = useSelector(wantToLoginSelector);

  useEffect(() => {
    if (home === 0) {
      document.querySelector(".home").style.color = "#2E97A7";
    }
  }, [home, setHome]);
  const isLoggedIn = useSelector(isLoggedInLoginSelector);
  const dispatch = useDispatch();

  return (
    <>
      <div className="parent-nav-div w-full grid place-items-center px-3 py-6">
        <div className="nav-div flex place-content-center">
          <div className="app-name text-5xl text-cyan-300 px-4 font-semibold">
            NatureTour
          </div>
          <div className="flex text-2xl font-semibold py-1 gap-6">
            <NavLink
              to="/"
              onClick={() => {
                document.querySelector(".home").style.color = "#2E97A7";
                document.querySelector(".about").style.color = "white";
                document.querySelector(".destination").style.color = "white";
                document.querySelector(".blog").style.color = "white";
                document.querySelector(".contact").style.color = "white";
                setHome(1);
              }}
              className="home text-white"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => {
                document.querySelector(".home").style.color = "white";
                document.querySelector(".about").style.color = "#2E97A7";
                document.querySelector(".destination").style.color = "white";
                document.querySelector(".blog").style.color = "white";
                document.querySelector(".contact").style.color = "white";
                setHome(1);
              }}
              className="about text-white"
            >
              About
            </NavLink>
            <NavLink
              to="/destination"
              onClick={() => {
                document.querySelector(".home").style.color = "white";
                document.querySelector(".about").style.color = "white";
                document.querySelector(".destination").style.color = "#2E97A7";
                document.querySelector(".blog").style.color = "white";
                document.querySelector(".contact").style.color = "white";
                setHome(1);
              }}
              className="destination text-white"
            >
              Destination
            </NavLink>
            <NavLink
              to="/blog"
              onClick={() => {
                document.querySelector(".home").style.color = "white";
                document.querySelector(".about").style.color = "white";
                document.querySelector(".destination").style.color = "white";
                document.querySelector(".blog").style.color = "#2E97A7";
                document.querySelector(".contact").style.color = "white";
                setHome(1);
              }}
              className="blog text-white"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => {
                document.querySelector(".home").style.color = "white";
                document.querySelector(".about").style.color = "white";
                document.querySelector(".destination").style.color = "white";
                document.querySelector(".blog").style.color = "white";
                document.querySelector(".contact").style.color = "#2E97A7";
                setHome(1);
              }}
              className="contact text-white"
            >
              Contact
            </NavLink>
          </div>
          <NavLink
            to="/login"
            className="nav-btn bg-white text-xl text-slate-700 font-bold py-2 px-5 rounded-3xl"
            onClick={() => {
              document.querySelector(".home").style.color = "white";
              document.querySelector(".about").style.color = "white";
              document.querySelector(".destination").style.color = "white";
              document.querySelector(".blog").style.color = "white";
              document.querySelector(".contact").style.color = "white";
              setHome(1);
              if (isLoggedIn.value) {
                setHome(1);

                Cookies.remove("id");
                dispatch(setIsLoggedIn(false));
              } else {
                dispatch(setWantToLogin(true));
              }
            }}
          >
            {isLoggedIn.value ? "Sign Out" : "Sign In"}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
