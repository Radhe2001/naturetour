import "../css/home.css";
import fav from "../assets/favorite.png";
import img5 from "../assets/img5.png";
import { useState, useEffect } from "react";
import nextTransparent from "../assets/next_transparent.png";
import nextColored from "../assets/next_colored.png";
import backColored from "../assets/back_colored.png";
import backTransparent from "../assets/back_transparent.png";
import { Link } from "react-router-dom";
import axios from "axios";
import CountryDeatil from "./countrydetail";
import DestinationDetails from "./destinationdetail";

const Home = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [backImg, setBackImg] = useState(backTransparent);
  const [nextImg, setNextImg] = useState(nextColored);
  const [firstRowData, setFirstRowData] = useState([]);
  const [secondRowData, setSecondRowData] = useState({});
  const [thirdRowData, setThirdRowData] = useState({});
  const [fourthRowData, setFourthRowData] = useState([]);
  const [id, setId] = useState("");
  const [dId, setDId] = useState("");

  useEffect(() => {
    axios
      .get("https://lazy-rose-shark-ring.cyclic.app/user/home")
      .then((res) => {
        setFirstRowData([
          res.data.country[0],
          res.data.country[1],
          res.data.country[2],
          res.data.country[3],
        ]);
        setSecondRowData(res.data.country[4]);
        setThirdRowData(res.data.country[5]);
        setFourthRowData([
          res.data.destination[0],
          res.data.destination[1],
          res.data.destination[2],
        ]);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (imgIndex === 0) {
      setBackImg(backTransparent);
      setNextImg(nextColored);
    } else if (imgIndex === 4) {
      setBackImg(backColored);
      setNextImg(nextTransparent);
    } else {
      setBackImg(backColored);
      setNextImg(nextColored);
    }
  }, [imgIndex, setImgIndex, id, dId]);

  const countryClick = (id) => {
    setId(id);
  };

  const handleDestination = (id) => {
    setDId(id);
  };
  return (
    <>
      {dId ? (
        <DestinationDetails id={dId} />
      ) : id ? (
        <CountryDeatil id={id} />
      ) : (
        <div>
          {/* popular destination div start */}
          <div className="pop-dest pb-16">
            <div className="text-left" style={{ width: "100%" }}>
              <div className="flex">
                <div className="text-4xl py-6 text-slate-900 font-bold">
                  Popular Destinations
                </div>
                <div className="dest-ref-div flex gap-4 py-8">
                  <div className="text-2xl  text-slate-800 font-semibold">
                    Explore more
                  </div>
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
                  >
                    <div className="dest-ref h-8 w-8 bg-cyan-400 rounded-full "></div>
                  </Link>
                </div>
              </div>
              <div
                className="text-xl pb-12 justi-text"
                style={{ width: "50%" }}
              >
                Explore iconic cities like Paris, adorned with the Eiffel Tower,
                or venture to the serene landscapes of Bali. Discover historical
                wonders in Rome and relax on the stunning beaches of Maldives.
              </div>
            </div>
            <div className="flex gap-10">
              {firstRowData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="parent-container"
                    onClick={(e) => countryClick(item._id)}
                  >
                    <img
                      className="rounded-3xl"
                      src={
                        "https://lazy-rose-shark-ring.cyclic.app/Country/" +
                        item.image
                      }
                      style={{ height: "360px", width: "300px" }}
                    />
                    <div className=" w-full flex place-content-center">
                      <div
                        className="text-pop-dest-image text-left px-6 py-2 rounded-b-3xl"
                        style={{ width: "100%" }}
                      >
                        <h1 className="text-md pb-2 text-cyan-400">
                          {item.name}
                        </h1>
                        <h1 className="text-xl text-cyan-200 text-justify">
                          {item.shortDescription.substring(0, 40)}
                        </h1>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* popular destination div end */}

          {/* explore destination 1 start */}

          <div className="explore-dest-one flex pb-12">
            <div
              className="stack-one rounded-r-2xl"
              style={{ height: "420px", width: "350px" }}
            >
              <div
                className="dest-one-img flex place-items-center place-content-center"
                style={{ height: "440px", width: "370px" }}
              >
                <img
                  className=""
                  src={
                    "https://lazy-rose-shark-ring.cyclic.app/Country/" +
                    secondRowData.image
                  }
                  style={{ height: "420px", width: "350px" }}
                />
              </div>
            </div>
            <div className="dest-one-right text-left">
              <h1 className="text-4xl py-6 text-slate-900 font-bold">
                Explore {secondRowData.name}
              </h1>
              <h1 className="text-xl pb-12 justi-text">
                {secondRowData.description}
              </h1>
              <button
                className="explore-one-btn py-3 px-6 text-xl font-semibold rounded-3xl text-cyan-300"
                onClick={(e) => countryClick(secondRowData._id)}
              >
                EXPLORE
              </button>
            </div>
          </div>

          {/* explore destination 1 end */}

          {/* explore destination 2 div start */}

          <div className="dest-div-two-parent flex place-content-center pt-10 pb-12 ">
            <div className="dest-div-two flex rounded-l-2xl">
              <div className="dest-two-text text-left">
                <h1 className="text-4xl py-6 text-cyan-200 font-bold">
                  Explore {thirdRowData.name}
                </h1>
                <h1 className="text-xl text-cyan-400 pb-12 justi-text">
                  {thirdRowData.description}
                </h1>
                <button
                  className="bg-cyan-200 py-3 px-6 rounded-3xl text-xl font-semibold"
                  onClick={(e) => countryClick(thirdRowData._id)}
                >
                  EXPLORE
                </button>
              </div>
              <div
                className="dest-two-img flex place-items-center place-content-center"
                style={{ height: "440px", width: "370px" }}
              >
                <img
                  className=""
                  src={
                    "https://lazy-rose-shark-ring.cyclic.app/Country/" +
                    thirdRowData.image
                  }
                  style={{ height: "420px", width: "350px" }}
                />
              </div>
            </div>
          </div>

          {/* explore destination 2 div end */}

          {/* destination gallery div start */}

          <div className="flex place-content-center">
            <div className="dest-gal-parent ">
              <div className="dest-gal-text text-left px-10">
                <div className="text-4xl py-6 text-slate-800 font-bold">
                  Destination Gallery
                </div>
                <div className="flex">
                  <div className="dest-gal-desc-div text-xl pb-12 justi-text">
                    Embark on a visual odyssey through Destination Gallery
                    featuring Indonesia's cultural richness, Miami's vibrant
                    energy, Hawaii's tropical paradise, Thailand's exotic
                    allure, Iceland's natural wonders, and Switzerland's
                    picturesque landscapes. Explore captivating destinations.
                  </div>
                </div>
              </div>
              <div className="dest-gal-img flex gap-16 place-content-center">
                {fourthRowData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="img-comp"
                      onClick={(e) => handleDestination(item._id)}
                    >
                      <div
                        className="comp-img rounded-3xl"
                        style={{
                          backgroundImage: `url(https://lazy-rose-shark-ring.cyclic.app/Destination/${item.image})`,
                        }}
                      ></div>
                      <div className="flex pt-6">
                        <div className="text-left text-xl font-semibold">
                          {item.name}, {item.country}
                        </div>
                        <div className="ml-auto flex place-items-center gap-2">
                          <div
                            className="h-4 w-4 bg-cover "
                            style={{ backgroundImage: `url(${fav})` }}
                          ></div>
                          <div className="text-xl font-semibold">
                            {item.rating}
                          </div>
                        </div>
                      </div>
                      <div className="flex pt-1">
                        <div className="text-left text-slate-800 text-lg">
                          ${item.cost}/person
                        </div>
                        <div className="ml-auto text-slate-800 text-md">
                          {item.duration} Days & Nights
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* destination gallery div end */}
        </div>
      )}
    </>
  );
};

export default Home;
