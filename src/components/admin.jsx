import { useEffect, useState } from "react";
import "../css/admin.css";
import UserComponent from "./usercomponent";
import CountryComponent from "./countrycomponent";
import DestinationComponent from "./destinationcomponent";
import BlogComponent from "./blogcomponent";
const Admin = () => {
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    if (current === 1) {
      document.querySelector(".user-nav-admin").style.color = "#860A35";
      document.querySelector(".country-nav-admin").style.color = "#FAF6F0";
      document.querySelector(".destination-nav-admin").style.color = "#FAF6F0";
      document.querySelector(".blog-nav-admin").style.color = "#FAF6F0";
    } else if (current === 2) {
      document.querySelector(".user-nav-admin").style.color = "#FAF6F0";
      document.querySelector(".country-nav-admin").style.color = "#860A35";
      document.querySelector(".destination-nav-admin").style.color = "#FAF6F0";
      document.querySelector(".blog-nav-admin").style.color = "#FAF6F0";
    } else if (current === 3) {
      document.querySelector(".user-nav-admin").style.color = "#FAF6F0";
      document.querySelector(".country-nav-admin").style.color = "#FAF6F0";
      document.querySelector(".destination-nav-admin").style.color = "#860A35";
      document.querySelector(".blog-nav-admin").style.color = "#FAF6F0";
    } else {
      document.querySelector(".user-nav-admin").style.color = "#FAF6F0";
      document.querySelector(".country-nav-admin").style.color = "#FAF6F0";
      document.querySelector(".destination-nav-admin").style.color = "#FAF6F0";
      document.querySelector(".blog-nav-admin").style.color = "#860A35";
    }
  }, [current, setCurrent]);
  return (
    <>
      <div className=" ">
        <div className="flex place-content-center my-4 ">
          <div className="admin-nav flex place-content-center gap-16 text-4xl font-bold text-cyan-300 rounded-full">
            <div
              className="user-nav-admin py-2 px-8 cursor-pointer"
              onClick={() => setCurrent(1)}
            >
              User
            </div>
            <div
              className="country-nav-admin py-2 px-8 cursor-pointer"
              onClick={() => setCurrent(2)}
            >
              Country
            </div>
            <div
              className="destination-nav-admin py-2 px-8 cursor-pointer"
              onClick={() => setCurrent(3)}
            >
              Destination
            </div>
            <div
              className="blog-nav-admin py-2 px-8 cursor-pointer"
              onClick={() => setCurrent(4)}
            >
              Blog
            </div>
          </div>
        </div>
        {current == 1 ? (
          <UserComponent />
        ) : current == 2 ? (
          <CountryComponent />
        ) : current == 3 ? (
          <DestinationComponent />
        ) : (
          <BlogComponent />
        )}
      </div>
    </>
  );
};

export default Admin;
