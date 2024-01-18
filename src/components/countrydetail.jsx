import { useEffect, useState } from "react";
import axios from "axios";
import "../css/home.css";
import fav from "../assets/favorite.png";
import DestinationDetails from "./destinationdetail";

const CountryDetail = (props) => {
  const [destData, setDestData] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    window.scrollTo(0, 500);
    axios
      .get(
        `https://lazy-rose-shark-ring.cyclic.app/user/count/dest/${props.id}`
      )
      .then((res) => setDestData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDest = (id) => {
    setId(id);
  };
  return (
    <>
      {id ? (
        <DestinationDetails id={id} />
      ) : (
        <div className="flex place-content-center">
          <div className="grid grid-cols-3 mb-8 gap-8">
            {destData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="img-comp"
                  onClick={() => handleDest(item._id)}
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
                      <div className="text-xl font-semibold">{item.rating}</div>
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
      )}
    </>
  );
};

export default CountryDetail;
