import Navbar from "./navbar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedInLoginSelector } from "../slices/isloggedinslice";
import Blog from "./blog";
import Contact from "./contact";
import Home from "./home";
import Login from "./login";
import Destination from "./destination";
import About from "./about";
import Footer from "./footer";
import NullComponent from "./nullcomponent";

const Header = () => {
  const isLoggedIn = useSelector(isLoggedInLoginSelector);
  return (
    <>
      <BrowserRouter>
        <div className="header-bg parent-container rounded-t-3xl w-full ">
          <Navbar />
          <div className="lower-body-header ">
            <h1 className="text-6xl text-left font-semibold text-cyan-200 pb-3 ">
              Make your travel memorable
            </h1>

            <h1 className="text-lg font-semibold text-cyan-400 text-left pb-8 justi-text">
              Embark on unforgettable journeys with Nature Tour, your go-to
              destination for seamless holiday planning. Discover tailor-made
              itineraries, expert guidance, and personalized experiences. Let us
              turn your travel dreams into reality
            </h1>
            <div className="flex justify-start">
              <Link
                to="/destination"
                onClick={() => {
                  document.querySelector(".home").style.color = "white";
                  document.querySelector(".about").style.color = "white";
                  document.querySelector(".destination").style.color =
                    "#2E97A7";
                  document.querySelector(".blog").style.color = "white";
                  document.querySelector(".contact").style.color = "white";
                }}
                className="text-xl text-left font-bold text-slate-800 rounded-3xl bg-white py-1 px-4"
              >
                EXPLORE
              </Link>
            </div>
          </div>
        </div>
        <div className="overlay-img1-div rounded-2xl"></div>
        <div className="overlay-img2-div rounded-2xl"></div>
        <div className="overlay-img3-div rounded-2xl"></div>
        <div className="overlay-img4-div rounded-2xl"></div>
        <div className="overlay-img5-div rounded-2xl"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<NullComponent />} />
          <Route
            path="/login"
            element={isLoggedIn.value ? <Home /> : <Home />}
          />
        </Routes>
      </BrowserRouter>
      <div className="pb-4">
        <Footer />
      </div>
    </>
  );
};

export default Header;
