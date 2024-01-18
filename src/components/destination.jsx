import { useEffect, useState } from "react";
import axios from "axios";
import fav from "../assets/favorite.png";
import DestinationDetails from "./destinationdetail";

const Destination = () => {
  const [destinationData, setDestinationData] = useState([]);
  const [dId, setDId] = useState("");
  useEffect(() => {
    window.scrollTo(0, 550);

    axios
      .get("https://lazy-rose-shark-ring.cyclic.app/user/destination")
      .then((res) => setDestinationData(res.data))
      .catch((err) => console.log(err));
  }, [dId, setDId]);
  return (
    <>
      {dId.length > 0 ? (
        <DestinationDetails id={dId} />
      ) : (
        <div className="flex place-content-center">
          <div className="grid grid-cols-4 gap-12">
            {destinationData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="img-comp pb-12"
                  onClick={() => setDId(item._id)}
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

export default Destination;
